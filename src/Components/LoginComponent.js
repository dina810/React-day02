import React, { useState } from "react";
import './component.css';
export default function Login() {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/;

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const [userFormErr, setUserFormErr] = useState({
    emailErr: null,
    passwordErr: null,
  });

  const validateFields = () => {
    setUserFormErr({
      emailErr:
        userForm.email.length === 0
          ? "this field is required"
          : !emailRegex.test(userForm.email)
          ? "Invalid Email"
          : null,

      passwordErr:
        userForm.password.length === 0
          ? "this field is required"
          : !passwordRegex.test(userForm.password)
          ? "password length should be more than 8 characters, contains at least one lowercase, one uppercase, at least one digit and special character"
          : null,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    validateFields();
    if (!userFormErr.emailErr && !userFormErr.passwordErr) {
      console.log(userForm);
    }
  };
  const handleUserFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.id]: e.target.value,
    });
    if (e.target.id === "email") {
      setUserFormErr({
        ...userFormErr,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
            : !emailRegex.test(e.target.value)
            ? "Invalid Email"
            : null,
      });
    } else if (e.target.id === "password") {
      setUserFormErr({
        ...userFormErr,
        passwordErr:
          e.target.value.length === 0
            ? "This field is required"
            : !passwordRegex.test(e.target.value)
            ? "password length should not be less than 8 characters, contains at least one lowercase, one uppercase, at least one digit and special character"
            : null,
      });
    }
  };

  // switch (e.target.id) {
  //   case "username":
  //     setUserForm({
  //       ...userForm,
  //       username: e.target.value,
  //     });
  //     break;
  //   default:
  //}
  //};
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <br />

        <form onSubmit={(e) => submitForm(e)}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${userFormErr.emailErr ? "border-danger" : ""}`}
              id="email"
              aria-describedby="emailHelp"
              value={userForm.email}
              onChange={(e) => handleUserFormChange(e)}
            />
            {userFormErr.emailErr && (
              <div id="emailHelp" class="form-text-danger">
                {userFormErr.emailErr}
              </div>
            )}
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${userFormErr.passwordErr ? "border-danger" : ""}`}
              id="password"
              value={userForm.password}
              onChange={(e) => handleUserFormChange(e)}
            />
            {userFormErr.passwordErr && (
              <div id="passwordHelp" class="form-text-danger">
                {userFormErr.passwordErr}
              </div>
            )}
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
