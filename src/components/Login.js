import Header from "./Header";
import { useState ,useRef } from "react";
import dataValidation from '../utils/validate'
import  { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import auth from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
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
                    displayName: name.current.value, photoURL: "https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/226368040_823005152007625_2181038512133255796_n.jpg?ccb=11-4&oh=01_Q5AaIJ2f0muy_NXxLO1AG8-8_pbveo7KIsR0eOhD3AEj0RKw&oe=669D12D5&_nc_sid=e6ed6c&_nc_cat=111"
                  }).then(() => {
                    // Profile updated!
                    // ...  
                    const {uid,email, displayName , photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL : photoURL}));
                    navigate('/browse')
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
                navigate('/')
                // ..
              });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                navigate('/browse')
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
    
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg" alt='bg'/>
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