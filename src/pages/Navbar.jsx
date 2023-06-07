import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ setActivePage }) {
  return (
    <section>
      <div className="flex flex-row font-extrabold text-base space-x-5 justify-center p-5 ">
        <Link to="/" onClick={() => setActivePage("Home")}>
          HOME
        </Link>
        <Link to="/" onClick={() => setActivePage("About")}>
          ABOUT
        </Link>
        <Link to="/" onClick={() => setActivePage("Portfolio")}>
          PORTFOLIO
        </Link>
      </div>
    </section>
  );
}

Navbar.propTypes = {
  setActivePage: PropTypes.func.isRequired,
};
