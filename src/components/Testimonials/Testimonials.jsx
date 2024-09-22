import React, { useRef } from "react";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="mx-auto my-20 px-20 relative">
      <img
        src={next_btn}
        alt="next button"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 w-12 rounded-full cursor-pointer bg-blue-900"
        onClick={slideForward}
      />
      <img
        src={back_btn}
        alt="back button"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 w-12 rounded-full cursor-pointer bg-blue-900"
        onClick={slideBackward}
      />
      <div className="overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[200%] transition-transform duration-500"
        >
          <li className="list-none w-1/2 p-5">
            <div className="shadow-lg p-10 rounded-lg text-gray-600 leading-relaxed">
              <div className="flex items-center mb-5 text-sm">
                <img
                  src={user_1}
                  alt="user 1"
                  className="w-16 rounded-full mr-2 border-4 border-blue-900"
                />
                <div>
                  <h3 className="text-blue-900">Urwa Imran</h3>
                  <span>Rawalpindi, Pakistan</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                incidunt fuga eaque illum libero iste qui itaque culpa facilis
                saepe repudiandae illo vero hic, ullam est.
              </p>
            </div>
          </li>

          <li className="list-none w-1/2 p-5">
            <div className="shadow-lg p-10 rounded-lg text-gray-600 leading-relaxed">
              <div className="flex items-center mb-5 text-sm">
                <img
                  src={user_2}
                  alt="user 2"
                  className="w-16 rounded-full mr-2 border-4 border-blue-900"
                />
                <div>
                  <h3 className="text-blue-900">Alyan Khan</h3>
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                incidunt fuga eaque illum libero iste qui itaque culpa facilis
                saepe repudiandae illo vero hic, ullam est.
              </p>
            </div>
          </li>

          <li className="list-none w-1/2 p-5">
            <div className="shadow-lg p-10 rounded-lg text-gray-600 leading-relaxed">
              <div className="flex items-center mb-5 text-sm">
                <img
                  src={user_3}
                  alt="user 3"
                  className="w-16 rounded-full mr-2 border-4 border-blue-900"
                />
                <div>
                  <h3 className="text-blue-900">Rubab Shamoon</h3>
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                incidunt fuga eaque illum libero iste qui itaque culpa facilis
                saepe repudiandae illo vero hic, ullam est.
              </p>
            </div>
          </li>

          <li className="list-none w-1/2 p-5">
            <div className="shadow-lg p-10 rounded-lg text-gray-600 leading-relaxed">
              <div className="flex items-center mb-5 text-sm">
                <img
                  src={user_4}
                  alt="user 4"
                  className="w-16 rounded-full mr-2 border-4 border-blue-900"
                />
                <div>
                  <h3 className="text-blue-900">Azlan Malik</h3>
                  <span>Rawalpindi, Pakistan</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                incidunt fuga eaque illum libero iste qui itaque culpa facilis
                saepe repudiandae illo vero hic, ullam est.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
