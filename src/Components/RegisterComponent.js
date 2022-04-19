import React, { useState } from "react";
import './component.css';
export default function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userFormErr, setUserFormErr] = useState({
    nameErr: null,
    usernameErr: null,
    emailErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });

  const handleUserFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.id]: e.target.value,
    });
    if (e.target.id === "username") {
      setUserFormErr({
        ...userFormErr,
        usernameErr:
          e.target.value.length === 0
            ? "This field is required"
            : /\s/.test(e.target.value)
            ? "Username should contain no spaces"
            : e.target.value.length < 3
              ? "Minimum length is 3 characters"
              : null,
      });
    } else if (e.target.id === "name") {
      setUserFormErr({
        ...userFormErr,
        nameErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
              ? "Minimum length is 3 characters"
              : null,
      });
    } else if (e.target.id === "email") {
      setUserFormErr({
        ...userFormErr,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
            : !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(e.target.value)
              ? "Invalid Email"
              : null,
      });
    } else if (e.target.id === "password") {
      setUserFormErr({
        ...userFormErr,
        passwordErr:
          e.target.value.length === 0
            ? "This field is required"
            : !/^(?=.\d)(?=.[a-z])(?=.[A-Z])[a-zA-Z\d@$.!%#?&]/.test(e.target.value)
            ? "password length should not be less than 8 characters, contains at least one lowercase, one uppercase, at least one digit and special character"
              : null,
      });
    } else if (e.target.id === "confirmPassword") {
      setUserFormErr({
        ...userFormErr,
        confirmPasswordErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value != userForm.password
              ? "confirmation does not match password"
              : null,
      });
    }
  };

  const validateFields = () => {
    setUserFormErr({
      usernameErr:
        userForm.username.length === 0
          ? "this field is required"
          : /\s/.test(userForm.username)
          ? "Username should contain no spaces"
          : userForm.username.length < 3
            ? "Minimum length is 3 characters"
            : null,

      nameErr:
        userForm.name.length === 0
          ? "this field is required"
          : userForm.name.length < 3
            ? "Minimum length is 3 characters"
            : null,

      emailErr:
        userForm.email.length === 0
          ? "this field is required"
          : !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(userForm.email)
            ? "Invalid Email"
            : null,

      passwordErr:
        userForm.password.length === 0
          ? "this field is required"
          : !/^(?=.\d)(?=.[a-z])(?=.[A-Z])[a-zA-Z\d@$.!%#?&]/.test(userForm.password)
              ? "password length should not be less than 8 characters, contains at least one lowercase, one uppercase, at least one digit and special character"
            : null,

      confirmPasswordErr:
        userForm.confirmPassword.length === 0
          ? "this field is required"
          : userForm.confirmPassword != userForm.password
          ? "confirmation does not match password"
            : null,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    validateFields();
    if (
      !userFormErr.usernameErr &&
      !userFormErr.emailErr &&
      !userFormErr.passowrdErr &&
      !userFormErr.confirmPassowrdErr &&
      !userFormErr.nameErr
    ) {
      console.log(userForm);
    }
  };

  return (
      <>
    <div className="container">
      <h1 className="my-3">Register</h1>

      <form onSubmit={(e) => submitForm(e)}>
      <div className="mb-2 w-75 m-auto">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className={`form-control ${userFormErr.usernameErr ? "border-danger" : ""}`}
            id="username"
            aria-describedby="usernameHelp"
            value={userForm.username}
            onChange={(e) => handleUserFormChange(e)}
          />
          {userFormErr.usernameErr && (
            <div id="usernameHelp" className="form-text text-danger">
              {userFormErr.usernameErr}
            </div>
          )}
        </div>

        <div className="mb-2 w-75 m-auto">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            className={`form-control ${userFormErr.emailErr ? "border-danger" : ""}`}
            id="email"
            aria-describedby="usernameHelp"
            value={userForm.email}
            onChange={(e) => handleUserFormChange(e)}
          />
          {userFormErr.emailErr && (
            <div id="emailHelp" className="form-text text-danger">
              {userFormErr.emailErr}
            </div>
          )}
        </div>

        <div className="mb-2 w-75 m-auto">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${userFormErr.usernameErr ? "border-danger" : ""}`}
            id="name"
            aria-describedby="nameHelp"
            value={userForm.name}
            onChange={(e) => handleUserFormChange(e)}
          />
          {userFormErr.nameErr && (
            <div id="nameHelp" className="form-text text-danger">
              {userFormErr.nameErr}
            </div>
          )}
        </div>

        <div className="mb-2 w-75 m-auto">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${userFormErr.passwordErr ? "border-danger" : ""}`}
            id="password"
            aria-describedby="passwordHelp"
            value={userForm.password}
            onChange={(e) => handleUserFormChange(e)}
          />
          {userFormErr.passwordErr && (
            <div id="passwordHelp" className="form-text text-danger">
              {userFormErr.passwordErr}
            </div>
          )}
        </div>

        <div className="mb-2 w-75 m-auto">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${userFormErr.confirmPasswordErr ? "border-danger" : ""}`}
            id="confirmPassword"
            aria-describedby="confirmPasswordHelp"
            value={userForm.confirmPassword}
            onChange={(e) => handleUserFormChange(e)}
          />
          {userFormErr.confirmPasswordErr && (
            <div id="confirmPasswordHelp" className="form-text text-danger">
              {userFormErr.confirmPasswordErr}
            </div>
          )}
        </div>
        <div className="mb-2 w-75 m-auto">
        <button type="submit" className="btn btn-primary w-100 my-3">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}