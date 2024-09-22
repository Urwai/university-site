import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import logo_1 from "../../assets/program-icon-1.png";
import logo_2 from "../../assets/program-icon-2.png";
import logo_3 from "../../assets/program-icon-3.png";

const Services = () => {
  return (
    <div className="flex justify-center gap-8">
      <div className="relative w-80 rounded-xl overflow-hidden group">
        <img src={program_1} alt="" className="w-full rounded-xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,15,152,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <img src={logo_1} alt="" className="w-16" />
          <h2 className="text-white text-xl mt-6">Graduation Degree</h2>
        </div>
      </div>

      <div className="relative w-80 rounded-xl overflow-hidden group">
        <img src={program_2} alt="" className="w-full rounded-xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,15,152,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <img src={logo_2} alt="" className="w-14" />
          <h2 className="text-white text-xl mt-4">Masters Degree</h2>
        </div>
      </div>

      <div className="relative w-80 rounded-xl overflow-hidden group">
        <img src={program_3} alt="" className="w-full rounded-xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,15,152,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <img src={logo_3} alt="" className="w-16" />
          <h2 className="text-white text-xl mt-4">PHD Degree</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;

  