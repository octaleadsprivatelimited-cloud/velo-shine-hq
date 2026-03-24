import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getGalleryItems, addGalleryItem, updateGalleryItem, deleteGalleryItem, type GalleryItem } from "@/lib/adminService";

const categories = ["Exterior", "Interior", "Detailing"];
const emptyItem = { imageUrl: "", alt: "", category: "Exterior", order: 0 };

const AdminGallery = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyItem);

  const fetchData = async () => {
    setLoading(true);
    try { setItems(await getGalleryItems()); } catch { toast({ title: "Failed to load gallery", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdd = async () => {
    if (!form.imageUrl || !form.alt) { toast({ title: "Image URL and alt text required", variant: "destructive" }); return; }
    try {
      await addGalleryItem({ ...form, order: items.length });
      setShowAdd(false);
      setForm(emptyItem);
      fetchData();
      toast({ title: "Gallery item added" });
    } catch { toast({ title: "Failed to add", variant: "destructive" }); }
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateGalleryItem(id, form);
      setEditing(null);
      fetchData();
      toast({ title: "Gallery item updated" });
    } catch { toast({ title: "Failed to update", variant: "destructive" }); }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteGalleryItem(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
      toast({ title: "Gallery item deleted" });
    } catch { toast({ title: "Failed to delete", variant: "destructive" }); }
  };

  const ItemForm = ({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) => (
    <Card className="bg-card border-border">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label>Image URL *</Label>
          <Input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} placeholder="https://..." className="bg-secondary border-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Alt Text *</Label>
            <Input value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} placeholder="Description of the image" className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
              <SelectTrigger className="bg-secondary border-border"><SelectValue /></SelectTrigger>
              <SelectContent>
                {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        {form.imageUrl && (
          <div className="rounded-lg overflow-hidden border border-border w-40 h-28">
            <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />
          </div>
        )}
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
        <h3 className="font-display text-lg font-semibold">{items.length} Gallery Items</h3>
        {!showAdd && (
          <Button onClick={() => { setShowAdd(true); setForm(emptyItem); setEditing(null); }} className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> Add Image
          </Button>
        )}
      </div>

      {showAdd && <ItemForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />}

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading gallery...</div>
      ) : items.length === 0 && !showAdd ? (
        <div className="text-center py-20 text-muted-foreground">No gallery items yet.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) =>
            editing === item.id ? (
              <ItemForm key={item.id} onSave={() => handleUpdate(item.id!)} onCancel={() => setEditing(null)} />
            ) : (
              <Card key={item.id} className="bg-card border-border overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.imageUrl} alt={item.alt} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium truncate">{item.alt}</p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                  <div className="flex gap-1 mt-2">
                    <Button variant="ghost" size="sm" onClick={() => { setEditing(item.id!); setForm({ imageUrl: item.imageUrl, alt: item.alt, category: item.category, order: item.order }); }}>
                      <Edit2 className="w-3 h-3 mr-1" /> Edit
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id!)} className="text-destructive hover:text-destructive">
                      <Trash2 className="w-3 h-3 mr-1" /> Delete
                    </Button>
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

export default AdminGallery;
