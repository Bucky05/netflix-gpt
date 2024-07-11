import React from 'react'
import { signOut } from 'firebase/auth';
import auth from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
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
       className="w-44"src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt='logo'/>
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
