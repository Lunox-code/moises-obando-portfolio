import ButtonGroup from "../components/ButtonGroup";
import { Photo } from "../components/Photo";
import SocialNetwork from "../components/SocialNetwork";

export default function Home() {
  const handleDownloadCVClick = () => {
    console.log("Botón 1 clickeado");
  };
  const handleGetInTouchClick = () => {
    console.log("Botón 2 clickeado");
  };

  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 p-5 md:m-5 ">
      {/* Sección de la imagen */}
      <figure>
        <Photo />
      </figure>

      {/* Sección del contenido */}
      <section className=" order-2 md:order-1 space-y-4 mt-10 md:mt-0 md:space-y-8 md:mr-10 text-center leading-normal tracking-tight ">
        {/* Sección del I AM */}
        <section className="mb-5 space-y-3 ">
          <h1>
            <span className=" font-bold text-2xl text-blue-600">{"< "}</span>
            HELLO WORLD!
            <span className=" font-bold text-2xl text-blue-600">{" />"}</span>
          </h1>
          <h2 className=" text-3xl ">I AM MOISES OBANDO</h2>
          <p className=" text-gray-300 ">
            I am a Front End Developer based in Rio de Janeiro, Brazil. With a
            passion for technology, I create immersive and stunning web
            applications through carefully crafted code and user-centric design.
          </p>
        </section>

        {/* Sección de los botones */}
        <section className=" flex flex-row md:space-x-4 justify-center ">
          <ButtonGroup
            onButtonClick1={handleDownloadCVClick}
            name1={"DOWNLOAD CV"}
          />
          <ButtonGroup
            onButtonClick2={handleGetInTouchClick}
            name2={"GET IN TOUCH"}
          />
        </section>

        {/* Sección de iconos */}
        <section>
          <SocialNetwork />
        </section>
      </section>
    </section>
  );
}
