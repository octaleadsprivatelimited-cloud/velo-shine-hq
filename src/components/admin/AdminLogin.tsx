import { motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AdminLoginProps {
  email: string;
  password: string;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AdminLogin = ({ email, password, onEmailChange, onPasswordChange, onSubmit }: AdminLoginProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm mx-auto px-6"
        >
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="text-center">
              <LayoutDashboard className="w-10 h-10 text-primary mx-auto mb-3" />
              <h2 className="font-display text-2xl font-bold">Admin Login</h2>
              <p className="text-sm text-muted-foreground mt-1">Enter your credentials to continue</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                  placeholder="admin@velociwash.com"
                  className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                  placeholder="••••••••"
                  className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold">
                Sign In
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
