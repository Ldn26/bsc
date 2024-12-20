"use client";
import React, { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    placeOfBirth: "",
    gender: "",
    idCardNumber: "",
    parentalWarrant: null,
    checkInDate: "",
    checkOutDate: "",
    reservationType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Place of Birth */}
        <div className="mb-4">
          <label
            htmlFor="placeOfBirth"
            className="block text-lg font-medium mb-2"
          >
            Place of Birth
          </label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-lg font-medium mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* ID Card Number */}
        <div className="mb-4">
          <label
            htmlFor="idCardNumber"
            className="block text-lg font-medium mb-2"
          >
            ID Card Number
          </label>
          <input
            type="text"
            id="idCardNumber"
            name="idCardNumber"
            value={formData.idCardNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>

        {/* Parental Warrant (for minors) */}
        <div className="mb-4">
          <label
            htmlFor="parentalWarrant"
            className="block text-lg font-medium mb-2"
          >
            Parental Warrant (for minors)
          </label>
          <input
            type="file"
            id="parentalWarrant"
            name="parentalWarrant"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Check-in Date */}
        <div className="mb-4">
          <label
            htmlFor="checkInDate"
            className="block text-lg font-medium mb-2"
          >
            Check-in Date
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>

        {/* Check-out Date */}
        <div className="mb-4">
          <label
            htmlFor="checkOutDate"
            className="block text-lg font-medium mb-2"
          >
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>

        {/* Reservation Type */}
        <div className="mb-4">
          <label
            htmlFor="reservationType"
            className="block text-lg font-medium mb-2"
          >
            Reservation Type
          </label>
          <select
            id="reservationType"
            name="reservationType"
            value={formData.reservationType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          >
            <option value="">Select Reservation Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        {/* Confirm Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-teal-700 text-white p-3 rounded-lg shadow-md hover:bg-teal-800 focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
