import React from "react";

import ImageWithButton from "./imagewithbutton";

interface ImageData {
  url: string;
  alt: string;
  link: string;
}

interface PictureProps {
  imageData: ImageData[];
}

const Picture: React.FC<PictureProps> = ({ imageData }) => {
  return (
    <div className="flex">
      {imageData.map((image: ImageData, index: number) => (
        <ImageWithButton
          key={index}
          image={image.url}
          alt={image.alt}
          link={image.link}
          size={200}
          className="mr-16 h-auto w-48"
        />
      ))}
    </div>
  );
};

export default Picture;
