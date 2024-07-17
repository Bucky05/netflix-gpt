import React from 'react'
import { signOut ,onAuthStateChanged} from 'firebase/auth';
import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import {logo , profile_icon} from '../utils/constants'

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
  const handleSignOut = () => {
  signOut(auth).then(() => {
    navigate('/')
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img
       className="w-44"src={logo} alt='logo'/>
    {user  &&(
       <div >
        <img className="w-12 h-12 "src={user?.photoURL} 
          alt='profile image'
          />
          <button className='font-bold' onClick={handleSignOut}>Sign Out</button>
       </div>
    )}
    </div>
  )
}

export default Header
