'use client'
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const RideForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', { pickupLocation, dropLocation, departureTime });
    // Display a toast notification
    toast.success('Form submitted successfully!', {
      position: 'top-right',
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
  return (
    <>
      <Navbar/>
      <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="Pickup Location"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              id="dropLocation"
              name="dropLocation"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              placeholder="Drop Location"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="datetime-local"
              id="departureTime"
              name="departureTime"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              placeholder="Departure Time"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <ToastContainer/>
      <Footer/>
    </>
  );
};

export default RideForm;
