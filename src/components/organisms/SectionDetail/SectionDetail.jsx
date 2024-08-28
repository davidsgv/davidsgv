import IconTitle from "../../molecules/IconTitle/IconTitle";
import Skill from "../../molecules/Skill/Skill";
import css from "./SectionDetail.module.css";
import List from "../../molecules/List/List";
import ListItem from "../../atoms/ListItem/ListItem";
import DescriptionTitle from "../../molecules/DescriptionTitle/DescriptionTitle";
import JobList from "../JobList/JobList";

/**
 * Componente SectionDetail que muestra una seccion con contenido.
 * 
//  * @param {object} props - Props del componente.
//  * @param {string} props.jobTitle - Cargo del puesto laboral.
//  * @param {string} props.bussinesName - Nombre de la empresa.
//  * @param {string} props.startDate - fecha inicio en la empresa.
//  * @param {string} props.endDate - fecha fin en la empresa.
//  * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function SectionDetail(props) {
  const { title, icon, text, jobs, skills, dataItems, altColor, separator } =
    props;

  const listSkills = skills?.map((element, index) => {
    return <Skill key={index} skill={element.skill} value={element.value} />;
  });

  const listDataContent = dataItems?.map((element, index) => {
    return (
      <ListItem key={index}>
        <DescriptionTitle
          title={element.title}
          descriptions={element.descriptions}
          altColor={altColor}
        />
      </ListItem>
    );
  });

  return (
    <div className={`${css.container} ${separator && css.separator}`}>
      <IconTitle icon={icon} altColor={altColor}>
        {title}
      </IconTitle>
      {text && (
        <p className={`${css.text} ${css.content} ${altColor && css.alt}`}>
          {text}
        </p>
      )}

      {jobs && <JobList jobs={jobs} />}

      {listSkills && <div className={css.skill}>{listSkills}</div>}

      {listDataContent && <List>{listDataContent}</List>}
    </div>
  );
}
