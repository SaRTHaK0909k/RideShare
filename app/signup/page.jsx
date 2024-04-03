// SignupForm.jsx
'use client'
import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import  router  from 'next/router';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      // Handle signup success
      console.log('Signup success:', res);

      // Redirect to another page
      router.push('/project/app/page.js');
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle signup error, display message, etc.
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSignUp}
          className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </main>
  );
};

export default SignupForm;
