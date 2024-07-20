import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logoContainer}>
      <span className={css.logoText}>LearnLingo</span>
    </div>
  );
}