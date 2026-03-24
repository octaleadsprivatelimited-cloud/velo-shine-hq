import { useState, useEffect } from "react";
import { Trash2, RefreshCw, CheckCircle2, Clock, XCircle, CalendarCheck, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getBookings, updateBookingStatus, deleteBooking, type Booking } from "@/lib/adminService";

const statusConfig = {
  pending: { label: "Pending", icon: Clock, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  confirmed: { label: "Confirmed", icon: CheckCircle2, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  completed: { label: "Completed", icon: CheckCircle2, color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  cancelled: { label: "Cancelled", icon: XCircle, color: "bg-red-500/10 text-red-400 border-red-500/20" },
};

const AdminBookings = () => {
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchBookings = async () => {
    setLoading(true);
    try { setBookings(await getBookings()); } catch { toast({ title: "Failed to fetch bookings", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchBookings(); }, []);

  const handleStatusChange = async (id: string, status: Booking["status"]) => {
    try {
      await updateBookingStatus(id, status);
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
      toast({ title: `Booking marked as ${status}` });
    } catch { toast({ title: "Failed to update status", variant: "destructive" }); }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      toast({ title: "Booking deleted" });
    } catch { toast({ title: "Failed to delete booking", variant: "destructive" }); }
  };

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);
  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    completed: bookings.filter((b) => b.status === "completed").length,
  };

  const statCards = [
    { label: "Total Bookings", value: stats.total, icon: CalendarCheck, iconBg: "bg-primary/10", iconColor: "text-primary" },
    { label: "Pending", value: stats.pending, icon: Clock, iconBg: "bg-yellow-500/10", iconColor: "text-yellow-400" },
    { label: "Confirmed", value: stats.confirmed, icon: Users, iconBg: "bg-blue-500/10", iconColor: "text-blue-400" },
    { label: "Completed", value: stats.completed, icon: TrendingUp, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
            <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0`}>
              <s.icon className={`w-5 h-5 ${s.iconColor}`} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
              <p className="text-2xl font-bold font-display mt-0.5">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px] bg-card border-border h-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Bookings</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={fetchBookings} className="border-border h-10">
          <RefreshCw className="w-4 h-4 mr-2" /> Refresh
        </Button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading bookings...</div>
      ) : filtered.length === 0 ? (
        <div className="bg-card border border-border rounded-xl text-center py-20">
          <CalendarCheck className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground font-medium">No bookings found</p>
          <p className="text-xs text-muted-foreground/70 mt-1">Bookings will appear here when customers make appointments</p>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Customer</TableHead>
                <TableHead className="hidden md:table-cell text-xs font-semibold uppercase tracking-wider text-muted-foreground">Car</TableHead>
                <TableHead className="hidden md:table-cell text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</TableHead>
                <TableHead className="text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((booking) => {
                const cfg = statusConfig[booking.status];
                return (
                  <TableRow key={booking.id} className="border-border">
                    <TableCell>
                      <p className="font-medium text-sm">{booking.name}</p>
                      <p className="text-xs text-muted-foreground">{booking.phone}</p>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                      {booking.carType} {booking.carModel && `· ${booking.carModel}`}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{booking.service}</TableCell>
                    <TableCell>
                      <p className="text-sm">{booking.date}</p>
                      <p className="text-xs text-muted-foreground">{booking.timeSlot}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${cfg.color} text-xs font-medium`}>{cfg.label}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Select value={booking.status} onValueChange={(v) => handleStatusChange(booking.id!, v as Booking["status"])}>
                          <SelectTrigger className="w-[120px] h-8 text-xs bg-secondary border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(booking.id!)} className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8">
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
  );
};

export default AdminBookings;
