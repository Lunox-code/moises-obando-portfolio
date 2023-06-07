import PropTypes from "prop-types";

const ButtonGroup = ({ onButtonCV, onButtonGmail, cv, gmail }) => {
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
    </div>
  );
};

ButtonGroup.propTypes = {
  onButtonCV: PropTypes.func,
  onButtonGmail: PropTypes.func,
  cv: PropTypes.string,
  gmail: PropTypes.string,
};

export default ButtonGroup;
