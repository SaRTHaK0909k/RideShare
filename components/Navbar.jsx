'use client'
import React, { useEffect,useState } from 'react';
import {useRouter} from 'next/navigation'; // Import the useRouter hook
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold the user information
  const supabase = createClientComponentClient();
  const router = useRouter(); // Initialize the router

   useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await supabase.auth.getUser();
      setUser(currentUser); // Set the user state based on the authentication status
    };

    fetchUser();
  }, []);
  



   const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    console.log(user) // Redirect to the login page after logout using router.push
  };
 

  return (
    <div>
    {user ? (
      <>
        <p>Navbar content goes here...</p>
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <p>Login first to check the home page</p>
    )}
  </div>
  );
};

export default Navbar;
