import css from "./ImgCirlce.module.css";

export default function ImgCirlce(props) {
  const { src } = props;
  return <img src={src} className={css.img}></img>;
}
