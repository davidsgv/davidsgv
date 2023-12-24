import css from "./IconCircle.module.css";

export default function IconCircle(props) {
  const { children, altColor } = props;

  return (
    <div className={`${css.container} ${altColor && css.alt}`}>{children}</div>
  );
}
