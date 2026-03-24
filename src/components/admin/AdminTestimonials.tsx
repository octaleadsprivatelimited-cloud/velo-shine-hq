import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, Star, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial, type Testimonial } from "@/lib/adminService";

const emptyForm = { name: "", car: "", rating: 5, text: "" };

const AdminTestimonials = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  const fetchData = async () => {
    setLoading(true);
    try { setItems(await getTestimonials()); } catch { toast({ title: "Failed to load testimonials", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdd = async () => {
    if (!form.name || !form.text) { toast({ title: "Name and review text required", variant: "destructive" }); return; }
    try {
      await addTestimonial(form);
      setShowAdd(false); setForm(emptyForm); fetchData();
      toast({ title: "Testimonial added" });
    } catch { toast({ title: "Failed to add", variant: "destructive" }); }
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateTestimonial(id, form);
      setEditing(null); fetchData();
      toast({ title: "Testimonial updated" });
    } catch { toast({ title: "Failed to update", variant: "destructive" }); }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTestimonial(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
      toast({ title: "Testimonial deleted" });
    } catch { toast({ title: "Failed to delete", variant: "destructive" }); }
  };

  const TestimonialForm = ({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) => (
    <div className="bg-card border border-border rounded-xl p-6 space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Customer Name *</Label>
          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-secondary border-border h-11" />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Car Model</Label>
          <Input value={form.car} onChange={(e) => setForm({ ...form, car: e.target.value })} placeholder="e.g. Hyundai Creta" className="bg-secondary border-border h-11" />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rating</Label>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((r) => (
            <button key={r} type="button" onClick={() => setForm({ ...form, rating: r })} className="p-1 rounded-lg hover:bg-secondary transition-colors">
              <Star className={`w-7 h-7 ${r <= form.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Review Text *</Label>
        <Textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} className="bg-secondary border-border" rows={3} />
      </div>
      <div className="flex gap-3 pt-2">
        <Button onClick={onSave} className="bg-primary text-primary-foreground h-10">
          <Save className="w-4 h-4 mr-2" /> Save
        </Button>
        <Button variant="outline" onClick={onCancel} className="border-border h-10">Cancel</Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground font-medium">{items.length} review{items.length !== 1 ? "s" : ""}</p>
        {!showAdd && (
          <Button onClick={() => { setShowAdd(true); setForm(emptyForm); setEditing(null); }} className="bg-primary text-primary-foreground h-10">
            <Plus className="w-4 h-4 mr-2" /> Add Testimonial
          </Button>
        )}
      </div>

      {showAdd && <TestimonialForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />}

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading testimonials...</div>
      ) : items.length === 0 && !showAdd ? (
        <div className="bg-card border border-border rounded-xl text-center py-20">
          <MessageSquareQuote className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground font-medium">No testimonials yet</p>
          <p className="text-xs text-muted-foreground/70 mt-1">Add customer reviews to build trust</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t) =>
            editing === t.id ? (
              <TestimonialForm key={t.id} onSave={() => handleUpdate(t.id!)} onCancel={() => setEditing(null)} />
            ) : (
              <div key={t.id} className="bg-card border border-border rounded-xl p-5 group hover:border-primary/20 transition-colors relative">
                <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" onClick={() => { setEditing(t.id!); setForm({ name: t.name, car: t.car, rating: t.rating, text: t.text }); }} className="h-7 w-7">
                    <Edit2 className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(t.id!)} className="text-destructive hover:text-destructive h-7 w-7">
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  {Array.from({ length: 5 - t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-muted-foreground/20" />)}
                </div>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">"{t.text}"</p>
                <div className="border-t border-border pt-3">
                  <p className="text-sm font-semibold">{t.name}</p>
                  {t.car && <p className="text-xs text-muted-foreground">{t.car}</p>}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;
