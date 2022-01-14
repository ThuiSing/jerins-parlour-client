import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import InitializeFirebase from "../Firebase/InitializeFirebase";
import axios from "axios";

InitializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //login with google provider

  const logInByGoogle = (navigate, destination) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(destination);

        saveToDb(user.displayName, user.email, "admin", "PUT");
        // ...
      })
      .catch((error) => {
        setErr(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //get current user
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);
  //get admin
  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user.email}`).then((res) => {
      setIsAdmin(res.data.admin);
    });
  }, [user.email]);

  //create user using email pass
  const registerUserEmail = (email, password, name, navigate, role) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            const user = userCredential.user;
            setUser(user);
            saveToDb(user.displayName, user.email, role, "POST");
            alert("added successfully");
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
          });
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  //login using email pass
  const logInUsingEmail = (email, password, history, destination) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        alert("successfully logged in");
        history.replace(destination);
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  //save user to database
  const saveToDb = (name, email, role, method) => {
    fetch(`http://localhost:5000/users`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, role }),
    });
  };

  //log out
  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //return
  return {
    user,
    err,
    logInByGoogle,
    LogOutUser,
    registerUserEmail,
    logInUsingEmail,
    isLoading,
    isAdmin,
  };
};
export default useFirebase;
