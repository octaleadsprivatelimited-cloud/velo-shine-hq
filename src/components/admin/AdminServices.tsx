import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, X, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getServices, addService, updateService, deleteService, type Service } from "@/lib/adminService";

const emptyService = { title: "", description: "", badge: "", features: [""], pricing: [{ plan: "", price: "" }], imageUrl: "", order: 0 };

const AdminServices = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(emptyService);

  const fetchData = async () => {
    setLoading(true);
    try { setServices(await getServices()); } catch { toast({ title: "Failed to load services", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdd = async () => {
    if (!form.title) { toast({ title: "Title is required", variant: "destructive" }); return; }
    try {
      await addService({ ...form, order: services.length });
      setShowAdd(false);
      setForm(emptyService);
      fetchData();
      toast({ title: "Service added" });
    } catch { toast({ title: "Failed to add service", variant: "destructive" }); }
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateService(id, form);
      setEditing(null);
      fetchData();
      toast({ title: "Service updated" });
    } catch { toast({ title: "Failed to update", variant: "destructive" }); }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteService(id);
      setServices((prev) => prev.filter((s) => s.id !== id));
      toast({ title: "Service deleted" });
    } catch { toast({ title: "Failed to delete", variant: "destructive" }); }
  };

  const startEdit = (s: Service) => {
    setEditing(s.id!);
    setForm({ title: s.title, description: s.description, badge: s.badge, features: s.features, pricing: s.pricing, imageUrl: s.imageUrl, order: s.order });
  };

  const ServiceForm = ({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) => (
    <Card className="bg-card border-border">
      <CardContent className="pt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label>Badge</Label>
            <Input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="e.g. Most Popular" className="bg-secondary border-border" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="bg-secondary border-border" rows={3} />
        </div>
        <div className="space-y-2">
          <Label>Image URL</Label>
          <Input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="https://..." className="bg-secondary border-border" />
        </div>
        <div className="space-y-2">
          <Label>Features (one per line)</Label>
          <Textarea
            value={form.features.join("\n")}
            onChange={(e) => setForm({ ...form, features: e.target.value.split("\n") })}
            placeholder="pH-neutral foam&#10;Scratch-free wash"
            className="bg-secondary border-border" rows={4}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Pricing Plans</Label>
            <Button variant="ghost" size="sm" onClick={() => setForm({ ...form, pricing: [...form.pricing, { plan: "", price: "" }] })}>
              <Plus className="w-3 h-3 mr-1" /> Add Plan
            </Button>
          </div>
          {form.pricing.map((p, i) => (
            <div key={i} className="flex gap-2 items-center">
              <Input value={p.plan} onChange={(e) => { const np = [...form.pricing]; np[i].plan = e.target.value; setForm({ ...form, pricing: np }); }} placeholder="Plan name" className="bg-secondary border-border" />
              <Input value={p.price} onChange={(e) => { const np = [...form.pricing]; np[i].price = e.target.value; setForm({ ...form, pricing: np }); }} placeholder="₹999" className="bg-secondary border-border w-32" />
              {form.pricing.length > 1 && (
                <Button variant="ghost" size="icon" onClick={() => setForm({ ...form, pricing: form.pricing.filter((_, j) => j !== i) })} className="text-destructive shrink-0">
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
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
        <h3 className="font-display text-lg font-semibold">{services.length} Services</h3>
        {!showAdd && (
          <Button onClick={() => { setShowAdd(true); setForm(emptyService); setEditing(null); }} className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> Add Service
          </Button>
        )}
      </div>

      {showAdd && <ServiceForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />}

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading services...</div>
      ) : services.length === 0 && !showAdd ? (
        <div className="text-center py-20 text-muted-foreground">No services yet. Add your first service.</div>
      ) : (
        <div className="space-y-4">
          {services.map((s) =>
            editing === s.id ? (
              <ServiceForm key={s.id} onSave={() => handleUpdate(s.id!)} onCancel={() => setEditing(null)} />
            ) : (
              <Card key={s.id} className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-base">{s.title}</CardTitle>
                    {s.badge && <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{s.badge}</span>}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => startEdit(s)}><Edit2 className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(s.id!)} className="text-destructive hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.pricing.map((p, i) => (
                      <span key={i} className="text-xs bg-secondary rounded px-2 py-1">{p.plan}: <span className="font-semibold text-primary">{p.price}</span></span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdminServices;
