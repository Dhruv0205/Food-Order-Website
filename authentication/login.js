import React from "react";
import { useState, useRef } from "react";
import { BGIMG } from "../utlis/Constant";
import { checkValidData } from "../utlis/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const number = useRef(null);
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    //    console.log(email.current.value);
    //    console.log(password.current.value);
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);

    if (message) {
      return;
    }

    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (user) {
            setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              fullname: name?.current?.value,
              phone: number?.current?.value,
            });
            navigate("/Dashboard");
          } // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const userid = userCredential.user.uid;
          navigate("/Dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const clickHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <div className="absolute">
        <img
          alt="BackGround Image"
          src={BGIMG}
          class="default-ltr-cache-1jxs5rh e13sg9vu0"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-3">
          {!isLogin ? " Sign up " : "Sign In"}
        </h1>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              ref={name}
              className="p-4 my-2 w-full bg-gray-700 rounded-md"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 my-2 w-full bg-gray-700 rounded-md"
              ref={number}
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"
          ref={email}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"
          ref={password}
        />

        <p className="text-lg text-red-500 font-bold py-2 ">{errorMessage}</p>
        <button
          className="bg-red-700 p-4 w-full my-6 rounded-lg text-white"
          onClick={buttonClickHandler}
        >
          {isLogin ? "Sign In" : "Sign up"}
        </button>

        <p className="my-6 cursor-pointer" onClick={clickHandler}>
          {!isLogin
            ? "Already Registered? sign in now."
            : "New User? Sign up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
