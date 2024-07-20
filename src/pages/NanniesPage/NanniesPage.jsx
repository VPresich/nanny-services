import DocumentTitle from "../../components/DocumentTitle";
import css from "./NanniesPage.module.css";

export default function NanniesPage() {
  return (
    <>
      <DocumentTitle>Teachers catalog</DocumentTitle>
      <section className={css.container}>
        {/* <h2 className="visually-hidden"> Nannies catalog</h2> */}
        <h2 className="visually-hidden"> Nannies catalog</h2>
      </section>
    </>
  );
}
