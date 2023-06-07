import LinkedIn from "../img/linkedin.png";
import GitHub from "../img/github.png";
import Instagram from "../img/ig.png";

const SocialNetwork = () => {
  return (
    <div className=" flex flex-2 justify-center items-center space-x-3 md:space-x-5">
      <a
        href="https://www.linkedin.com/in/moises-obando/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedIn} alt="LinkedIn" className="w-10 md:w-14" />
      </a>
      <a href="https://github.com/Lunox-code" target="_blank" rel="noreferrer">
        <img src={GitHub} alt="GitHub" className=" w-10 md:w-14 " />
      </a>
      <a
        href="https://www.instagram.com/lunox.code/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="Instagram" className=" w-10 md:w-14 " />
      </a>
    </div>
  );
};

export default SocialNetwork;
