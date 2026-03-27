import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// Timeout wrapper to prevent hanging when Firebase is unreachable
const withTimeout = <T>(promise: Promise<T>, ms = 3000): Promise<T> =>
  Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Firebase request timed out")), ms)
    ),
  ]);

// ============ BOOKINGS ============
export interface Booking {
  id?: string;
  name: string;
  phone: string;
  carType: string;
  carModel: string;
  service: string;
  date: string;
  timeSlot: string;
  address: string;
  notes: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: Timestamp | Date;
}

export const addBooking = async (booking: Omit<Booking, "id" | "status" | "createdAt">) => {
  const docRef = await addDoc(collection(db, "bookings"), {
    ...booking,
    status: "pending",
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getBookings = async (): Promise<Booking[]> => {
  const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
  const snapshot = await withTimeout(getDocs(q));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Booking[];
};

export const updateBookingStatus = async (id: string, status: Booking["status"]) => {
  await updateDoc(doc(db, "bookings", id), { status });
};

export const updateBooking = async (id: string, data: Partial<Omit<Booking, "id" | "createdAt">>) => {
  await updateDoc(doc(db, "bookings", id), data);
};

export const deleteBooking = async (id: string) => {
  await deleteDoc(doc(db, "bookings", id));
};

// ============ SERVICES ============
export interface ServicePricing {
  plan: string;
  price: string;
}

export interface Service {
  id?: string;
  title: string;
  description: string;
  badge: string;
  features: string[];
  pricing: ServicePricing[];
  imageUrl: string;
  order: number;
  createdAt: Timestamp | Date;
}

export const addService = async (service: Omit<Service, "id" | "createdAt">) => {
  const docRef = await addDoc(collection(db, "services"), {
    ...service,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getServices = async (): Promise<Service[]> => {
  const q = query(collection(db, "services"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Service[];
};

export const updateService = async (id: string, data: Partial<Service>) => {
  await updateDoc(doc(db, "services", id), data);
};

export const deleteService = async (id: string) => {
  await deleteDoc(doc(db, "services", id));
};

// ============ GALLERY ============
export interface GalleryItem {
  id?: string;
  imageUrl: string;
  alt: string;
  category: string;
  order: number;
  createdAt: Timestamp | Date;
}

export const addGalleryItem = async (item: Omit<GalleryItem, "id" | "createdAt">) => {
  const docRef = await addDoc(collection(db, "gallery"), {
    ...item,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getGalleryItems = async (): Promise<GalleryItem[]> => {
  const q = query(collection(db, "gallery"), orderBy("order", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as GalleryItem[];
};

export const updateGalleryItem = async (id: string, data: Partial<GalleryItem>) => {
  await updateDoc(doc(db, "gallery", id), data);
};

export const deleteGalleryItem = async (id: string) => {
  await deleteDoc(doc(db, "gallery", id));
};

// ============ TESTIMONIALS ============
export interface Testimonial {
  id?: string;
  name: string;
  car: string;
  rating: number;
  text: string;
  createdAt: Timestamp | Date;
}

export const addTestimonial = async (testimonial: Omit<Testimonial, "id" | "createdAt">) => {
  const docRef = await addDoc(collection(db, "testimonials"), {
    ...testimonial,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Testimonial[];
};

export const updateTestimonial = async (id: string, data: Partial<Testimonial>) => {
  await updateDoc(doc(db, "testimonials", id), data);
};

export const deleteTestimonial = async (id: string) => {
  await deleteDoc(doc(db, "testimonials", id));
};
