import H3 from "../../atoms/H3/H3";
import IconCircle from "../../atoms/IconCircle/IconCircle";
import css from "./IconTitle.module.css";

export default function IconTitle(props) {
  const { icon, children, altColor } = props;
  return (
    <div className={css.container}>
      <IconCircle altColor={altColor}>{icon}</IconCircle>
      <H3 altColor={altColor}>{children}</H3>
    </div>
  );
}
