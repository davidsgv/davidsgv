import H3 from "../../atoms/H3/H3";
import IconCircle from "../../atoms/IconCircle/IconCircle";
import css from "./IconTitle.module.css";

/**
 * Componente IconTitle que muestra un titulo con un icono circular.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.title - Titulo que lleva el componente.
 * @param {React.ReactNode} props.children - El icono que se va a mostrar dentro del circulo
 * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function IconTitle(props) {
  const { icon, children, altColor } = props;
  return (
    <div className={css.container}>
      <IconCircle altColor={altColor}>{icon}</IconCircle>
      <H3 altColor={altColor}>{children}</H3>
    </div>
  );
}
