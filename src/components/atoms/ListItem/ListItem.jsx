import css from "./ListItem.module.css";

/**
 * Componente ListItem que representa un item de una lista, tiene un punto amarillo que encaja con una linea vertical.
 * 
 * @param {object} props - Props del componente.
 * @param {React.ReactNode} props.children - El contenido del item de la lista
 */
export default function ListItem(props) {
  const { children } = props;
  return (
    <div className={css.container}>
      <li>{children}</li>
    </div>
  );
}
