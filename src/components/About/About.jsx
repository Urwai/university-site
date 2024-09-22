import React from "react";
import about from "../../assets/about.png";
import icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="mt-11 flex justify-center w-11/12 mt-24">
      <div className="basis-6/12 relative">
        <img src={about} alt="" className="w-8/12 rounded-xl ml-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={icon} alt="" className="w-12" />
        </div>
      </div>
      <div className="basis-5/12 -ml-20">
        <h2 className="text-indigo-900 font-bold mt-6 text-lg mb-1 pt-6">ABOUT UNIVERSITY</h2>
        <h1 className="font-bold text-3xl mb-6 max-w-xs">Nuturing Tomorrow's Leaders Today</h1>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi id ex. Quo, officiis sit deserunt amet sapient explicabo, sequi incidunt ullam animi.
        </p>
        <p className="max-w-md pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi id ex. Quo, officiis sit deserunt amet sapient explicabo, sequi incidunt ullam animi.
        </p>
      </div>
    </div>
  );
};

export default About;
