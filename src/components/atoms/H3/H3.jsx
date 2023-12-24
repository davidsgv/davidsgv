import css from "./H3.module.css";

export default function H3(props) {
  const { children, altColor } = props;
  return <h3 className={`${css.title} ${altColor && css.alt}`}>{children}</h3>;
}
