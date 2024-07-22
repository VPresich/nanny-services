import Reviewers from "../Reviewers/Reviewers";
import css from "./CardDetails.module.css";

const CardDetails = ({ nanny }) => {
  const { about, reviews } = nanny;
  return (
    <div className={css.container}>
      <div className={css.descrWrapper}>
        <span className={css.label}>About:</span>
        <p className={css.experience}>{about}</p>
      </div>
      <Reviewers reviews={reviews} />
    </div>
  );
};

export default CardDetails;
