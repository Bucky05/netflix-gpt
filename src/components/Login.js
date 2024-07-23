import Header from "./Header";
import { useState ,useRef } from "react";
import dataValidation from '../utils/validate'
import  { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import auth from '../utils/firebase'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, profile_icon } from "../utils/constants";

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        // validate the form data
    
    const isNotValid = dataValidation(email.current.value,password.current.value)
    if(isNotValid)
            setErrorMessage(isNotValid)
    else {
        if(!isSignInForm) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: profile_icon
                  }).then(() => {
                    // Profile updated!
                    // ...  
                    const {uid,email, displayName , photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL : photoURL}));
          
                    console.log(user)
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error.errorMessage)
                  });
                
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
                // ..
              });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
                })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
  });
        }
    }
    
    }
    return (<div>
        <Header/>
        <div className="absolute">
    
        <img src={BG_URL} alt='bg'/>
        </div>
        <form onSubmit= {(e)=> e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input ref={name} type ="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
            <input ref={password} type ="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
           <p className="text-red-800 font-bold text-lg py-2 ">{errorMessage}</p>
            <button type = "submit" className="bg-red-700 p-4 my-6 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm?'Sign In':'Sign Up'}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? (<span className=" text-red-600">New to Netflix?</span> ):(<span className=" text-red-600">Already a user?</span>)  } {isSignInForm?'Sign Up':'Sign In'}</p>
        </form>

        </div>
   )
};

export default Login