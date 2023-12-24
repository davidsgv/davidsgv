// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./assets/css/App.css";

import ImgCirlce from "./components/atoms/ImgCirlce/ImgCirlce";
import BackgroundTitle from "./components/molecules/BackgroundTitle/BackgroundTitle";
import SectionDetail from "./components/organisms/SectionDetail/SectionDetail";
import TwoColumnLayout from "./components/templates/TwoColumnLayout/TwoColumnLayout";
import Info from "./components/atoms/svg/Education";
import Mail from "./components/atoms/svg/Mail";
import Book from "./components/atoms/svg/Book";
import Profile from "./components/atoms/svg/Profile";
import img from "./assets/img/myphoto2.jpg";
import Experience from "./components/atoms/svg/Experience";
import Skills from "./components/atoms/svg/Skills";

function App() {
  const contact = {
    title: "Contacto",
    icon: <Mail />,
    dataItems: [
      {
        title: "Correo",
        descriptions: ["davidsgv.98@gmail.com"],
      },
      {
        title: "LinkedIn",
        descriptions: ["https://www.linkedin.com/in/david-gonzalez-vargas/"],
      },
    ],
  };

  const education = {
    title: "Formación",
    icon: <Info />,
    dataItems: [
      {
        title: "Ingeniero de Sistemas",
        descriptions: [
          "Corporación Universitaria Minuto de Dios, Bogotá",
          "Junio de 2019 - Noviembre 2024",
        ],
      },
      {
        title: "Técnico en Programación de Software",
        descriptions: [
          "Servicio Nacional de Aprendizaje Sena, Bogotá",
          "Abril de 2018 - Abril 2019",
        ],
      },
    ],
  };

  const courses = {
    title: "Cursos",
    icon: <Book />,
    dataItems: [
      {
        title: "Platzi",
        descriptions: [
          "Curso de Docker",
          "Curso de Gestión Efectiva del Tiempo",
          "Curso de Go Avanzado: Arquitectura de Eventos y CQRS",
        ],
      },
      {
        title: "UxTIC - CoinEx",
        descriptions: ["Blockchain y Criptoactivos"],
      },
    ],
  };

  const leftContent = (
    <>
      {/* <ImgCirlce src="data:image/jpeg;base64,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" /> */}
      <ImgCirlce src={img} />
      {/* <SectionDetail title="Contact Me" jobs={jobs} altColor={true} /> */}
      <SectionDetail
        title={contact.title}
        icon={contact.icon}
        dataItems={contact.dataItems}
        altColor={true}
        separator={true}
      />
      <SectionDetail
        title={education.title}
        icon={education.icon}
        dataItems={education.dataItems}
        altColor={true}
        separator={true}
      />
      <SectionDetail
        title={courses.title}
        icon={courses.icon}
        dataItems={courses.dataItems}
        altColor={true}
        // separator={true}
      />
    </>
  );

  const profile = {
    title: "Perfil",
    icon: <Profile />,
    text: "Desarrollador Full-Stack con 4 años de experiencia en equipos de desarrollo bajo la metodología Scrum. Apasionado por la tecnología y siempre dispuesto a aprender. Autodidacta que busca constantemente optimizar y perfeccionar tareas. Con una gran disposición para incorporar nuevas tecnologías y mantener un alto grado de responsabilidad y compromiso en mi trabajo.",
  };

  const jobs = {
    title: "Experiencia",
    icon: <Experience />,
    jobs: [
      {
        jobTitle: "Desarrollador",
        startDate: "Abril 2021",
        endDate: "Febrero 2023",
        BussinesName: "Neotech Engineering Ltda, Bogotá",
        description:
          "Implementar modificaciones en el aplicativo conforme a las historias de usuario del sprint en curso, haciendo uso de la metodología PSP. Mejorar y optimizar funcionalidades según sea necesario. Desarrollar y perfeccionar procedimientos almacenados. Realizar pruebas con Cucumber teniendo en cuenta la metodología BDD.",
        skills: ["SQL SERVER", "DevExpress", ".Net", "C#"],
      },
      {
        jobTitle: "Programador junior",
        startDate: "Octubre 2018",
        endDate: "Abril 2019",
        BussinesName: "Colombian Tourist, Bogotá",
        description:
          "Desarrollar e implementar en la página web, los mockups elaborados por el área de diseño. Optimizar la velocidad de carga de las páginas. úmplementar las estrategias de SEO propuestas por la agencia de marketing",
        skills: ["Javascript", "HTML", "CSS", "DotNetNuke"],
      },
    ],
  };

  const skills = {
    title: "Habilidades",
    icon: <Skills />,
    skills: [
      {
        skill: "Postgrest",
        value: 75,
      },
      {
        skill: "SQL",
        value: 80,
      },
      {
        skill: "Javascript",
        value: 80,
      },
      {
        skill: "Docker",
        value: 80,
      },
      {
        skill: "Dev-containers",
        value: 80,
      },
      {
        skill: "Golang",
        value: 70,
      },
      {
        skill: "Git",
        value: 60,
      },
    ],
  };

  const rightContent = (
    <>
      <BackgroundTitle />
      <SectionDetail
        title={profile.title}
        icon={profile.icon}
        text={profile.text}
      />
      <SectionDetail title={jobs.title} jobs={jobs.jobs} icon={jobs.icon} />
      <SectionDetail
        title={skills.title}
        skills={skills.skills}
        icon={skills.icon}
      />
    </>
  );

  return (
    <>
      <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
    </>
  );
}

export default App;
