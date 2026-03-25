import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Shield, Clock, Droplets } from "lucide-react";
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

const carTypes = ["Hatchback", "Sedan", "SUV", "MUV", "Luxury"];
const serviceTypes = ["Foam Wash", "Interior Detailing", "Ceramic Coating", "Regular Cleaning"];
const timeSlots = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

const trust = [
  { icon: Shield, text: "Scratch-Free Guaranteed" },
  { icon: Clock, text: "On-Time, Every Time" },
  { icon: Droplets, text: "We Bring Our Own Water" },
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
    } catch (error) {
      console.error("Failed to save booking:", error);
    }
    const message = `Hi Velociwash! I'd like to book a wash.\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.carType} - ${form.carModel}\nService: ${form.service}\nDate: ${format(date, "PPP")}\nTime: ${form.timeSlot}\nAddress: ${form.address}${form.notes ? `\nNotes: ${form.notes}` : ""}`;
    window.open(`https://wa.me/919676031464?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">Booking Sent!</h2>
            <p className="text-muted-foreground mb-8">Your booking details have been sent via WhatsApp. We'll confirm your slot shortly.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="border-border text-foreground hover:bg-secondary font-display">
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
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left info panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 hidden lg:flex flex-col justify-center"
            >
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Book a Wash</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Schedule Your <span className="text-gradient">Wash</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Fill in your details and we'll confirm your booking via WhatsApp. It's that simple.
              </p>

              <div className="space-y-4">
                {trust.map((t) => (
                  <div key={t.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <t.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-medium text-sm">{t.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              {/* Mobile header */}
              <div className="lg:hidden mb-8">
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Book a Wash</span>
                <h1 className="font-display text-3xl font-bold mt-2">Schedule Your <span className="text-gradient">Wash</span></h1>
              </div>

              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-secondary border-border h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="bg-secondary border-border h-11" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Car Type *</Label>
                    <Select onValueChange={(v) => handleChange("carType", v)}>
                      <SelectTrigger className="bg-secondary border-border h-11"><SelectValue placeholder="Select car type" /></SelectTrigger>
                      <SelectContent>{carTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carModel">Car Model</Label>
                    <Input id="carModel" placeholder="e.g. Hyundai Creta" value={form.carModel} onChange={(e) => handleChange("carModel", e.target.value)} className="bg-secondary border-border h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Service *</Label>
                  <Select onValueChange={(v) => handleChange("service", v)}>
                    <SelectTrigger className="bg-secondary border-border h-11"><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>{serviceTypes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal bg-secondary border-border h-11", !date && "text-muted-foreground")}>
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
                    <Label>Time Slot *</Label>
                    <Select onValueChange={(v) => handleChange("timeSlot", v)}>
                      <SelectTrigger className="bg-secondary border-border h-11"><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>{timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea id="address" placeholder="Full address where you'd like the wash" value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="bg-secondary border-border" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any special instructions..." value={form.notes} onChange={(e) => handleChange("notes", e.target.value)} className="bg-secondary border-border" rows={2} />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base h-14 glow-border">
                  Confirm & Send via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your booking details will be sent to our WhatsApp for quick confirmation.
                </p>
              </form>
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
