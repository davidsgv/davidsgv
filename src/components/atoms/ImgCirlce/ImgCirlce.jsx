import css from "./ImgCirlce.module.css";

/**
 * Componente ImgCircle que muestra una imagen dentro de un círculo.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.src - La URL de la imagen que se mostrará.
 */
export default function ImgCirlce(props) {
  const { src } = props;
  return <img src={src} className={css.img}></img>;
}
