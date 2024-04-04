'use client'
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { findTravelBuddies } from '../../logics/travelBuddiesService'; // Import the findTravelBuddies function

const MyComponent = () => {
    const [buddies, setBuddies] = useState(null); // Initialize buddies state as null
  
    // Function to fetch potential travel buddies
    const handleFindBuddies = async () => {

      const userId = '123'; // User's ID (replace with actual user ID)
      const pickupLocation = 'test'; // User's pickup location
      const dropLocation = 'test1'; // User's drop location
      const pickupTime = '2024-04-04 19:11:00'; // Current timestamp
  
      try {
        const buddiesData = await findTravelBuddies(userId, pickupLocation, dropLocation, pickupTime);
        setBuddies(buddiesData);
      } catch (error) {
        console.error('Error fetching travel buddies:', error.message);
      }
    };
  
    return (
      <div>
        <Navbar />
        <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
          <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
            {/* Button to trigger finding travel buddies */}
            <button onClick={handleFindBuddies} className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none">
              Find Travel Buddies
            </button>
            {/* Display potential travel buddies */}
            {buddies !== null && (
              <ul className="mt-4">
                {buddies.map((buddy, index) => (
                  <li key={index}>
                    {buddy.name} - {buddy.gender} - {buddy.pickup_location}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default MyComponent;