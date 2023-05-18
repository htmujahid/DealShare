export const isEmpty = (value) => {
  if (typeof (value === "array")) {
    return value.length === 0;
  }
  if (!value || value === "") return true;
};

export const uploadToCloudinary = async (file) => {
  const fileData = new FormData();
  fileData.append("file", file);
  fileData.append("upload_preset", "default-preset");
  fileData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
  fileData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD}/image/upload`,
    {
      method: "POST",
      body: fileData,
    }
  );
  const data = await response.json();
  return data.url;
};
