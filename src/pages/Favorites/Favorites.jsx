import DocumentTitle from "../../components/DocumentTitle";
import css from "./Favorites.module.css";
export default function Favorites() {
  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
        <section className={css.content}>
          {/* <h2 className="visually-hidden"> Favorites</h2> */}
          <h2 className="visually-hidden"> Favorites</h2>
        </section>
      </div>
    </>
  );
}
