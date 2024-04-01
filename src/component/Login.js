import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidationData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import PositionedSnackbar from "../utils/snackbarToggle";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [open, setOpen] = useState(false);
  // const [openSnackbar, setOpenSnackbar] = useState({
  //   open: false,
  //   vertical: "top",
  //   horizontal: "center",
  // });
  // const { vertical, horizontal, open } = openSnackbar;
  // const handleClick = (newState) => () => {
  //   setOpenSnackbar({ ...newState, open: true });
  // };

  // const handleClose = () => {
  //   setOpenSnackbar({ ...openSnackbar, open: false });
  // };
  const handleSnackbarOpen = () => {
    setOpen(true);
  };
  const handleSnackbarClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email?.current?.value);
    console.log(password.current.value);
    const message = checkValidationData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const auth = getAuth();
          updateProfile(auth.user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // setOpenSnackbar(true);
              // {()=>PositionedSnackbar()}
              PositionedSnackbar();
            });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // setOpenSnackbar(true);
          navigate("/");
          // PositionedSnackbar();
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // setOpenSnackbar(true);
          // PositionedSnackbar();
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  // const handleCloseSnackbar = () => {
  //   setOpenSnackbar(false);
  // };

  const handleCombine = () => {
    handleButtonClick();
    handleSnackbarOpen();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute w-3/12 my-36 mx-auto left-0 right-0 p-12 text-white bg-opacity-80"
      >
        <h1 className="text-4xl py-4 font-bold">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full  bg-gray-700 "
        />
        <button
          className="p-4 my-7 bg-red-600 w-full rounded-lg"
          // onClick={handleButtonClick}
          // onClick={handleClick({ vertical: "top", horizontal: "right" })}
          onClick={handleCombine}
        >
          {!isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className="font-bold text-red-500">{errorMessage}</p>
        <p className="cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New To Netflix ? Sign Up Now"
            : "Already Register ? Sign In Now"}
        </p>
      </form>
      {/* <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={
          typeof errorMessage === "string"
            ? errorMessage
            : "Incorrect email or password"
        }
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      /> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {typeof errorMessage === "string"
            ? errorMessage
            : "Correct email or password"}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Login;
