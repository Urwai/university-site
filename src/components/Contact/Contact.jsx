import React from "react";
import mesaage from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import call_icon from "../../assets/phone-icon.png";
import loc_icon from "../../assets/location-icon.png";
import icon from "../../assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="flex justify-center gap-x-14">
      <div className="flex flex-col">
        <div className="flex">
          <h2 className="font-semibold text-2xl">Send us a message</h2>
          <img src={mesaage} alt="" className="w-9 h-7 pl-2" />
        </div>
        <p className="max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum. Et
          illum libero unde asperiores voluptatibus.
        </p>
        <div className="flex pt-4">
          <img src={mail_icon} alt="" className="w-6 h-5" />
          <p className="pl-2">urwai090@gmail.com</p>
        </div>
        <div className="flex pt-4">
          <img src={call_icon} alt="" className="w-6 h-5" />
          <p className="pl-2">03185599950</p>
        </div>
        <div className="flex pt-4">
          <img src={loc_icon} alt="" className="w-6 h-5" />
          <p className="pl-2">
            Satellite Town, Block A<br /> Rawalpindi
          </p>
        </div>
      </div>
      <div className="max-w-md w-full">
        <div className="flex flex-col">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-100 border border-gray-300 p-2 rounded "
          />
        </div>
        <div className="flex flex-col">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="bg-gray-100 border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label>Write your message here</label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            className="bg-gray-100 border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex pl-5 pr-1 py-2 bg-indigo-900 w-40 rounded-3xl mx-auto mt-8 mb-6">
          <button className="text-gray-50">Submit Now</button>
          <img src={icon} className="pl-2 pt-1 w-8 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
