import { useState } from "react";
import Input from "./Input";
import { useInput } from "../Hooks/useInput";
import {isEmail,isNotEmpty,hasMinLength,isEqualsToOtherValue} from '../util/validation'

export default function Login() {
//   const [enteredValues, setEnteredValues] = useState({
//     email: "",
//     password: "",
//   });

//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false,
//   });

//   const emailIsValid = didEdit.email && !enteredValues.email.includes("@");
//   const passwordIsValid = didEdit.password && enteredValues.password.trim().length < 6;
//   console.log(passwordIsValid);



const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));
  
  //We can also do it using ref
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);

    console.log("Submitted");
  }

//   function handleInputChange(event, identifer) {
//     setEnteredValues((prev) => ({
//       ...prev,
//       [identifer]: event.target.value,
//     }));
//     setDidEdit((prev) => ({
//       ...prev,
//       [identifer]: false,
//     }));
//   }

//   function onInputBlur(identifier) {
//     setDidEdit((prev) => ({
//       ...prev,
//       [identifier]: true,
//     }));
//   }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id={"email"}
          value={emailValue}
          onBlur={() => {
            handleEmailBlur("email");
          }}
          onChange={(e) => handleEmailChange(e, "email")}
          error={'Please enter a valid Email'}
          type={'email'}
          name={'email'}
          inputIsValid={emailHasError}
        />

        <Input
          id={"password"}
          value={passwordValue}
          onBlur={() => {
            handlePasswordBlur("password");
          }}
          onChange={(e) => handlePasswordChange(e, "password")}
          error={'Please enter a valid Password'}
          type={'password'}
          name={'password'}
          inputIsValid={passwordHasError}
        />  


      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
