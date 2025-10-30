import React from "react";

const Uploaded = ({ image }) => {
  return (
    <div className="bg-white min-h-[25rem] w-[90%] md:w-[22rem] rounded-2xl flex flex-col items-center relative overflow-hidden">
      <div className="bg-[#DD7AA3] w-full h-12 rounded-t-2xl flex justify-center items-center">
        <p className="text-2xl">Uploaded Image</p>
      </div>

      {image ? (
        <img
          src={image}
          alt="Uploaded"
          className="object-contain w-full h-[23rem] p-2"
        />
      ) : (
        <p className="text-gray-400 mt-10">No image uploaded</p>
      )}
    </div>
  );
};

export default Uploaded;