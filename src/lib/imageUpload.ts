import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MAX_WIDTH = 1200;
const MAX_HEIGHT = 1200;
const QUALITY = 0.7;

/**
 * Compress an image file using canvas before uploading.
 */
const compressImage = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;

      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Compression failed"));
        },
        "image/webp",
        QUALITY
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = url;
  });
};

/**
 * Compress and upload an image to Firebase Storage.
 * Returns the public download URL.
 */
export const uploadImage = async (
  file: File,
  folder: string = "uploads"
): Promise<string> => {
  const compressed = await compressImage(file);
  const storage = getStorage();
  const fileName = `${folder}/${Date.now()}_${file.name.replace(/\.[^.]+$/, "")}.webp`;
  const storageRef = ref(storage, fileName);
  await uploadBytes(storageRef, compressed, { contentType: "image/webp" });
  return getDownloadURL(storageRef);
};
