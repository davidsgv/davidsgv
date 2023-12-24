import css from "./Progress.module.css";

export default function Progress(props) {
  const { label, value } = props;

  return (
    <>
      {label && <label>{label}</label>}
      <progress value={value} max="100" className={css.bar}>
        {value && value + "%"}
      </progress>
    </>
  );
}
