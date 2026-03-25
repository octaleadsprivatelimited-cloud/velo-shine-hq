import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Shield, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const carTypes = ["Hatchback", "Sedan", "SUV", "MUV", "Luxury"];
const serviceTypes = ["Foam Wash", "Interior Detailing", "Ceramic Coating", "Regular Cleaning"];
const timeSlots = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

const trustBadges = [
  { icon: Shield, label: "100% Safe Products" },
  { icon: Clock, label: "On-Time Guarantee" },
  { icon: Sparkles, label: "Premium Quality" },
];

const BookingPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", carType: "", carModel: "", service: "", timeSlot: "", address: "", notes: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.carType || !form.service || !date || !form.timeSlot || !form.address) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    try {
      const { addBooking } = await import("@/lib/adminService");
      await addBooking({ ...form, date: format(date, "PPP") });
      toast({ title: "Booking confirmed!", description: "We'll contact you shortly to confirm your slot." });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to save booking:", error);
      toast({ title: "Something went wrong", variant: "destructive" });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-extrabold mb-4">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-8">We'll contact you shortly to confirm your slot.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="border-border text-foreground hover:bg-secondary hover:border-primary/30 font-display rounded-xl">
              Book Another Wash
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Book a Car Wash — Schedule Your Doorstep Service | Velociwash"
        description="Book your doorstep car wash with Velociwash. Choose your service, pick a time slot, and we'll come to you. Easy online booking for foam wash, detailing & more."
        keywords="book car wash, schedule car wash, doorstep car wash booking, car detailing appointment, Velociwash booking, online car wash booking"
      />
      <Navbar />

      <section className="relative pt-24 overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-[hsl(225,25%,12%)]" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <CalendarIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Booking</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-background leading-tight">
              Schedule a <span className="text-primary">Wash</span>
            </h1>
            <p className="text-lg text-background/65 max-w-lg leading-relaxed">
              Fill in your details and we'll confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 pb-24 bg-secondary/50 relative">
        <div className="absolute inset-0 noise opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-7 md:p-9 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                  <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-background border-border h-12 rounded-xl focus:border-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="bg-background border-border h-12 rounded-xl focus:border-primary/50 transition-colors" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Car Type *</Label>
                  <Select onValueChange={(v) => handleChange("carType", v)}>
                    <SelectTrigger className="bg-background border-border h-12 rounded-xl"><SelectValue placeholder="Select car type" /></SelectTrigger>
                    <SelectContent>{carTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carModel" className="text-sm font-semibold">Car Model</Label>
                  <Input id="carModel" placeholder="e.g. Hyundai Creta" value={form.carModel} onChange={(e) => handleChange("carModel", e.target.value)} className="bg-background border-border h-12 rounded-xl focus:border-primary/50 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold">Service *</Label>
                <Select onValueChange={(v) => handleChange("service", v)}>
                  <SelectTrigger className="bg-background border-border h-12 rounded-xl"><SelectValue placeholder="Select service" /></SelectTrigger>
                  <SelectContent>{serviceTypes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal bg-background border-border h-12 rounded-xl", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className={cn("p-3 pointer-events-auto")} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Time Slot *</Label>
                  <Select onValueChange={(v) => handleChange("timeSlot", v)}>
                    <SelectTrigger className="bg-background border-border h-12 rounded-xl"><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>{timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-semibold">Address *</Label>
                <Textarea id="address" placeholder="Full address" value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="bg-background border-border rounded-xl" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-semibold">Additional Notes</Label>
                <Textarea id="notes" placeholder="Any special instructions..." value={form.notes} onChange={(e) => handleChange("notes", e.target.value)} className="bg-background border-border rounded-xl" rows={2} />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base h-14 btn-glow glow-border rounded-xl">
                Confirm Booking
              </Button>
            </motion.form>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-5"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-500 card-shine">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-sm">{badge.label}</span>
                </div>
              ))}

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-bold mb-3">Why Velociwash?</h3>
                <ul className="space-y-2.5">
                  {["Own water & electricity", "pH-neutral premium products", "Trained professionals", "Daily photo proof", "No hidden charges"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BookingPage;
