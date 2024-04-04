'use client'
import React, { useEffect,useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation'; // Import the useRouter hook
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Habibi } from 'next/font/google';
const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold the user information
  const supabase = createClientComponentClient();
  const router = useRouter(); // Initialize the router

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    console.log(user) // Redirect to the login page after logout using router.push
  };

   useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await supabase.auth.getUser();
      setUser(currentUser); // Set the user state based on the authentication status
    };

    fetchUser();
  }, []);
  
  


   
 

    return (
      <div className='sticky top-0 z-50'>
      {user ? (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <Link href="/"className="btn btn-ghost text-xl">RideShare</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href='/'>Home</Link></li>
              <li>
                <Link href='/shareride'>Share a Ride</Link>
              </li>
              <li><a>Transit Buddies</a></li>
            </ul>
          </div>
          <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge"></span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
          
          </div>
        </div>
      ) : (
        <p>Login first to check the home page</p>
      )}
    </div>
    );
};

export default Navbar;
