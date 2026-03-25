import { useState, useEffect } from "react";
import { Trash2, RefreshCw, CheckCircle2, Clock, XCircle, CalendarCheck, Users, TrendingUp, Pencil, Eye, MapPin, Phone, Car, Wrench, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getBookings, updateBookingStatus, updateBooking, deleteBooking, type Booking } from "@/lib/adminService";

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
  const [viewBooking, setViewBooking] = useState<Booking | null>(null);
  const [editBooking, setEditBooking] = useState<Booking | null>(null);
  const [editForm, setEditForm] = useState({
    name: "", phone: "", carType: "", carModel: "", service: "", date: "", timeSlot: "", address: "", notes: "",
  });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

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

  const openEdit = (booking: Booking) => {
    setEditBooking(booking);
    setEditForm({
      name: booking.name, phone: booking.phone, carType: booking.carType, carModel: booking.carModel,
      service: booking.service, date: booking.date, timeSlot: booking.timeSlot, address: booking.address, notes: booking.notes,
    });
  };

  const handleEditSave = async () => {
    if (!editBooking?.id) return;
    setSaving(true);
    try {
      await updateBooking(editBooking.id, editForm);
      setBookings((prev) => prev.map((b) => (b.id === editBooking.id ? { ...b, ...editForm } : b)));
      setEditBooking(null);
      toast({ title: "Booking updated successfully" });
    } catch { toast({ title: "Failed to update booking", variant: "destructive" }); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      setDeleteConfirm(null);
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
                <TableHead className="hidden lg:table-cell text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</TableHead>
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
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="w-3 h-3" />{booking.phone}</p>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" />{booking.carType} {booking.carModel && `· ${booking.carModel}`}</span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Wrench className="w-3.5 h-3.5" />{booking.service}</span>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                      <span className="flex items-center gap-1 max-w-[150px] truncate"><MapPin className="w-3.5 h-3.5 shrink-0" />{booking.address || "—"}</span>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm">{booking.date}</p>
                      <p className="text-xs text-muted-foreground">{booking.timeSlot}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${cfg.color} text-xs font-medium`}>{cfg.label}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => setViewBooking(booking)} className="text-muted-foreground hover:text-foreground h-8 w-8" title="View Details">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="text-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 h-8 w-8" title="WhatsApp">
                          <a href={`https://wa.me/${booking.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${booking.name}, regarding your ${booking.service} booking on ${booking.date} at ${booking.timeSlot}.`)}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => openEdit(booking)} className="text-muted-foreground hover:text-primary h-8 w-8" title="Edit">
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Select value={booking.status} onValueChange={(v) => handleStatusChange(booking.id!, v as Booking["status"])}>
                          <SelectTrigger className="w-[110px] h-8 text-xs bg-secondary border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" onClick={() => setDeleteConfirm(booking.id!)} className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8" title="Delete">
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

      {/* View Details Dialog */}
      <Dialog open={!!viewBooking} onOpenChange={() => setViewBooking(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" /> Customer Details
            </DialogTitle>
          </DialogHeader>
          {viewBooking && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <DetailItem icon={<Users className="w-4 h-4" />} label="Name" value={viewBooking.name} />
                <DetailItem icon={<Phone className="w-4 h-4" />} label="Phone" value={viewBooking.phone} />
                <DetailItem icon={<Car className="w-4 h-4" />} label="Car" value={`${viewBooking.carType} ${viewBooking.carModel || ""}`} />
                <DetailItem icon={<Wrench className="w-4 h-4" />} label="Service" value={viewBooking.service} />
                <DetailItem icon={<CalendarCheck className="w-4 h-4" />} label="Date" value={`${viewBooking.date} · ${viewBooking.timeSlot}`} />
                <DetailItem icon={<MapPin className="w-4 h-4" />} label="Location" value={viewBooking.address || "Not provided"} />
              </div>
              {viewBooking.notes && (
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground font-medium mb-1">Notes</p>
                  <p className="text-sm">{viewBooking.notes}</p>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium">Status:</span>
                <Badge variant="outline" className={`${statusConfig[viewBooking.status].color} text-xs font-medium`}>
                  {statusConfig[viewBooking.status].label}
                </Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={!!editBooking} onOpenChange={() => setEditBooking(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Pencil className="w-5 h-5 text-primary" /> Edit Booking
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Customer Name</Label>
                <Input value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input value={editForm.phone} onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Car Type</Label>
                <Input value={editForm.carType} onChange={(e) => setEditForm({ ...editForm, carType: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Car Model</Label>
                <Input value={editForm.carModel} onChange={(e) => setEditForm({ ...editForm, carModel: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Service</Label>
                <Input value={editForm.service} onChange={(e) => setEditForm({ ...editForm, service: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input value={editForm.date} onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Time Slot</Label>
                <Input value={editForm.timeSlot} onChange={(e) => setEditForm({ ...editForm, timeSlot: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Address / Location</Label>
                <Input value={editForm.address} onChange={(e) => setEditForm({ ...editForm, address: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea value={editForm.notes} onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })} rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditBooking(null)}>Cancel</Button>
            <Button onClick={handleEditSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-destructive flex items-center gap-2">
              <Trash2 className="w-5 h-5" /> Delete Booking
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">Are you sure you want to delete this booking? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteConfirm && handleDelete(deleteConfirm)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-secondary/30 rounded-lg p-3">
    <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
    <p className="text-sm font-medium">{value}</p>
  </div>
);

export default AdminBookings;
