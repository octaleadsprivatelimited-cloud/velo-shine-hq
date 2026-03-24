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
} from "firebase/firestore";
import { db } from "./firebase";

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

const COLLECTION = "bookings";

export const addBooking = async (booking: Omit<Booking, "id" | "status" | "createdAt">) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...booking,
    status: "pending",
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getBookings = async (): Promise<Booking[]> => {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Booking[];
};

export const updateBookingStatus = async (id: string, status: Booking["status"]) => {
  await updateDoc(doc(db, COLLECTION, id), { status });
};

export const deleteBooking = async (id: string) => {
  await deleteDoc(doc(db, COLLECTION, id));
};
