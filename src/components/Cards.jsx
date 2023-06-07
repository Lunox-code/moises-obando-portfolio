import PropTypes from "prop-types";
import ButtonGroup from "../components/ButtonGroup";

export const Cards = ({ url, nameproject, description }) => {
  return (
    <>
      <div className=" text-lg md:text-2xl text-center mb-5 mt-5 ">
        <iframe
          src={url}
          title={nameproject}
          className=" w-full h-72 border "
        />
        <div className=" text-start mt-3 ">
          <h2 className=" font-bold mb-2 ">{nameproject}</h2>
          <p className=" text-gray-400 ">{description}</p>
          <ButtonGroup url={url} />
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  url: PropTypes.string,
  nameproject: PropTypes.string,
  description: PropTypes.string,
};
