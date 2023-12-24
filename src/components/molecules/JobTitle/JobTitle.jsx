import H4 from "../../atoms/H4/H4.jsx";
import css from "./JobTitle.module.css";

export default function JobTitle(props) {
  const { jobTitle, startDate, endDate, BussinesName, altColor } = props;

  return (
    <div className={css.container}>
      <div>
        <H4 altColor={altColor}>{jobTitle}</H4>
        <p className={css.bussines}>{BussinesName}</p>
      </div>
      <p className={css.date}>
        {startDate} -{endDate}
      </p>
    </div>
  );
}
