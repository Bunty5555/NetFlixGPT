import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_Netflix } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import Button from "@mui/material/Button";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());

        // ...
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute flex justify-between w-[100%] py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO_Netflix} alt="LOGO" />
      {user && (
        <div className="flex p-2">
          <Button
            className="py-1 px-3 m-2 text-white bg-blue-700 rounded-2xl"
            onClick={handleGptSearchClick}
            variant="outlined"
          >
            Bunty Search
          </Button>
          <img
            className="w-12 h-12"
            src="https://avatars.githubusercontent.com/u/136063596?v=4"
            alt="logo-icon"
          />
          <button onClick={handleSignOut} className="mx-3 font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
