import PropTypes from "prop-types";

export const InfoAbout = ({ info, description, wa, email, onButtonGmail }) => {
  return (
    <>
      <div>
        <h2 className=" font-bold mt-2 ">{info}</h2>
        <p className=" text-gray-400 mb-2 ">{description}</p>
        <a
          href="https://wa.me/573146252639?text=¡Hola,%20Moises!%20Me%20gustaría%20ponerme%20en%20contacto%20contigo."
          target="_blank"
          rel="noopener noreferrer"
          className=" text-green-500 hover:font-bold "
        >
          {wa}
        </a>
        <a
          onClick={onButtonGmail}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-400 hover:font-bold "
        >
          {email}
        </a>
      </div>
    </>
  );
};

InfoAbout.propTypes = {
  info: PropTypes.string,
  description: PropTypes.string,
  wa: PropTypes.string,
  email: PropTypes.string,
  onButtonGmail: PropTypes.string,
};
