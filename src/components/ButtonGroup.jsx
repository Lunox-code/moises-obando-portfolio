import PropTypes from "prop-types";

const ButtonGroup = ({ onButtonClick1, onButtonClick2, name1, name2 }) => {
  return (
    <div>
      {onButtonClick1 && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 my-3 py-3 w-40 md:w-48 md:py-4 rounded-full"
          onClick={onButtonClick1}
        >
          {name1}
        </button>
      )}
      {onButtonClick2 && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold mx-3 my-3 py-3 w-40 md:w-48 md:py-4 rounded-full"
          onClick={onButtonClick2}
        >
          {name2}
        </button>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  onButtonClick1: PropTypes.func,
  onButtonClick2: PropTypes.func,
  name1: PropTypes.string,
  name2: PropTypes.string,
};

export default ButtonGroup;
