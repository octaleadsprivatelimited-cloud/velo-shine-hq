import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, CalendarCheck, Wrench, Image, MessageSquareQuote, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminBookings from "@/components/admin/AdminBookings";
import AdminServices from "@/components/admin/AdminServices";
import AdminGallery from "@/components/admin/AdminGallery";
import AdminTestimonials from "@/components/admin/AdminTestimonials";

const ADMIN_EMAIL = "admin@velociwash.com";
const ADMIN_PASSWORD = "velociwash2026";

const AdminPage = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({ title: "Welcome, Admin!" });
    } else {
      toast({ title: "Invalid credentials", variant: "destructive" });
    }
  };

  if (!isAuthenticated) {
    return (
      <AdminLogin
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="font-display text-2xl md:text-4xl font-bold">Admin Dashboard</h1>
                  <p className="text-muted-foreground text-sm">Manage your entire website from here.</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => setIsAuthenticated(false)} className="border-border">
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </div>
          </motion.div>

          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="w-full md:w-auto bg-secondary border border-border mb-6 flex-wrap h-auto gap-1 p-1">
              <TabsTrigger value="bookings" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <CalendarCheck className="w-4 h-4" /> Bookings
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Wrench className="w-4 h-4" /> Services
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Image className="w-4 h-4" /> Gallery
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MessageSquareQuote className="w-4 h-4" /> Testimonials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bookings"><AdminBookings /></TabsContent>
            <TabsContent value="services"><AdminServices /></TabsContent>
            <TabsContent value="gallery"><AdminGallery /></TabsContent>
            <TabsContent value="testimonials"><AdminTestimonials /></TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminPage;
