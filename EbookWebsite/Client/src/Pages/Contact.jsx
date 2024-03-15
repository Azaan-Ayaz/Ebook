import React, { useState } from 'react';
import Header from '../Layout/Header';
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/create-contact', {
        firstName,
        lastName,
        email,
        phone,
        message,
      });
      console.log('Form submitted:', { firstName, lastName, email, phone, message });
      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:mx-16 md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-4">
          <img src="cn.png" alt="Contact Us" className="w-full" />
        </div>
        <div className="md:w-1/2 p-4">
          <div className="text-2xl md:text-3xl font-semibold text-purple-800 mb-8">Contact Us</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-lg font-semibold text-purple-800 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-lg font-semibold text-purple-800 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-purple-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-semibold text-purple-800 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-purple-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded border border-purple-300 focus:outline-none focus:border-purple-500"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md py-2 px-6 hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
