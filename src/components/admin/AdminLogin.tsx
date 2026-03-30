import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminLoginProps {
  email: string;
  password: string;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
}

const AdminLogin = ({ email, password, onEmailChange, onPasswordChange, onSubmit, loading }: AdminLoginProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md mx-4"
      >
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/20">
          <div className="text-center mb-8">
            <div className="w-28 h-28 flex items-center justify-center mx-auto mb-5">
              <img src={logo} alt="Velociwash Logo" className="h-24 w-auto brightness-0 dark:invert" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2 text-sm">Sign in to the Velociwash admin panel</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                placeholder="admin@velociwash.com"
                className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="••••••••••"
                className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-semibold text-base group"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Signing in...</>
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" /></>
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Protected area · Velociwash Admin
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
