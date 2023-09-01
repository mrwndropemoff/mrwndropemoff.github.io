import { useState } from "react";
import PropTypes from "prop-types";

export const Slider = (props) => {
  const [slide, setSlide] = useState(1);
  const totalSlides = props.profiles.length;
  const nextSlide = () => {
    console.log(slide);
    if (slide >= totalSlides - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    console.log(slide);
    if (slide <= 0) {
      setSlide(totalSlides - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  let profile = props.profiles.at(slide);

  return (
    <div>
      <section className=" z-10 mx-auto bg-gradient-to-tr grid grid-flow-row from-[#5A98F2] to-[#67C3F3] h-[425px] w-[1120px] rounded-3xl justify-center items-center text-white relative ">
        <div>
          <p className=" font-medium text-3xl">What our customer are saying</p>
          <div className=" sticky bg-white w-10 ml-96 mt-6 py-[1px] rounded-full"></div>
        </div>
        <div className="grid grid-flow-col gap-12 mt-[-80px]">
          <div className="grid grid-flow-col text-left gap-6 items-center">
            <img
              className=" rounded-full border-4 h-36 w-36 "
              src={profile ? `https://${profile.picture}` : ""}
              alt="profile"
            />
            <div>
              <p className=" font-semibold text-2xl">
                {profile ? profile.name : ""}
              </p>
              <p className=" font-normal text-lg">
                {profile ? profile.job : ""}
              </p>
            </div>
          </div>
          <p className="w-[420px] ml-10 text-lg grid items-center font-extralight text-left">
            “{profile ? profile.description : ""}”
          </p>
        </div>
      </section>
      <div className="grid grid-col-11 items-center justify-center gap-3 mt-16">
        <button
          className="col-start-1 col-end-2 mr-8"
          onClick={() => prevSlide()}
        >
          <img src="src/assets/buttons/btn-right.svg" alt="right" />
        </button>
        <div className=" col-start-6 flex gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <svg
              key={index}
              className={`w-3 h-3 ${
                slide === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <circle cx="5" cy="5" r="5" fill="#5B9BF3" />
            </svg>
          ))}
        </div>
        <button
          className="col-start-11 col-end-12 ml-8"
          onClick={() => nextSlide()}
        >
          <img src="src/assets/buttons/btn-left.svg" alt="left" />
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  profiles: PropTypes.array,
};
