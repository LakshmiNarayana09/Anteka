import React from "react";
import mainImage from "../../../assets/products/main.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";


const images = [mainImage];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-4">

      <div className="flex-1 order-1 md:order-2 bg-white border rounded-md flex items-center justify-center p-6 min-h-[420px]">
        <img
          src={selectedImage}
          alt="Product"
          className="max-h-[360px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductGallery;