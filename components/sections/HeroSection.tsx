import { Html, OrbitControls, Sphere, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScanRing, ConnectionArc } from "../Globe3D";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MousePointer2, X, Globe, ShieldCheck } from "lucide-react";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";

// --- Surface Image Card ---
const SurfaceImageCard = ({
  lat,
  lon,
  url,
  radius,
  onClick,
}: {
  lat: number;
  lon: number;
  url: string;
  radius: number;
  onClick: (url: string) => void;
}) => {
  const { viewport } = useThree();

  // responsive distance
  const responsiveFactor = Math.min(viewport.width / 10, 1) * 10;

  const position = useMemo(() => {
    const phi = (90 - lat) * (Math.PI / 180);
    const SHIFT_THETA = 0.25;
    const theta = (lon + 180) * (Math.PI / 180) + SHIFT_THETA;
    const offset = 0.015 * Math.sin(lat * 2);

    return [
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi) + offset,
      radius * Math.sin(phi) * Math.sin(theta),
    ] as [number, number, number];
  }, [lat, lon, radius]);

  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(new THREE.Vector3(0, 0, 0));
      groupRef.current.rotateX(Math.PI);
      groupRef.current.rotateZ(Math.PI);
    }
  }, [position]);

  return (
    <group position={position} ref={groupRef}>
      <Html transform occlude distanceFactor={responsiveFactor}>
        <motion.div
          onPointerDown={(e) => {
            e.stopPropagation();
            onClick(url);
          }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-6 sm:w-9 sm:h-6 md:w-10 md:h-7 bg-white/10 backdrop-blur-md border border-cyan-400/50 rounded-sm overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.6)] cursor-pointer group pointer-events-auto"
        >
          <img
            src={url}
            alt="client"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
          />
        </motion.div>
      </Html>
    </group>
  );
};

// --- Globe Scene ---
const GlobeScene = ({ onImageClick }: { onImageClick: (url: string) => void }) => {
  const globeRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<THREE.Mesh[]>([]);
  const { viewport } = useThree();

  const BASE_RADIUS = 3.2;
  const sceneScale = Math.min(viewport.width / 5, 1.2);
  const dynamicRadius = BASE_RADIUS * sceneScale;

  // Load high-res clear earth map texture
  const earthTexture = useTexture("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg");

  const connections = useMemo(() => [
    { start: [40, -10] as [number, number], end: [15, 30] as [number, number], color: "#00ffff", speed: 0.8 },
    { start: [15, 30] as [number, number], end: [-15, 60] as [number, number], color: "#00ffff", speed: 1.0 },
    { start: [-15, 60] as [number, number], end: [40, 100] as [number, number], color: "#00e5ff", speed: 0.9 },
    { start: [40, -10] as [number, number], end: [20, -60] as [number, number], color: "#00ffff", speed: 1.1 },
    { start: [20, -60] as [number, number], end: [-40, -80] as [number, number], color: "#00e5ff", speed: 0.7 },
  ], []);

  useFrame((state, delta) => {
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        const speeds = [0.002, -0.0025, 0.003];
        const speed = speeds[i] || 0.002;

        ring.rotation.x += speed;
        ring.rotation.y += speed * 0.6;
        ring.rotation.z += speed * 0.4;
      }
    });
  });

  const rows = [
    { lat: 45, count: 3 },
    { lat: 15, count: 4 },
    { lat: -15, count: 4 },
    { lat: -45, count: 3 },
  ];

  const images = useMemo(() => {
    const temp: any[] = [];
    rows.forEach((row, rowIdx) => {
      for (let i = 0; i < row.count; i++) {
        const offset = rowIdx % 2 === 0 ? 0 : (360 / row.count) / 2;
        const lon = (i / row.count) * 360 + offset;
        temp.push({
          lat: row.lat,
          lon: lon,
          url: `https://picsum.photos/seed/${row.lat + i}/200/140`,
        });
      }
    });
    return temp;
  }, []);

  return (
    <group scale={sceneScale}>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={3} color="#00ffff" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#ff00ff" />
      
      {/* Realistic 3D Space Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <group ref={globeRef}>
        {/* Textured Earth Sphere */}
        <mesh>
          <sphereGeometry args={[BASE_RADIUS * 0.98, 64, 64]} />
          <meshStandardMaterial 
            map={earthTexture}
            color="#ffffff" 
            emissive="#000a14"
            emissiveIntensity={0.2}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>



        {/* Connection Arcs */}
        <group scale={[BASE_RADIUS, BASE_RADIUS, BASE_RADIUS]}>
          {connections.map((conn, i) => (
            <ConnectionArc key={i} {...conn} />
          ))}
        </group>

        {/* Scan Rings */}
        <ScanRing radius={BASE_RADIUS + 0.3} speed={0.4} axis="y" />
        <ScanRing radius={BASE_RADIUS + 0.6} speed={0.15} axis="x" />
        <ScanRing radius={BASE_RADIUS + 0.8} speed={0.25} axis="z" />

        {/* Interactive Images */}
        {images.map((img, i) => (
          <SurfaceImageCard
            key={i}
            lat={img.lat}
            lon={img.lon}
            url={img.url}
            radius={dynamicRadius + 0.05}
            onClick={onImageClick}
          />
        ))}
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </group>
  );
};

