import React from "react";

const Footer = () =>{
    const currentYear = new Date();
    const newCurrentYear = currentYear.getFullYear();
    return (
        <div className="w-full">
          <hr className="w-11/12 mx-auto" style={{ borderColor: '#333' }} />
          <p className="text-center pt-3 pb-2">Copyright {newCurrentYear}. All rights reserved.</p>
        </div>
      );
      
}

export default Footer;