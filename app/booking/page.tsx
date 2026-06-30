"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2, ChevronRight, Clock, Mail, Send, User } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { format } from "date-fns";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company name is required").max(100),
  phone: z.string().trim().min(1, "Phone/WhatsApp is required").max(20),
  website: z.string().trim().max(255).optional(),
  service: z.string().trim().min(1, "Service type is required"),
  expert: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const experts = [
  { id: "abu-sama-kias", name: "Abu Sama Kias", role: "CEO & Founder" },
  { id: "abm-reza", name: "A.B.M. REZA ISLAM", role: "Managing Director" },
  { id: "any", name: "Any Available Expert", role: "Consulting Team" },
];

const services = [
  "Government e-GP Tenders",
  "Solar Panel Service",
  "IT & Web Application Solutions",
  "Cyber Security & Auditing",
  "European Visa & Travel Advisory",
  "Global Manpower Solutions",
  "Digital Marketing & E-Commerce",
  "General Business Consultation",
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", 
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
  "04:00 PM", "04:30 PM", "05:00 PM"
];

const BookingContent = () => {
  const searchParams = useSearchParams();
  const expertParam = searchParams.get("expert");
  
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!date) return;
      setLoadingSlots(true);
      try {
        const dateOnly = format(date, 'yyyy-MM-dd');
        const res = await fetch(`/api/booking?date=${dateOnly}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setBookedSlots(data.bookedSlots || []);
        } else {
          setBookedSlots([]);
        }
      } catch (err) {
        console.error("Failed to fetch booked slots", err);
        setBookedSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    };
    fetchBookedSlots();
  }, [date]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    service: "",
    expert: expertParam || "any",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleNextStep = () => {
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setStep(2);
  };

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({ title: "Select a Date", description: "Please select a preferred date for the meeting.", variant: "destructive" });
      return;
    }
    if (!selectedTime) {
      toast({ title: "Select a Time", description: "Please select a preferred time slot.", variant: "destructive" });
      return;
    }

    setSending(true);
    
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          date: format(date, 'yyyy-MM-dd'),
          time: selectedTime,
          expert: experts.find(e => e.id === form.expert)?.name || form.expert,
        })
      });
      
      const data = await res.json();
      
      if (data.success) {
        if (data.previewUrl) {
          setPreviewUrl(data.previewUrl);
        }
        setStep(3); // Success step
      } else {
        toast({ title: "Error", description: data.error || "Failed to send booking request.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const inputClass = (name: string) =>
    `w-full px-5 py-4 text-sm rounded-2xl bg-secondary/30 border text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-300 ${
      focusedField === name
        ? "border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.15)] bg-secondary/60"
        : errors[name]
        ? "border-destructive/40"
        : "border-border/25 hover:border-border/50"
    }`;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <div className="fixed inset-0 mesh-gradient pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.05),transparent_60%)] pointer-events-none blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,hsl(var(--accent)/0.04),transparent_60%)] pointer-events-none blur-[100px]" />
      
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-6 flex-1 flex flex-col items-center justify-center">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md mb-6 shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
          >
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary font-bold tracking-[0.2em] uppercase">Schedule Meeting</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Book a <span className="text-gradient-cyan">Consultation</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your preferred date and time to speak with our experts. All booking requests are sent directly to our official inbox.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-5xl rounded-[2.5rem] border border-border/20 bg-card/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none" />
          
          <div className="relative p-2 md:p-4">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Your Details</h2>
                      <p className="text-sm text-muted-foreground">Tell us a bit about yourself and the project.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="John Doe" />
                      {errors.name && <p className="text-xs text-destructive mt-2 ml-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="john@company.com" />
                      {errors.email && <p className="text-xs text-destructive mt-2 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Phone / WhatsApp *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+1 234 567 890" />
                      {errors.phone && <p className="text-xs text-destructive mt-2 ml-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Company *</label>
                      <input name="company" value={form.company} onChange={handleChange} className={inputClass("company")} placeholder="Your Company Ltd." />
                      {errors.company && <p className="text-xs text-destructive mt-2 ml-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Website / LinkedIn (Optional)</label>
                      <input name="website" value={form.website} onChange={handleChange} className={inputClass("website")} placeholder="https://example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Expert Preference</label>
                      <div className="relative">
                        <select name="expert" value={form.expert} onChange={handleChange} className={`${inputClass("expert")} appearance-none`}>
                          {experts.map(e => <option key={e.id} value={e.id} className="bg-background text-foreground">{e.name} - {e.role}</option>)}
                        </select>
                        <User className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Service Type *</label>
                    <div className="relative">
                      <select name="service" value={form.service} onChange={handleChange} className={`${inputClass("service")} appearance-none`}>
                        <option value="" className="bg-background text-foreground">Select a service...</option>
                        {services.map(s => <option key={s} value={s} className="bg-background text-foreground">{s}</option>)}
                      </select>
                    </div>
                    {errors.service && <p className="text-xs text-destructive mt-2 ml-1">{errors.service}</p>}
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest mb-3 ml-1">Short Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} className={`${inputClass("message")} resize-none`} placeholder="Briefly describe what you'd like to discuss..." />
                    {errors.message && <p className="text-xs text-destructive mt-2 ml-1">{errors.message}</p>}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all flex items-center gap-2"
                    >
                      Continue to Scheduling <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Calendar & Time */}
              {step === 2 && (
                <motion.form
                  key="step2"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border/20"
                >
                  {/* Left: Calendar */}
                  <div className="p-8 md:p-10 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8 w-full">
                      <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">Select Date</h2>
                        <p className="text-sm text-muted-foreground">Pick a date for the meeting.</p>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-[2rem] bg-background/50 border border-border/40 shadow-inner">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || date.getDay() === 5; // Disable past and Fridays
                        }}
                        className="rounded-md"
                        classNames={{
                          head_cell: "text-muted-foreground font-normal text-[0.8rem] w-10",
                          cell: "h-10 w-10 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                          day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-primary/20 rounded-full transition-colors",
                          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-full shadow-[0_0_15px_hsl(var(--primary)/0.4)]",
                          day_today: "bg-accent text-accent-foreground rounded-full",
                          day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-transparent aria-selected:text-muted-foreground aria-selected:opacity-30",
                          day_disabled: "text-muted-foreground opacity-50 hover:bg-transparent",
                          day_hidden: "invisible",
                        }}
                      />
                    </div>
                  </div>

                  {/* Right: Time Slots & Submit */}
                  <div className="p-8 md:p-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8 text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-bold">
                        {date ? format(date, "EEEE, MMMM do") : "Select a date"}
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 flex-1 overflow-y-auto pr-2" style={{ maxHeight: '280px' }}>
                      {timeSlots.map((time) => {
                        const isBooked = bookedSlots.includes(time);
                        return (
                          <button
                            key={time}
                            type="button"
                            disabled={isBooked}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-xl border font-semibold text-sm transition-all duration-300 ${
                              isBooked
                                ? "bg-secondary/10 border-border/10 text-muted-foreground/30 line-through cursor-not-allowed opacity-50"
                                : selectedTime === time
                                  ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                                  : "bg-secondary/20 border-border/30 hover:border-primary/50 hover:bg-primary/10 text-foreground"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 rounded-xl font-bold border border-border/40 hover:bg-secondary transition-colors text-muted-foreground"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={sending || !date || !selectedTime}
                        className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {sending ? "Processing..." : <><CheckCircle2 className="w-5 h-5" /> Confirm Booking</>}
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}

              {/* STEP 3: Success */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 md:p-20 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-8 relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-accent/20"
                    />
                    <CheckCircle2 className="w-12 h-12 text-accent" />
                  </div>
                  
                  <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Booking Request Sent!
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                    Thank you, <strong className="text-foreground">{form.name}</strong>. Your consultation request for 
                    <strong className="text-foreground"> {date && format(date, "MMM do")} at {selectedTime}</strong> has been sent directly to our official inbox. Our team will get back to you shortly.
                  </p>
                  
                  {previewUrl && (
                    <a
                      href={previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-8 px-6 py-3 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Preview Email Design
                    </a>
                  )}
                  
                  <button
                    onClick={() => {
                      setStep(1);
                      setForm({ ...form, name: "", message: "", company: "" });
                      setSelectedTime(null);
                      setPreviewUrl(null);
                    }}
                    className="px-8 py-4 bg-secondary text-foreground rounded-xl font-bold hover:bg-secondary/80 border border-border/30 transition-all"
                  >
                    Book Another Meeting
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
