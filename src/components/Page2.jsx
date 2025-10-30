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

    // Preview uploaded image
    const previewURL = URL.createObjectURL(file);
    setUploadedImage(previewURL);

    // Begin enhancement
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image_file", file);

      const response = await fetch("https://techhk.aoscdn.com/api/tasks/visual/scale", {
        method: "POST",
        headers: {
          "X-API-KEY": import.meta.env.PICWISH_API_KEY,
        },
        body: formData,
      });

      const result = await response.json();

      if (result?.data?.image) {
        setEnhancedImage(result.data.image);
      } else {
        console.error("Enhancement failed:", result);
        alert("Enhancement failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error enhancing image.");
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

        <label
          htmlFor="fileInput"
          className="text-center text-2xl bg-[#FF9E5B] rounded-3xl w-52 h-12 cursor-pointer flex items-center justify-center border-3 border-dashed border-[#d9d8d8] hover:border-[#fff]"
        >
          Drop Image Here
        </label>
        <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
      </div>

      <div
        id="cards"
        className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 w-full px-4 mt-6"
      >
        <Uploaded image={uploadedImage} />
        <Enhanced image={enhancedImage} loading={loading} />
      </div>
    </>
  );
};

export default Page2;