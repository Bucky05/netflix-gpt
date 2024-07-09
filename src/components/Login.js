import Header from "./Header";
import { useState } from "react";
const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (<div>
        <Header/>
        <div className="absolute">
    
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg" alt='bg'/>
        </div>
        <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
            {isSignInForm? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input type ="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
            <input type ="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
           
            <button className="bg-red-700 p-4 my-6 w-full rounded-lg">Sign In</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? (<span className=" text-red-600">New to Netflix?</span> ):(<span className=" text-red-600">Already a user?</span>)  } {isSignInForm?'Sign Up':'Sign In'}</p>
        </form>

        </div>
   )
};

export default Login