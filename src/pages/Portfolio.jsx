import ButtonGroup from "../components/ButtonGroup";
import { Cards } from "../components/Cards";
import SocialNetwork from "../components/SocialNetwork";
import CV from "../assets/CV/FrontEnd-MoisesObando.pdf";

export default function Portfolio() {
  const handleDownloadCVClick = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "FrontEnd-MoisesObando.pdf";
    link.click();
  };
  const handleGetInTouchClick = () => {
    const email = "lunox.code@gmail.com";
    const subject = "Hello Moises! I would like to get in touch with you";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    // Redirige al enlace de Gmail
    window.location.href = mailtoLink;
  };

  const casino = "https://casino-games-app.netlify.app/";
  const rickandmorty = "https://rick-morty-adventures.netlify.app/";
  const afiliados = "https://afiliados.netlify.app/";
  const portfoliooldversion = "https://lunoxcode.com/";

  return (
    <>
      <section className=" space-y-6 ">
        {/* Sección de los botones */}
        <div className=" flex flex-row md:space-x-4 justify-center mt-5 ">
          <ButtonGroup onButtonCV={handleDownloadCVClick} cv={"DOWNLOAD CV"} />
          <ButtonGroup
            onButtonGmail={handleGetInTouchClick}
            gmail={"GET IN TOUCH"}
          />
        </div>

        {/* Sub Title */}
        <div className=" mt-10">
          <p className=" text-center font-bold ">
            A few recent design and coding projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 m-10 gap-5 justify-center items-center">
          <div>
            <Cards
              url={casino}
              nameproject={"CASINO"}
              description={
                "A sophisticated casino platform for placing bets on your favorite games."
              }
            />
          </div>
          <div>
            <Cards
              url={afiliados}
              nameproject={"AFILIADOS WEBSITE"}
              description={
                "An affiliate LATAM website for online sports betting platforms."
              }
            />
          </div>
          <div>
            <Cards
              url={rickandmorty}
              nameproject={"RICK & MORTY"}
              description={
                "Embark on a captivating journey through the universe of this beloved animated series as you explore character profiles seamlessly connected to an API."
              }
            />
          </div>
          <div>
            <Cards
              url={portfoliooldversion}
              nameproject={"OLD PORTFOLIO VERSION"}
              description={
                "Explore my past work and witness the fusion of creativity, technical prowess, and attention to detail that sets me apart as a front-end developer."
              }
            />
          </div>
        </div>
      </section>
      {/* Sección de iconos */}
      <section className=" mb-5 mt-10 ">
        <SocialNetwork />
      </section>
    </>
  );
}
