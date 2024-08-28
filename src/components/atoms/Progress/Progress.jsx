import css from "./Progress.module.css";

/**
 * Componente Progress que muestra una barra de progreso con el porcentaje que se le pase.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.label - Label que describe la barra de progreso
 * @param {string} props.value - Porcentaje de completitud de la barra de progreso, representado como un número entre 0 y 100.
 */
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
