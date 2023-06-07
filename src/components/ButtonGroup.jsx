import PropTypes from "prop-types";

const ButtonGroup = ({ onButtonCV, onButtonGmail, cv, gmail, url }) => {
  return (
    <div>
      {onButtonCV && (
        <button
          className="border border-blue-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold mx-3 my-3 py-3 w-40 md:w-48 md:py-4 rounded-full bg-transparent"
          onClick={onButtonCV}
        >
          {cv}
        </button>
      )}
      {onButtonGmail && (
        <button
          className="border border-blue-500 hover:bg-blue-700 hover:text-white text-blue-500 font-bold mx-3 my-3 py-3 w-40 md:w-48 md:py-4 rounded-full bg-transparent"
          onClick={onButtonGmail}
        >
          {gmail}
        </button>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className=" border-blue-500 hover:bg-blue-700 hover:text-white text-blue-500 border text-base text-center font-bold my-3 py-2 w-44 mt-5 rounded-full bg-transparent inline-block"
        >
          Visit the website
        </a>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  onButtonCV: PropTypes.func,
  onButtonGmail: PropTypes.func,
  url: PropTypes.string,
  cv: PropTypes.string,
  gmail: PropTypes.string,
};

export default ButtonGroup;
