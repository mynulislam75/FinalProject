
import React, { useState } from 'react';
import { getAuth,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { useEffect } from 'react';
import initializeAuhetication from '../Firebase/firebase.init';


// initializeAuhetication();
initializeAuhetication();
const useFirebase = () => {


    // store data in usestate
    const [user, setUser] = useState({})
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState({})
    const [error, setError] = useState({})
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    

    const auth = getAuth();

    // getting email
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    // getting password
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // handle toggle
    const handleToggle = e => {
        setIsLogin(e.target.checked)
    }

    // HALDLE REGISTRATION OR LOG IN OF USER
    const handleRegistrationOrLogin = (e) => {
        e.preventDefault();
        if (isLogin) {
            handleResigterWithEmail(email, password)
            
        }
        else {
            handleLoginWithEmail(email, password)
         
        }
    }



    // CREATE NEW USER WITH EMAIL AND PASSWORD;
    const handleResigterWithEmail = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                hanldeUserInfoRegister(user.email)
               
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // LOG IN USING EMAIL AND PASSWORD
    const handleLoginWithEmail = (email, password) => {
        setIsLoading(true);
       
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



    




    // POST USER INFO AS EMAIL
    // const hanldeUserInfoRegister = (email) => {
    //     fetch("https://morning-plateau-38485.herokuapp.com/addUserInfo", {
    //       method: "POST",
    //       headers: { "content-type": "application/json" },
    //       body: JSON.stringify({ email }),
    //     })
    //       .then((res) => res.json())
    //       .then((result) => console.log(result));
    //   };





    const hanldeUserInfoRegister = (email) => {
        fetch("https://morning-plateau-38485.herokuapp.com/addUserInfo", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      };



    // SIGNOUT
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    // RETURN FROM THIS FUNCTION
    return { user, error,handleSignOut, handleEmail, handlePassword, handleLoginWithEmail, handleResigterWithEmail, handleToggle, isLogin, handleRegistrationOrLogin, isLoading }
};

export default useFirebase;