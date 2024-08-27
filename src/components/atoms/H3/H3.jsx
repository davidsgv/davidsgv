import css from "./H3.module.css";

/**
 * Componente H3 que muestra un titulo.
 * 
 * @param {object} props - Props del componente.
 * @param {string|React.ReactNode} props.children - El texto o elemento que se mostrará dentro del titulo.
 * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function H3(props) {
  const { children, altColor } = props;
  return <h3 className={`${css.title} ${altColor && css.alt}`}>{children}</h3>;
}
