import css from "./H1.module.css";

export default function H1() {
  return (
    <h1 className={css.title}>
      David S. <span className={css.accent}>Gonzalez</span>
    </h1>
  );
}
