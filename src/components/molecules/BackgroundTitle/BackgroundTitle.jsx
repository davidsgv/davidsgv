import css from "./BackgroundTitle.module.css";

/**
 * Componente BackgroundTitle que muestra el titulo principal de la pagina con un fondo opaco.
 */
export default function BackgroundTitle() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        David S. <span className={css.accent}>Gonzalez</span>
      </h1>
      <h2 className={css.subtitle}>Full Stack Developer</h2>
    </div>
  );
}
