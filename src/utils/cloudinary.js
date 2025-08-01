import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  Cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  API_key: process.env.CLOUDINARY_API_KEY,
  API_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary config:");
console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "✅" : "❌ Missing");


const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("file is uploded", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export {uploadOnCloudinary}
