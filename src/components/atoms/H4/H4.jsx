import css from "./H4.module.css";

/**
 * Componente H4 que muestra un titulo.
 * 
 * @param {object} props - Props del componente.
 * @param {string|React.ReactNode} props.children - El texto o elemento que se mostrará dentro del titulo.
 * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function H4(props) {
  const { altColor, children } = props;
  return <h4 className={`${css.title} ${altColor && css.alt}`}>{children}</h4>;
}
