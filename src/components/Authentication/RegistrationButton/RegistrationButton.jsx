import { useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { register } from "../../../redux/auth/operations";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import css from "./RegistrationButton.module.css";

const RegistrationButton = (handleClick) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const theme = useSelector(selectTheme);
  // const theme = "red";
  const dispatch = useDispatch();

  const handleShowRegister = () => {
    setShowRegisterForm(true);
  };

  const handleCloseRegister = () => {
    setShowRegisterForm(false);
  };

  const handleRegistration = (values) => {
    console.log("Values", values);
    dispatch(register(values))
      .unwrap()
      .then(() => {
        setShowRegisterForm(false);
        handleClick && handleClick();
      })
      .catch(() => {});
  };

  return (
    <>
      <button
        onClick={handleShowRegister}
        className={clsx(css.btn, css[theme])}
      >
        Registration
      </button>

      {showRegisterForm && (
        <ModalWrapper onClose={handleCloseRegister}>
          <RegisterForm handleRegistration={handleRegistration} />
        </ModalWrapper>
      )}
    </>
  );
};

export default RegistrationButton;
