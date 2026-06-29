import { notFound } from "next/navigation";
import Image from "next/image";
import { Globe, Linkedin, Mail, Phone } from "lucide-react";
import { vCardsData } from "@/data/vcards";

interface VcardPageProps {
  params: {
    name: string;
  };
}

export default async function VcardPage({ params }: VcardPageProps) {
  const { name } = await params;
  const profile = vCardsData[name as keyof typeof vCardsData];

  if (!profile) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full border-4 border-black overflow-hidden mb-8 shadow-lg">
          <Image
            src={profile.image}
            alt={profile.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl font-black text-black uppercase tracking-tight mb-1" style={{ letterSpacing: "-0.02em" }}>
          {profile.name}
        </h1>
        <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-10">
          {profile.title}
        </h2>

        {/* Action Icons */}
        <div className="flex items-center gap-4 justify-center">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Phone className="w-8 h-8 text-white fill-white" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Mail className="w-8 h-8 text-white fill-white" />
          </a>

          {/* Website */}
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Globe className="w-8 h-8 text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Linkedin className="w-8 h-8 text-white fill-white" />
          </a>
        </div>
      </div>
    </main>
  );
}
