import H4 from "../../atoms/H4/H4";
import css from "./DescriptionTitle.module.css";

export default function DescriptionTitle(props) {
  const { altColor, title, descriptions } = props;

  return (
    <>
      <H4 altColor={altColor}>{title}</H4>
      {descriptions?.map((description, index) => {
        return (
          <p key={index} className={`${css.text} ${css.alt}`}>
            {description}
          </p>
        );
      })}
    </>
  );
}
