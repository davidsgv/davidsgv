import css from "./TwoColumnLayout.module.css";

export default function TwoColumnLayout(props) {
  const { leftContent, rightContent } = props;
  return (
    <main className={css.container}>
      <section className={css.left}>
        <div>{leftContent}</div>
      </section>
      <section className={css.right}>{rightContent}</section>
    </main>
  );
}
