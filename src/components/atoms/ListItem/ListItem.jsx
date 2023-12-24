import css from "./ListItem.module.css";

export default function ListItem(props) {
  const { children } = props;
  return (
    <div className={css.container}>
      <li>{children}</li>
    </div>
  );
}
