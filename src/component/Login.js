import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidationData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState("");

  const handleSnackbarOpen = () => {
    setOpen(true);
  };
  const handleSnackbarClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleButtonClick = async () => {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const name = nameRef?.current?.value;

    const message = checkValidationData(email, password, name);
    setErrorMessage(message);
    if (message) return;

    try {
      const auth = getAuth();
      if (!isSignIn) {
        // sign up logic

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          password
        );
        const user = userCredential.user;
        await updateProfile(auth.user, {
          displayName: nameRef.current.value,
          photoURL: USER_AVATAR,
        });
        const { email, displayName, photoURL } = auth.currentUser;
        setStatus("success");
        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // sign in logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        navigate("/browse");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " " + errorMessage);
      setOpen(true);
      navigate("/");
      setStatus("error");
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  // const handleCloseSnackbar = () => {
  //   setOpenSnackbar(false);
  // };
  const handleClose = () => {
    setLoad(false);
  };
  const handleOpen = () => {
    setLoad(true);
  };

  const handleCombine = () => {
    handleButtonClick();
    handleSnackbarOpen();
    handleOpen();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo" />
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
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 "
        />
        <input
          ref={passwordRef}
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

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        variant="filled"
        severity="success"
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {/* {errorMessage ? errorMessage : "Correct email or password"} */}
          {errorMessage || "Correct email or password"}
        </MuiAlert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Login;

// const handleButtonClick = () => {
//   console.log(email?.current?.value);
//   console.log(password.current.value);
//   const message = checkValidationData(
//     email?.current?.value,
//     password?.current?.value,
//     name?.current?.value
//   );
//   setErrorMessage(message);

//   if (message) return;
//   if (!isSignIn) {
//     // sign up logic
//     createUserWithEmailAndPassword(
//       auth,
//       email.current.value,
//       password.current.value
//     )
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         const auth = getAuth();
//         updateProfile(auth.user, {
//           displayName: name.current.value,
//           photoURL: USER_AVATAR,
//         })
//           .then(() => {
//             const { uid, email, displayName, photoURL } = auth.currentUser;
//             setStatus("success");
//             dispatch(
//               addUser({
//                 uid: uid,
//                 email: email,
//                 displayName: displayName,
//                 photoURL: photoURL,
//               })
//             );
//             navigate("/browse");
//             // Profile updated!
//             // ...
//           })
//           .catch((error) => {
//             // An error occurred
//             setStatus("error");
//             setErrorMessage(error.message);
//             // setOpenSnackbar(true)
//             // {()=>PositionedSnackbar()}
//             // PositionedSnackbar();
//           });
//         console.log(user);
//         navigate("/browse");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setErrorMessage(errorCode + " " + errorMessage);
//         // setOpenSnackbar(true);
//         navigate("/");

//         // ..
//       });
//   } else {
//     //sign in logic
//     signInWithEmailAndPassword(
//       auth,
//       email.current.value,
//       password.current.value
//     )
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         navigate("/browse");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setErrorMessage(errorCode + "-" + errorMessage);
//         // setOpenSnackbar(true);
//       });
//   }
// };
