import H4 from "../../atoms/H4/H4";
import css from "./DescriptionTitle.module.css";

/**
 * Componente DescriptionTitle que muestra un titulo con parrafos de descripción.
 * 
 * @param {object} props - Props del componente.
 * @param {string} props.title - Titulo que lleva el componente.
 * @param {Array<{ text: string, link?: string }>} props.descriptions - Lista de objetos que representan las descripciones. Cada objeto puede tener una propiedad `text` (texto a mostrar) y una propiedad opcional `link` (URL a la que se enlaza).
 * @param {boolean} props.altColor - Si es `true`, aplica un color alternativo al título.
 */
export default function DescriptionTitle(props) {
  const { title, descriptions, altColor } = props;

  return (
    <>
      <H4 altColor={altColor}>{title}</H4>
      {
        descriptions?.map((description, index) => {
          return <Description key={index} link={description.link} text={description.text} altColor={altColor} />
        })
      }
    </>
  );
}

function Description(props) {
  const { link, text, altColor } = props;

  if (!link) {
    return (
      <p className={`${css.text} ${altColor && css.alt}`}>
        {text}
      </p>
    );
  }

  return (
    <a
      href={link}
      className={`${css.text} ${altColor && css.alt}`}
    >
      {text}
    </a>
  );
}