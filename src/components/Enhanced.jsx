import React from "react";

const Enhanced = ({ image, loading }) => {
  return (
    <div className="bg-white min-h-[25rem] w-[90%] md:w-[22rem] rounded-2xl flex flex-col items-center relative overflow-hidden">
      <div className="bg-[#DD7AA3] w-full h-12 rounded-t-2xl flex justify-center items-center">
        <p className="text-2xl">Enhanced Image</p>
      </div>

      {loading ? (
        <p className="text-gray-500 mt-10 animate-pulse">Enhancing image...</p>
      ) : image ? (
        <img
          src={image}
          alt="Enhanced"
          className="object-contain w-full h-[23rem] p-2"
        />
      ) : (
        <p className="text-gray-400 mt-10">No enhanced image yet</p>
      )}
    </div>
  );
};

export default Enhanced;