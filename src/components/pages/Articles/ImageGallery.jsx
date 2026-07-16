import React from "react";
import img1 from "../../../assets/articles/img1.jpg";
import img2 from "../../../assets/articles/img2.jpg";

const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-12">

      <img
        src={img1}
        alt="Medicine"
        className="rounded-xl w-full h-72 object-cover"
      />

      <img
        src={img2}
        alt="Healthcare"
        className="rounded-xl w-full h-72 object-cover"
      />

    </div>
  );
};

export default ImageGallery;