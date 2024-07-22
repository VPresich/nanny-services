import { useState } from "react";
import CardFeatures from "../CardFeatures/CardFeatures";
import CardDetails from "../CardDetails/CardDetails";
import FavoriteButton from "../../components/UI/FavoriteButton/FavoriteButton";
import Button from "../UI/Button/Button";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
// import BookingFormContent from "../BookingFormContent/BookingFormContent";
import Image from "../UI/Image/Image";
import css from "./Card.module.css";

export default function Card({ nanny }) {
  const {
    avatar_url,
    name,
    birthday,
    experience,
    kids_age,
    education,
    characters,
  } = nanny;

  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleValues = (values) => {
    console.log(values);
    setShowModal(false);
    setShowDetails(false);
  };

  return (
    <div className={css.container}>
      <Image imgUrl={avatar_url} name={name} />

      <div className={css.infoWrapper}>
        <div className={css.firstLine}>
          <div className={css.nameWrapper}>
            <span className={css.label}>Languages</span>
            <p className={css.name}>{name} </p>
          </div>
          <CardFeatures nanny={nanny} />
          <div className={css.favoriteContainer}>
            <FavoriteButton id={nanny._id} />
          </div>
        </div>
        <div className={css.mainInfo}>
          <div className={css.langWrapper}>
            <span className={css.label}>Age: </span>
            <span className={css.languages}>{birthday}</span>
          </div>

          <div className={css.langWrapper}>
            <span className={css.label}>Experience: </span>
            <span className={css.languages}>{experience}</span>
          </div>

          <div className={css.langWrapper}>
            <span className={css.label}>Kids Age: </span>
            <span className={css.languages}>{kids_age}</span>
          </div>

          <div className={css.langWrapper}>
            <span className={css.label}>Characters: </span>
            <span className={css.languages}>{characters.join(", ")}</span>
          </div>

          <div className={css.langWrapper}>
            <span className={css.label}>Education: </span>
            <span className={css.languages}>{education}</span>
          </div>
        </div>
        {!showDetails && (
          <span className={css.readMore} onClick={handleShowDetails}>
            Read more
          </span>
        )}
        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <CardDetails nanny={nanny} />
        </div>

        {/* <LevelList levels={levels} levelFilter={levelFilter} /> */}

        <div
          className={
            showDetails
              ? `${css.details} ${css.visible}`
              : `${css.details} ${css.hidden}`
          }
        >
          <Button onClick={handleClick} btnAuxStyles={css.btnAuxStyles}>
            Make an appointment
          </Button>
        </div>
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          {/* <BookingFormContent nanny={nanny} handleValues={handleValues} /> */}
        </ModalWrapper>
      )}
    </div>
  );
}
