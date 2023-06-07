import ButtonGroup from "../components/ButtonGroup";
import { Photo } from "../components/Photo";
import SocialNetwork from "../components/SocialNetwork";

export default function Home() {
  // Cambiar esto
  const handleDownloadCVClick = () => {
    console.log("Botón 1 clickeado");
  };
  const handleGetInTouchClick = () => {
    const email = "lunox.code@gmail.com";
    const subject = "Hello Moises! I would like to get in touch with you";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    // Redirige al enlace de Gmail
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-2 p-5 md:m-5 ">
        {/* Sección de la imagen */}
        <figure>
          <Photo />
        </figure>

        {/* Sección del contenido */}
        <section className=" order-2 md:order-1 space-y-4 mt-10 md:mt-0 md:space-y-8 md:mr-10 text-center leading-normal tracking-tight ">
          {/* Sección del I AM */}
          <div className="mb-5 space-y-3 ">
            <h1>
              <span className=" font-bold text-2xl text-blue-600">{"< "}</span>
              HELLO WORLD!
              <span className=" font-bold text-2xl text-blue-600">{" />"}</span>
            </h1>
            <h2 className=" text-3xl ">I AM MOISES OBANDO</h2>
            <p className=" text-gray-400 ">
              I am a Front End Developer based in Rio de Janeiro, Brazil. With a
              passion for technology, I create immersive and stunning web
              applications through carefully crafted code and user-centric
              design.
            </p>
          </div>

          {/* Sección de los botones */}
          <div className=" flex flex-row md:space-x-4 justify-center ">
            <ButtonGroup
              onButtonCV={handleDownloadCVClick}
              cv={"DOWNLOAD CV"}
            />
            <ButtonGroup
              onButtonGmail={handleGetInTouchClick}
              gmail={"GET IN TOUCH"}
            />
          </div>

          {/* Sección de iconos */}
          <div>
            <SocialNetwork />
          </div>
        </section>
      </section>
    </>
  );
}
