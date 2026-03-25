import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, CalendarCheck, Wrench, Image, MessageSquareQuote,
  LogOut, Menu, X, ChevronRight
} from "lucide-react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import AdminLogin from "@/components/admin/AdminLogin";
import AdminBookings from "@/components/admin/AdminBookings";
import AdminServices from "@/components/admin/AdminServices";
import AdminGallery from "@/components/admin/AdminGallery";
import AdminTestimonials from "@/components/admin/AdminTestimonials";

const navItems = [
  { key: "bookings", label: "Bookings", icon: CalendarCheck, description: "Manage appointments" },
  { key: "services", label: "Services", icon: Wrench, description: "Edit service offerings" },
  { key: "gallery", label: "Gallery", icon: Image, description: "Manage photos" },
  { key: "testimonials", label: "Reviews", icon: MessageSquareQuote, description: "Customer feedback" },
];

const AdminPage = () => {
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("bookings");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: "Welcome, Admin!" });
    } catch (err: any) {
      toast({ title: "Invalid credentials", description: err.message, variant: "destructive" });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast({ title: "Signed out" });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <AdminLogin
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
        loading={loginLoading}
      />
    );
  }

  const activeItem = navItems.find((n) => n.key === activeTab)!;

  const renderContent = () => {
    switch (activeTab) {
      case "bookings": return <AdminBookings />;
      case "services": return <AdminServices />;
      case "gallery": return <AdminGallery />;
      case "testimonials": return <AdminTestimonials />;
      default: return <AdminBookings />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-card border-r border-border flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-lg font-bold tracking-tight">Velociwash</h1>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">Management</p>
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <div className="flex-1 text-left">
                  <p className="leading-tight">{item.label}</p>
                  <p className={`text-[11px] leading-tight mt-0.5 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/70"}`}>
                    {item.description}
                  </p>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Button
            variant="outline"
            onClick={async () => {
              try {
                const result = await seedFirebaseData();
                if (result.services === 0 && result.testimonials === 0) {
                  toast({ title: "Data already exists", description: "No seeding needed — collections are not empty." });
                } else {
                  toast({ title: "Data seeded!", description: `Added ${result.services} services & ${result.testimonials} testimonials` });
                }
              } catch { toast({ title: "Seeding failed", variant: "destructive" }); }
            }}
            className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/10 border-border"
          >
            <Database className="w-4 h-4 mr-2" /> Seed Default Data
          </Button>
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">{user.email?.[0]?.toUpperCase() || "A"}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </Button>
        </div>
      </aside>

      <main className="flex-1 min-h-screen overflow-x-hidden">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center gap-4 px-6 py-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <activeItem.icon className="w-5 h-5 text-primary" />
              <div>
                <h2 className="font-display text-xl font-bold">{activeItem.label}</h2>
                <p className="text-xs text-muted-foreground">{activeItem.description}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
