import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import LoginCSS from "../LoginPage/Login.module.css";

const Register = () => {
  const [fieldValues, setFieldValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const fieldValidations = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      type: "tel",
      name: "phone",
      placeholder: "phone",
      errorMessage: "Use Bangladeshi number +8801XXXXXXXXX",
      pattern: `^(?:\+?88)?01[15-9]\d{8}$`,
      required: true,
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: fieldValues.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, phone, password } = fieldValues;
    console.log(username, email, phone, password);

    try {
      const url = process.env.REACT_APP_BACKEND_URL + `/auth/register`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: username, email, phone, password }),
      });
      const data = await res.json();

      if (data.toast === "success") {
        alert("Successfully added user");
        e.target.reset();
      } else {
        alert("Plz try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={LoginCSS.page_wrapper_login}>
      {/* login fields */}
      <div className={LoginCSS.login_field}>
        <form method="POST" onSubmit={handleSubmit}>
          {fieldValidations.map((validation) => (
            <FormInput
              key={validation.id}
              {...validation}
              value={fieldValues[validation.name]}
              onChange={onChange}
            />
          ))}
          <input
            className={LoginCSS.submit_btn_register}
            type="submit"
            value="SIGN UP"
          />
        </form>
      </div>

      <p className={LoginCSS.account}>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
