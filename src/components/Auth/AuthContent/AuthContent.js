import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { $host } from "../../../http";
import "./AuthContent.css";

function AuthContent({ setModalAuth, setShowLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successLogin = () => toast.success("You have successfully logged in");
  const errorLogin = () => toast.error("Wrong login");

  const signIn = async () => {
    const data = {
      username: userName,
      password: password,
    };

    await $host
      .post(`en/api/auth/token/login/`, data)
      .then(({ data }) => {
        console.log("success login", data);
        console.log(data.auth_token);
        localStorage.setItem("token", data.auth_token);
        successLogin();
        setShowLogin(false);
      })
      .catch((e) => {
        errorLogin();
      });
  };

  return (
    <div className="authContent">
      <div className="authContent__titles">
        <span>Login</span>
      </div>
      <div className="authContent__content">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              placeholder="User name"
            />
          </p>
          <p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </p>
          <div className="authContent__button">
            <button
              onClick={() => {
                setModalAuth(false);
                signIn();
              }}
              type="submit"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthContent;
