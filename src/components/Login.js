import Header from "./Header";
import { useState, useRef } from "react";
import dataValidation from '../utils/validate'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, profile_icon } from "../utils/constants";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()

    const handleLocalLogin = () => {
        const inputEmail = email.current.value;
        const inputPassword = password.current.value;
        const isNotValid = dataValidation(inputEmail, inputPassword)
        if (isNotValid) {
            setErrorMessage(isNotValid)
            return
        }
        const defaultEmail = 'abc@example.com'
        const defaultPassword = 'Qwerty@123'
        if (inputEmail === defaultEmail && inputPassword === defaultPassword) {
            const userObj = { uid: 'local-1', email: defaultEmail, displayName: 'Jack', photoURL: profile_icon };
            dispatch(addUser(userObj));
            // set session expiry 15 minutes from now
            const expiry = Date.now() + 15 * 60 * 1000;
            localStorage.setItem('sessionExpiry', expiry.toString());
            localStorage.setItem('user', JSON.stringify(userObj));
            navigate('/browse')
        } else {
            setErrorMessage('Invalid credentials')
        }
    }

    return (
        <div>
            <Header />
            <div className="fixed">
                <img className='h-screen md:h-auto object-cover' src={BG_URL} alt='bg' />
            </div>
            <div className="absolute inset-0 mt-20 flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                {/* Left side - Firebase Info */}
                <div className="w-full md:w-2/5 bg-gray-900 p-8 rounded-lg text-white border-2 border-red-700 bg-opacity-90">
                    <h2 className="text-2xl font-bold mb-4 text-red-600">⚠️ Firebase Issue</h2>
                    <p className="mb-4 text-gray-300">Due to ongoing Firebase authentication issues, please use the following default credentials to log in:</p>
                    <div className="bg-black bg-opacity-50 p-4 rounded mb-4 border border-gray-700">
                        <p className="text-yellow-400 font-semibold mb-2">📧 Email:</p>
                        <p className="text-white font-mono mb-4">abc@example.com</p>
                        <p className="text-yellow-400 font-semibold mb-2">🔐 Password:</p>
                        <p className="text-white font-mono">Qwerty@123</p>
                    </div>
                    <p className="text-sm text-gray-400">⏱️ Session expires in 15 minutes.</p>
                </div>

                {/* Right side - Sign In Form */}
                <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-2/5 p-12 bg-black text-white bg-opacity-80 rounded-lg border border-red-700">
                    <h1 className="font-bold text-3xl py-4">Sign In</h1>
                    <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 text-white rounded" />
                    <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 text-white rounded" />
                    <p className="text-red-800 font-bold text-lg py-2 ">{errorMessage}</p>
                    <button type="submit" className="bg-red-700 hover:bg-red-800 p-4 my-6 w-full rounded-lg font-bold" onClick={handleLocalLogin}>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
