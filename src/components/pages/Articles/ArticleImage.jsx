import React from "react";

const ArticleImage = ({ src, caption }) => {
  return (
    <figure className="my-10">

      <img
        src={src}
        alt={caption}
        className="w-full rounded-xl object-cover"
      />

      <figcaption className="text-center text-sm text-gray-500 mt-3">
        {caption}
      </figcaption>

    </figure>
  );
};

export default ArticleImage;