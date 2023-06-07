import PropTypes from "prop-types";

export const Cards = ({ url, nameproject }) => {
  return (
    <>
      <div className=" text-lg md:text-2xl text-center mb-5 mt-5 ">
        <h2 className=" mb-5 ">{nameproject}</h2>
        <iframe
          src={url}
          title={nameproject}
          className=" w-full h-72 border "
        />
        <div className=" mt-5 ">
          <a
            href={url}
            className="text-blue-500 hover:underline text-base"
            target="_blank"
            rel="noreferrer"
          >
            Visit the website
          </a>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  url: PropTypes.string,
  nameproject: PropTypes.string,
};
