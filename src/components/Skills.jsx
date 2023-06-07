import PropTypes from "prop-types";

export const Skills = ({ skillname, percentage }) => {
  return (
    <div className=" m-3 ">
      <h2 className=" text-gray-300 text-sm md:text-lg">{skillname}</h2>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
        <div
          className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  skillname: PropTypes.string,
  percentage: PropTypes.string,
};
