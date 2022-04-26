import { useState } from "react";
import LoginCSS from "../pages/LoginPage/Login.module.css";

const FormInput = (props) => {
  const [inputError, setInputError] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setInputError(true);
  };

  return (
    <>
      <input
        className={LoginCSS.login_input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setInputError(true)
        }
        focused={inputError.toString()}
      />
      <span className={LoginCSS.err_msg}>{errorMessage}</span>
    </>
  );
};

export default FormInput;
