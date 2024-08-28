import css from "./List.module.css";

export default function List(props) {
  const { children } = props;
  return <ul className={css.list}>{children}</ul>;
}
