import H4 from "../../atoms/H4/H4.jsx";
import css from "./JobTitle.module.css";

/**
 * Componente JobTitle que muestra el titulo, cargo y fechas de un trabajo.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.jobTitle - Cargo del puesto laboral.
 * @param {string} props.bussinesName - Nombre de la empresa.
 * @param {string} props.startDate - fecha inicio en la empresa.
 * @param {string} props.endDate - fecha fin en la empresa.
 * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function JobTitle(props) {
  const { jobTitle, startDate, endDate, bussinesName, altColor } = props;

  return (
    <div className={css.container}>
      <div>
        <H4 altColor={altColor}>{jobTitle}</H4>
        <p className={css.bussines}>{bussinesName}</p>
      </div>
      <p className={css.date}>
        {startDate} -{endDate}
      </p>
    </div>
  );
}
