import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Save, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getGalleryItems, addGalleryItem, updateGalleryItem, deleteGalleryItem, type GalleryItem } from "@/lib/adminService";
import ImageUploadField from "@/components/admin/ImageUploadField";

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
      setShowAdd(false); setForm(emptyItem); fetchData();
      toast({ title: "Gallery item added" });
    } catch { toast({ title: "Failed to add", variant: "destructive" }); }
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateGalleryItem(id, form);
      setEditing(null); fetchData();
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
    <div className="bg-card border border-border rounded-xl p-6 space-y-5 col-span-full">
      <div className="space-y-2">
      <ImageUploadField label="Image *" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} folder="gallery" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Alt Text *</Label>
          <Input value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} placeholder="Description of the image" className="bg-secondary border-border h-11" />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</Label>
          <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
            <SelectTrigger className="bg-secondary border-border h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
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
        <p className="text-sm text-muted-foreground font-medium">{items.length} image{items.length !== 1 ? "s" : ""}</p>
        {!showAdd && (
          <Button onClick={() => { setShowAdd(true); setForm(emptyItem); setEditing(null); }} className="bg-primary text-primary-foreground h-10">
            <Plus className="w-4 h-4 mr-2" /> Add Image
          </Button>
        )}
      </div>

      {showAdd && <ItemForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />}

      {loading ? (
        <div className="text-center py-20 text-muted-foreground">Loading gallery...</div>
      ) : items.length === 0 && !showAdd ? (
        <div className="bg-card border border-border rounded-xl text-center py-20">
          <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground font-medium">No gallery items yet</p>
          <p className="text-xs text-muted-foreground/70 mt-1">Add your first image to build your portfolio</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) =>
            editing === item.id ? (
              <ItemForm key={item.id} onSave={() => handleUpdate(item.id!)} onCancel={() => setEditing(null)} />
            ) : (
              <div key={item.id} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/20 transition-colors">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.imageUrl} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <div className="flex gap-1">
                      <Button size="sm" variant="secondary" onClick={() => { setEditing(item.id!); setForm({ imageUrl: item.imageUrl, alt: item.alt, category: item.category, order: item.order }); }} className="h-7 text-xs">
                        <Edit2 className="w-3 h-3 mr-1" /> Edit
                      </Button>
                      <Button size="sm" variant="secondary" onClick={() => handleDelete(item.id!)} className="h-7 text-xs text-destructive hover:text-destructive">
                        <Trash2 className="w-3 h-3 mr-1" /> Delete
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium truncate">{item.alt}</p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
