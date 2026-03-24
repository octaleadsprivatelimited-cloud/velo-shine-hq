import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, CheckCircle2, Clock, XCircle, RefreshCw, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getBookings, updateBookingStatus, deleteBooking, type Booking } from "@/lib/bookingService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const statusConfig = {
  pending: { label: "Pending", icon: Clock, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  confirmed: { label: "Confirmed", icon: CheckCircle2, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  completed: { label: "Completed", icon: CheckCircle2, color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  cancelled: { label: "Cancelled", icon: XCircle, color: "bg-red-500/10 text-red-500 border-red-500/20" },
};

// Default admin credentials for testing
const ADMIN_EMAIL = "admin@velociwash.com";
const ADMIN_PASSWORD = "velociwash2026";

const AdminPage = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

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
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@velociwash.com"
                    className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
  }

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const data = await getBookings();
      setBookings(data);
    } catch (error) {
      toast({ title: "Failed to fetch bookings. Check Firebase config.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchBookings();
  }, [isAuthenticated]);

  const handleStatusChange = async (id: string, status: Booking["status"]) => {
    try {
      await updateBookingStatus(id, status);
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
      toast({ title: `Booking marked as ${status}` });
    } catch {
      toast({ title: "Failed to update status", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      toast({ title: "Booking deleted" });
    } catch {
      toast({ title: "Failed to delete booking", variant: "destructive" });
    }
  };

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    completed: bookings.filter((b) => b.status === "completed").length,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <LayoutDashboard className="w-8 h-8 text-primary" />
              <h1 className="font-display text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
            </div>
            <p className="text-muted-foreground">Manage all bookings from one place.</p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total", value: stats.total, color: "text-foreground" },
              { label: "Pending", value: stats.pending, color: "text-yellow-500" },
              { label: "Confirmed", value: stats.confirmed, color: "text-blue-500" },
              { label: "Completed", value: stats.completed, color: "text-emerald-500" },
            ].map((s) => (
              <Card key={s.label} className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-3xl font-bold font-display ${s.color}`}>{s.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px] bg-secondary border-border">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bookings</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={fetchBookings} className="border-border">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-20 text-muted-foreground">Loading bookings...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No bookings found.</div>
          ) : (
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Car</TableHead>
                    <TableHead className="hidden md:table-cell">Service</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((booking) => {
                    const cfg = statusConfig[booking.status];
                    return (
                      <TableRow key={booking.id} className="border-border">
                        <TableCell>
                          <div>
                            <p className="font-medium">{booking.name}</p>
                            <p className="text-xs text-muted-foreground">{booking.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {booking.carType} {booking.carModel && `- ${booking.carModel}`}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{booking.service}</TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{booking.date}</p>
                            <p className="text-xs text-muted-foreground">{booking.timeSlot}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={cfg.color}>
                            {cfg.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Select
                              value={booking.status}
                              onValueChange={(v) => handleStatusChange(booking.id!, v as Booking["status"])}
                            >
                              <SelectTrigger className="w-[130px] h-8 text-xs bg-secondary border-border">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(booking.id!)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminPage;
