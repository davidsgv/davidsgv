import Progress from "../../atoms/Progress/Progress";
import css from "./skill.module.css";

export default function Skill(props) {
  const { skill, value } = props;
  return (
    <div className={css.container}>
      <p className={css.text}>{skill}</p>
      <Progress value={value} />
    </div>
  );
}
