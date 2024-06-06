import React, { useState, useRef } from "react";
import Header from "./Header";
import { IMG1_URL } from "../utils/url";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const [errMessage, seterrMessage] = useState();
  const fname = useRef(null);
  const [isSignup, setisSignup] = useState(false);
  const togglesift = () => {
    setisSignup(!isSignup);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

    seterrMessage(message);

    if (isSignup) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fname.current.value,
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={IMG1_URL} alt="Logo"></img>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute mx-auto my-48 bg-black bg-opacity-80 w-4/12 p-12 right-0 left-0">
        <div className="px-8 ">
          <label className="text-white font-bold text-4xl text-center">{isSignup ? "Sign Up" : "Sign In"}</label>
        </div>
        {isSignup ? (
          <div className="p-2 m-2">
            <input type="text" placeholder="Name" className="text-white p-3 m-2 flex w-11/12 rounded-lg bg-slate-600" ref={fname}></input>
          </div>
        ) : (
          ""
        )}
        <div className="p-2 m-2">
          <input type="text" placeholder="Email Address" className=" text-white p-3 m-2 flex w-11/12 rounded-lg bg-slate-600" ref={email}></input>
        </div>
        <div className="p-2 m-2">
          <input type="password" placeholder="Password" className="p-3 m-2 flex w-11/12 rounded-lg bg-slate-600" ref={password}></input>
        </div>
        <p className=" px-6 text-lg text-red-600 font-bold">{errMessage}</p>
        <div className="p-2 m-2">
          <button className="bg-red-700 text-white rounded-lg p-3 flex w-11/12 justify-center" onClick={handleButtonClick}>
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <div className="p-2 m-2">
          <span className="text-neutral-500">{isSignup ? "Already a User ! " : "New to Netflix ?"}</span>
          <span className="text-white cursor-pointer" onClick={togglesift}>
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </div>
        <div className="p-2 m-2">
          <p className="text-neutral-500">
            This is not the real Netflix. It's a clone developed by Uday Shankar to learn how Netflix frontend works and is intended to show off my development
            skills.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
