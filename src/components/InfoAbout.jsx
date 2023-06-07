import PropTypes from "prop-types";

export const InfoAbout = ({ info, description }) => {
  return (
    <div>
      <h2 className=" font-bold mt-1 ">{info}</h2>
      <p className=" text-gray-300 mb-2 ">{description}</p>
    </div>
  );
};

InfoAbout.propTypes = {
  info: PropTypes.string,
  description: PropTypes.string,
};
