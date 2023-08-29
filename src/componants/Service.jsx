import PropTypes from "prop-types";

export const Service = (props) => {
  return (
    <div className="  bg-white rounded-[20px] text-left mb-[37px] py-8 px-10 box-shadow hover:bg-[#e3f1ff] cursor-pointer transition-transform transform-gpu hover:scale-110">
      <div className="mb-9 mt-7 h-20">
        <img src={props.logo} alt="logo" />
      </div>
      <p className="text-2xl font-semibold text-header mb-1">{props.title}</p>
      <p className="text-base text-small-header mb-10">{props.description}</p>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  description: PropTypes.string,
};
