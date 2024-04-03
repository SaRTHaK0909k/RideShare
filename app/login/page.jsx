'use client'
import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation'; // Import useNavigation from next/navigation

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClientComponentClient();
  const navigation = useRouter(); // Use useNavigation instead of useRouter

  const handleLogin = async () => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log('Login success:', res);
      navigation.push('./'); // Use navigation.push for navigation
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const handleSignUp = () => {
    navigation.push('../signup'); // Redirect to the signup page using navigation.push
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
          onClick={handleLogin}
          className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
        >
          Sign In
        </button>
        <button
          onClick={handleSignUp}
          className="w-full mt-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </main>
  );
};

export default LoginForm;
