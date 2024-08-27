import css from "./IconCircle.module.css";

/**
 * Componente IconCircle que muestra un icono con un contorno redondo.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - El icono que se va a mostrar dentro del circulo
 * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function IconCircle(props) {
  const { children, altColor } = props;
  return (
    <div className={`${css.container} ${altColor && css.alt}`}>{children}</div>
  );
}
