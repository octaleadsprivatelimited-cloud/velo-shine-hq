import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "./firebase";
import { addService, addTestimonial, addGalleryItem } from "./adminService";

const defaultServices = [
  {
    title: "Doorstep Car Foam Wash",
    description: "Single time plans and monthly plans available. Premium scratch-free foam wash at your doorstep.",
    badge: "New!",
    features: [
      "Exterior pressure water wash",
      "Exterior pressure foam wash",
      "Hand scrub",
      "Pressure water rinsing",
      "Towel dry cleaning",
      "Interior vacuum",
      "Interior dusting & wiping",
      "Dashboard polish",
      "Glass clean and shine",
      "Tire polish",
    ],
    pricing: [
      { plan: "Single Foam Wash", price: "₹679" },
      { plan: "Car + Bike Combo", price: "₹899" },
      { plan: "Monthly ×2 Plan", price: "₹1,199" },
      { plan: "Monthly ×4 Plan", price: "₹2,199" },
    ],
    imageUrl: "",
    order: 0,
  },
  {
    title: "Doorstep Regular Car Cleaning",
    description: "Fresh microfiber and fresh water for every car! Alternate day and everyday plans.",
    badge: "New!",
    features: [
      "Alternate day / Everyday exterior cleaning",
      "Interior cleaning every 12 days",
      "Fresh water for each car",
      "New microfiber for every car",
      "Hand-held pressure pumps",
      "Eco-friendly, minimal water",
      "Daily images with timestamp",
    ],
    pricing: [
      { plan: "Regular Cleaning", price: "₹599/mo" },
      { plan: "Everyday Cleaning", price: "₹1,198/mo" },
      { plan: "Premium Monthly", price: "₹2,499/mo" },
    ],
    imageUrl: "",
    order: 1,
  },
  {
    title: "Doorstep Car General Service",
    description: "Guaranteed discounted price. Usage of genuine spares only.",
    badge: "Coming soon",
    features: ["Genuine spares", "Discounted pricing", "Doorstep service"],
    pricing: [],
    imageUrl: "",
    order: 2,
  },
  {
    title: "Doorstep Fuel Delivery",
    description: "Full volume. For sure. Safe dispensing of Petrol & Diesel.",
    badge: "Coming soon",
    features: ["Full volume guarantee", "Safe dispensing", "Petrol & Diesel"],
    pricing: [],
    imageUrl: "",
    order: 3,
  },
];

const defaultTestimonials = [
  {
    name: "Ravi Kumar",
    car: "",
    rating: 5,
    text: "Velociwash did an amazing job with foam cleaning for my car. The team was professional, efficient, and exceeded my expectations. I highly recommend them.",
  },
  {
    name: "Srinivas Reddy",
    car: "",
    rating: 5,
    text: "The customer support team is fantastic. They resolved my issue promptly and went above and beyond to help. Highly recommended.",
  },
  {
    name: "Venkata Rao",
    car: "",
    rating: 5,
    text: "Convenient and on time! They sent a professional to my location in no time and cleaned every corner of my car quickly!",
  },
  {
    name: "Lakshmi Devi",
    car: "",
    rating: 5,
    text: "Velociwash sets the standard for excellence. Reliable, efficient, and easy to use. I can't recommend it enough.",
  },
];

const defaultGalleryItems = [
  { imageUrl: "", alt: "Luxury SUV foam wash", category: "Exterior", order: 0 },
  { imageUrl: "", alt: "Before and after transformation", category: "Exterior", order: 1 },
  { imageUrl: "", alt: "Snow foam application", category: "Exterior", order: 2 },
  { imageUrl: "", alt: "Interior after detailing", category: "Interior", order: 3 },
  { imageUrl: "", alt: "Dashboard cleaning", category: "Interior", order: 4 },
  { imageUrl: "", alt: "Water beading on ceramic coating", category: "Detailing", order: 5 },
  { imageUrl: "", alt: "Ceramic coating application", category: "Detailing", order: 6 },
  { imageUrl: "", alt: "Alloy wheel cleaning", category: "Exterior", order: 7 },
  { imageUrl: "", alt: "Machine polishing", category: "Detailing", order: 8 },
];

const isCollectionEmpty = async (collectionName: string): Promise<boolean> => {
  const q = query(collection(db, collectionName), limit(1));
  const snapshot = await getDocs(q);
  return snapshot.empty;
};

export const seedFirebaseData = async (): Promise<{ services: number; testimonials: number; gallery: number }> => {
  let servicesAdded = 0;
  let testimonialsAdded = 0;
  let galleryAdded = 0;

  const servicesEmpty = await isCollectionEmpty("services");
  if (servicesEmpty) {
    for (const service of defaultServices) {
      await addService(service);
      servicesAdded++;
    }
  }

  const testimonialsEmpty = await isCollectionEmpty("testimonials");
  if (testimonialsEmpty) {
    for (const testimonial of defaultTestimonials) {
      await addTestimonial(testimonial);
      testimonialsAdded++;
    }
  }

  const galleryEmpty = await isCollectionEmpty("gallery");
  if (galleryEmpty) {
    for (const item of defaultGalleryItems) {
      await addGalleryItem(item);
      galleryAdded++;
    }
  }

  return { services: servicesAdded, testimonials: testimonialsAdded, gallery: galleryAdded };
};
