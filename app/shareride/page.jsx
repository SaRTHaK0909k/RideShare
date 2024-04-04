"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import supabase from '../../config/supabaseClient'; // Import Supabase client from your config file

const RideForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Insert data into the Supabase table
      const { data, error } = await supabase.from('rides').insert([
        {
          Name: name,
          Gender: gender,
          pickup_location: pickupLocation,
          drop_location: dropLocation,
          pickup_Time: departureTime,
        },
      ]).select();
  
      if (error) {
        console.error('Error inserting data:', error.message);
        return;
      }
  
      console.log('Data inserted successfully:', data);
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };
  
  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="Other">Other</option>
            </select>
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
            <div className="flex items-center mb-4">
              <p className="mr-2 text-white">Pickup Time:</p>
              <input
                type="datetime-local"
                id="departureTime"
                name="departureTime"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default RideForm;
