import css from "./Badge.module.css";

/**
 * Componente Badge que muestra un texto dentro de un contenedor estilizado.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.text - El texto que se mostrará dentro del badge.
 */
export default function Badge(props) {
  const { text } = props;
  return <div className={css.badge}>{text}</div>;
}
