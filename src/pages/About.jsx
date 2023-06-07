import { Photo } from "../components/Photo";
import SocialNetwork from "../components/SocialNetwork";
import { InfoAbout } from "../components/InfoAbout";
import { Skills } from "../components/Skills";

export default function About() {
  const percentageReactJS = 80;
  const percentageHTML = 85;
  const percentageCSS = 75;
  const percentageJavaScript = 80;
  const percentageTailwind = 85;
  const percentageReactBootstrap = 75;
  const percentageGitHubGit = 70;
  const percentageJSON = 75;
  const percentageFigma = 70;
  const percentageRWD = 80;

  return (
    <div>
      <section className=" grid grid-cols-1 md:grid-cols-2 p-5 md:m-5 ">
        {/* Sección de la imagen */}
        <figure>
          <Photo />
        </figure>

        {/* Sección del contenido */}
        <section className=" order-2 md:order-1 space-y-4 mt-10 mb-5 md:mt-0 md:space-y-6 md:mr-10 text-center leading-normal tracking-tight ">
          {/* Sección del I AM */}
          <section className="space-y-3 ">
            <h1>
              <span className=" font-bold text-2xl text-blue-600">{"< "}</span>
              ABOUT ME
              <span className=" font-bold text-2xl text-blue-600">{" />"}</span>
            </h1>
            <p className=" font-bold ">
              I design and code beautiful things, and I love what I do
            </p>
          </section>

          {/* Information About */}
          <section className=" grid grid-cols-2 ">
            <InfoAbout info={"NAME"} description={"Moisés Obando"} />
            <InfoAbout info={"AGE"} description={"30 years old"} />
            <InfoAbout info={"WHATSAPP"} description={"+57 314-6252639"} />
            <InfoAbout info={"EMAIL"} description={"lunox.code@gmail.com"} />
            <InfoAbout info={"NATIONALITY"} description={"Costa Rican"} />
            <InfoAbout info={"EXPERIENCE"} description={"3 years"} />
            <InfoAbout
              info={"BASED IN"}
              description={"Rio de Janeiro, Brazil"}
            />
            <InfoAbout
              info={"LANGUAGES"}
              description={"Spanish, English, Portuguese"}
            />
          </section>
        </section>
      </section>

      {/* Information About */}
      <section className=" mt-10 ">
        <h1 className=" text-center text-2xl font-bold">SKILLS</h1>
        <div className=" grid grid-cols-2 p-5 ">
          <Skills skillname={"React JS"} percentage={percentageReactJS} />
          <Skills skillname={"HTML 5"} percentage={percentageHTML} />
          <Skills skillname={"CSS"} percentage={percentageCSS} />
          <Skills skillname={"JavaScript"} percentage={percentageJavaScript} />
          <Skills skillname={"TailwindCSS"} percentage={percentageTailwind} />
          <Skills
            skillname={"React Bootstrap 5"}
            percentage={percentageReactBootstrap}
          />
          <Skills skillname={"GitHub / Git"} percentage={percentageGitHubGit} />
          <Skills skillname={"JSON"} percentage={percentageJSON} />
          <Skills skillname={"Figma"} percentage={percentageFigma} />
          <Skills
            skillname={"Responsive Web Design"}
            percentage={percentageRWD}
          />
        </div>
      </section>

      {/* Sección de iconos */}
      <section className=" mb-5 mt-10 ">
        <SocialNetwork />
      </section>
    </div>
  );
}
