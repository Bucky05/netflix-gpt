import React from 'react'
import { signOut ,onAuthStateChanged} from 'firebase/auth';
import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import {logo , profile_icon} from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice';
import { Supported_Languages } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email, displayName , photoURL} = user;

        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL : photoURL}));
        navigate('/browse')
       
        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser())
        navigate('/')
      
      }
    });


    //returning so that when the component unmounts it can be unsubscribed
    return () => unsubscribe()
  },[])
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  const handleSignOut = () => {
  signOut(auth).then(() => {
    navigate('/')
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }
  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between'>
      <img
       className="w-44 mx-auto md:mx-0"src={logo} alt='logo'/>
    {user  &&(
       <div className='justify-between flex p-2'>
        {showGptSearch && 
        <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {Supported_Languages.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
         
        </select>
}
        <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home Page":"GPT Search"}</button>
        <img className="hidden md:block w-12 h-12 "src={user?.photoURL} 
          alt='profile image'
          />
          <button className='font-bold' onClick={handleSignOut}>Sign Out</button>
       </div>
    )}
    </div>
  )
}

export default Header
