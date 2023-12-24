import css from "./Badge.module.css";

export default function Badge(props) {
  const { text } = props;
  return <div className={css.badge}>{text}</div>;
}
