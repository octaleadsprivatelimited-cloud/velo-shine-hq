import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, X, Save, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
      setShowAdd(false); setForm(emptyService); fetchData();
      toast({ title: "Service added" });
    } catch { toast({ title: "Failed to add service", variant: "destructive" }); }
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateService(id, form);
      setEditing(null); fetchData();
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
    <div className="bg-card border border-border rounded-xl p-6 space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Title *</Label>
          <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="bg-secondary border-border h-11" />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Badge</Label>
          <Input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="e.g. Most Popular" className="bg-secondary border-border h-11" />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</Label>
        <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="bg-secondary border-border" rows={3} />
      </div>
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Image URL</Label>
        <Input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="https://..." className="bg-secondary border-border h-11" />
      </div>
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Features (one per line)</Label>
        <Textarea
          value={form.features.join("\n")}
          onChange={(e) => setForm({ ...form, features: e.target.value.split("\n") })}
          placeholder={"pH-neutral foam\nScratch-free wash"}
          className="bg-secondary border-border" rows={4}
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pricing Plans</Label>
          <Button variant="ghost" size="sm" onClick={() => setForm({ ...form, pricing: [...form.pricing, { plan: "", price: "" }] })} className="text-primary h-8">
            <Plus className="w-3 h-3 mr-1" /> Add Plan
          </Button>
        </div>
        {form.pricing.map((p, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Input value={p.plan} onChange={(e) => { const np = [...form.pricing]; np[i].plan = e.target.value; setForm({ ...form, pricing: np }); }} placeholder="Plan name" className="bg-secondary border-border h-10" />
            <Input value={p.price} onChange={(e) => { const np = [...form.pricing]; np[i].price = e.target.value; setForm({ ...form, pricing: np }); }} placeholder="₹999" className="bg-secondary border-border w-32 h-10" />
            {form.pricing.length > 1 && (
              <Button variant="ghost" size="icon" onClick={() => setForm({ ...form, pricing: form.pricing.filter((_, j) => j !== i) })} className="text-destructive shrink-0 h-10 w-10">
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
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
        <p className="text-sm text-muted-foreground font-medium">{services.length} service{services.length !== 1 ? "s" : ""}</p>
        {!showAdd && (
          <Button onClick={() => { setShowAdd(true); setForm(emptyService); setEditing(null); }} className="bg-primary text-primary-foreground h-10">
            <Plus className="w-4 h-4 mr-2" /> Add Service
          </Button>
        )}
      </div>

      {showAdd && <ServiceForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />}

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading services...</div>
      ) : services.length === 0 && !showAdd ? (
        <div className="bg-card border border-border rounded-xl text-center py-20">
          <Wrench className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground font-medium">No services yet</p>
          <p className="text-xs text-muted-foreground/70 mt-1">Add your first service to get started</p>
        </div>
      ) : (
        <div className="space-y-3">
          {services.map((s) =>
            editing === s.id ? (
              <ServiceForm key={s.id} onSave={() => handleUpdate(s.id!)} onCancel={() => setEditing(null)} />
            ) : (
              <div key={s.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-4 group hover:border-primary/20 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-display font-semibold text-sm">{s.title}</h4>
                    {s.badge && <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{s.badge}</span>}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.pricing.map((p, i) => (
                      <span key={i} className="text-xs bg-secondary rounded-lg px-2.5 py-1 font-medium">
                        {p.plan}: <span className="text-primary">{p.price}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <Button variant="ghost" size="icon" onClick={() => startEdit(s)} className="h-8 w-8">
                    <Edit2 className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(s.id!)} className="text-destructive hover:text-destructive h-8 w-8">
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdminServices;