// Hero Section
const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const rotatingTexts = ["Global Business", "Government Tenders", "Corporate Printing", "Web & IT Solutions", "Global Expansion"];

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-transparent backdrop-blur-[4px]">
      {/* Cinematic Ambient Lights */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.15),transparent_60%)] rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse,hsl(200,100%,50%/0.1),transparent_60%)] rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                YOUR GLOBAL SOURCING PARTNER
              </span>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] mb-7 tracking-[-0.02em]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="inline-block">We</span>{" "}
              <span className="inline-block">Make</span>
              <br />
              <span className="inline-block text-cyan-600 dark:text-cyan-400 font-bold dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] mt-2 mb-4 relative w-full">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="inline-block whitespace-nowrap"
                  >
                    {rotatingTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="inline-block">Easy</span>{" "}
              <span className="inline-block">for</span>{" "}
              <span className="inline-block">You.</span>
            </h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
             Whether you need to win government tenders, source premium solar panels, or build a scalable digital brand, we’ve got you covered. We simplify complex challenges so you can focus on growing your business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              <Link
                href="/services"
                className="group relative px-7 py-3.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] flex items-center gap-2 overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.2)] to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="relative">Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform relative" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground transition-all border border-border/30 bg-secondary/30 backdrop-blur-sm flex items-center gap-2 hover:border-primary/30"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT - 3D GLOBE */}
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] z-10 hidden md:block">
            {/* Cursor Helper */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="flex flex-col items-center">
                <MousePointer2 className="text-cyan-400 animate-bounce w-4 h-4 sm:w-6 sm:h-6 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                <span className="text-[10px] sm:text-xs text-white mt-1 drop-shadow-lg font-bold tracking-widest">HOVER & CLICK</span>
              </div>
            </div>

            {/* Floating Glassmorphism Cards */}
            <motion.div
              className="absolute top-16 -right-6 lg:-right-12 px-4 py-3 bg-card/20 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] z-20 flex items-center gap-3 pointer-events-none"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
              transition={{ duration: 1, delay: 1.5, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Global Reach</div>
                <div className="text-xl text-foreground font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>30+ Countries</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 -left-6 lg:-left-12 px-4 py-3 bg-card/20 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] z-20 flex items-center gap-3 pointer-events-none"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
              transition={{ duration: 1, delay: 1.8, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Trusted By</div>
                <div className="text-xl text-foreground font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>500+ Clients</div>
              </div>
            </motion.div>

            {isMounted && (
              <Canvas className="z-10" camera={{ position: [0, 0, 18], fov: 35 }} gl={{ alpha: true, antialias: true }}>
                <Suspense fallback={null}>
                  <GlobeScene onImageClick={setSelectedImage} />
                  <Stars radius={100} depth={50} count={1000} factor={4} fade />
                </Suspense>
              </Canvas>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#020813]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.15)] p-2 w-full max-w-lg"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 p-2 bg-cyan-500 text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,255,255,0.5)] z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-video w-full rounded-xl overflow-hidden relative group border border-cyan-500/20">
                <img 
                  src={selectedImage} 
                  alt="Global Client Project" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-cyan-400 font-bold text-xl mb-1 tracking-wide">Global Client Showcase</h3>
                    <p className="text-white/80 text-sm">Empowering international business with premium solutions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
