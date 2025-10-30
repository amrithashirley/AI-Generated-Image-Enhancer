import React, { useState } from "react";
import Uploaded from "./Uploaded";
import Enhanced from "./Enhanced";

const Page2 = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

   
    const localPreview = URL.createObjectURL(file);
    setUploadedImage(localPreview);

   
    setLoading(true);

    const formData = new FormData();
    formData.append("sync", "1"); 
    formData.append("image_file", file);

    try {
      const response = await fetch("https://techhk.aoscdn.com/api/tasks/visual/scale", {
        method: "POST",
        headers: {
          "X-API-KEY": "wx3nckvfxfsw5wj71",
        },
        body: formData,
      });

      const result = await response.json();
      console.log("API response:", result);

      if (result?.data?.image) {
        setEnhancedImage(result.data.image);
      } else {
        console.error("Enhancement failed:", result);
        alert("Enhancement failed. Try again.");
      }
    } catch (error) {
      console.error("Error enhancing image:", error);
      alert("Something went wrong while enhancing the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="top" className="flex justify-center items-center flex-col gap-3">
        <h2 className="text-center text-6xl">
          Begin Your Photo <span className="text-[#DD7AA3]">Upgrade</span>
        </h2>
        <div className="relative">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileInput"
            className="text-center text-2xl bg-[#FF9E5B] rounded-3xl w-52 h-12 cursor-pointer flex items-center justify-center border-3 border-dashed border-[#d9d8d8] hover:border-[#fff]"
          >
            Drop Image Here
          </label>
        </div>
      </div>

      <div
        id="cards"
        className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 w-full px-4"
      >
        <Uploaded image={uploadedImage} />
        <Enhanced image={enhancedImage} loading={loading} />
      </div>
    </>
  );
};

export default Page2;