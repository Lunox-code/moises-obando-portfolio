import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <header>
        <Navbar setActivePage={handlePageChange} />
      </header>
      <main>
        {activePage === "Home" && <Home />}
        {activePage === "About" && <About />}
        {activePage === "Portfolio" && <Portfolio />}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
