import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home Page</DocumentTitle>
      <div className={css.container}>
        <h1>Home Page</h1>
      </div>
    </>
  );
}
