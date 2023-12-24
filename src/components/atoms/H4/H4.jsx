import css from "./H4.module.css";

export default function H4(props) {
  const { altColor, children } = props;
  return <h4 className={`${css.title} ${altColor && css.alt}`}>{children}</h4>;
}
