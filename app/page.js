'use client';
import { SupabaseClient, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react';
import router from 'next/router';
import Navbar from '../components/Navbar.jsx'
import supabase from '../config/supabaseClient'
const Page = () => {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();
  // const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await supabase.auth.getUser();

      console.log(currentUser);
      setUser(currentUser);
      if (!currentUser) {
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div>
    {user ? (
      <>
        <Navbar/>
      </>
    ) : (
      <div onClick={() => router.push('./signup/page.jsx')} style={{ cursor: 'pointer' }}>Go to Signup</div>
    )}
  </div>
  );
};

export default Page;
