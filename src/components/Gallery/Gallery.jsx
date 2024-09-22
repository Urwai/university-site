import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import icon from "../../assets/white-arrow.png";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-8">
        <img src={gallery_1} alt="" className="rounded-xl w-56" />
        <img src={gallery_2} alt="" className="rounded-xl w-56" />
        <img src={gallery_3} alt="" className="rounded-xl w-56" />
        <img src={gallery_4} alt="" className="rounded-xl w-56" />
      </div>
      <div className="flex pl-5 pr-2 py-3 bg-indigo-900 w-44 rounded-3xl mx-auto mt-8">
        <button className="text-gray-50">See More here</button>
        <img src={icon} className="pl-2 pt-1 w-9 h-6" />
      </div>
    </div>
  );
};

export default Gallery;
