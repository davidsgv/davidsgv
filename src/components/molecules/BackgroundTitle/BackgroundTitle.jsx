import H1 from "../../atoms/H1/H1";
import H2 from "../../atoms/H2/H2";
import css from "./BackgroundTitle.module.css";

export default function BackgroundTitle() {
  return (
    <div className={css.container}>
      <H1 />
      <H2 />
    </div>
  );
}
