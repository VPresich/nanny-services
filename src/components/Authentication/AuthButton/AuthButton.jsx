import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errNotify } from "../../../auxiliary/notification/notification";
import { ERR_LOGIN } from "../Forms/constants";
import { selectIsLoggedIn, selectTheme } from "../../../redux/auth/selectors";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import LoginForm from "../Forms/LoginForm/LoginForm";
import { logOut, logIn } from "../../../redux/auth/operations";
import css from "./AuthButton.module.css";

import clsx from "clsx";

export default function AuthButton({ children, handleClick }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useSelector(selectTheme);

  const handleButton = () => {
    if (isLoggedIn) {
      dispatch(logOut());
      handleClick && handleClick();
    } else {
      setShowLoginForm(true);
    }
  };

  const handleLogin = (values) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        setShowLoginForm(false);
        handleClick && handleClick();
      })
      .catch(() => {
        errNotify(ERR_LOGIN);
      });
  };

  const handleCloseLogin = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      <button onClick={handleButton} className={clsx(css.btn, css[theme])}>
        <span className={css.txtBtn}>{children}</span>
      </button>
      {showLoginForm && (
        <ModalWrapper onClose={handleCloseLogin}>
          <LoginForm handleLogin={handleLogin} />
        </ModalWrapper>
      )}
    </div>
  );
}
