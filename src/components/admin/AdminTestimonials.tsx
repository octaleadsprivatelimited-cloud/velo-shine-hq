import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      setShowAdd(false);
      setForm(emptyForm);
      fetchData();
      toast({ title: "Testimonial added" });
    } catch { toast({ title: "Failed to add", variant: "destructive" }); }
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateTestimonial(id, form);
      setEditing(null);
      fetchData();
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
    <Card className="bg-card border-border">
      <CardContent className="pt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Customer Name *</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label>Car Model</Label>
            <Input value={form.car} onChange={(e) => setForm({ ...form, car: e.target.value })} placeholder="e.g. Hyundai Creta" className="bg-secondary border-border" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Rating</Label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((r) => (
              <button key={r} type="button" onClick={() => setForm({ ...form, rating: r })}>
                <Star className={`w-6 h-6 ${r <= form.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Review Text *</Label>
          <Textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} className="bg-secondary border-border" rows={3} />
        </div>
        <div className="flex gap-2 pt-2">
          <Button onClick={onSave} className="bg-primary text-primary-foreground"><Save className="w-4 h-4 mr-2" /> Save</Button>
          <Button variant="outline" onClick={onCancel} className="border-border">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">{items.length} Testimonials</h3>
        {!showAdd && (
          <Button onClick={() => { setShowAdd(true); setForm(emptyForm); setEditing(null); }} className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> Add Testimonial
          </Button>
        )}
      </div>

      {showAdd && <TestimonialForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />}

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading testimonials...</div>
      ) : items.length === 0 && !showAdd ? (
        <div className="text-center py-20 text-muted-foreground">No testimonials yet.</div>
      ) : (
        <div className="space-y-4">
          {items.map((t) =>
            editing === t.id ? (
              <TestimonialForm key={t.id} onSave={() => handleUpdate(t.id!)} onCancel={() => setEditing(null)} />
            ) : (
              <Card key={t.id} className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{t.car}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => { setEditing(t.id!); setForm({ name: t.name, car: t.car, rating: t.rating, text: t.text }); }}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(t.id!)} className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm text-muted-foreground">"{t.text}"</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;
