"use client";

import { Afacad } from "next/font/google";
import { useState, useEffect } from 'react';
import Popup from '../Popup';

const afacad = Afacad({
  subsets: ["latin"],
});

const Contacts = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, message }),
      });

      const data = await response.json();
      setStatus(data.message);
      if (data.message === 'Email sent successfully') {
        setFullname('');
        setEmail('');
        setMessage('');
      }
      setShowPopup(true);
    } catch (error) {
      console.error(error);
      setStatus('Failed to send email');
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (status) {
      setShowPopup(true);
    }
  }, [status]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setStatus('');
  };

  return (
    <div
      id="contacts"
      className={`${afacad.className} bg-[#cf871b] p-4 md:p-8`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Contacts
      </h2>

      <div className="flex flex-col md:flex-row justify-center md:gap-20 lg:gap-40 mb-8">
        <div className="text-xl md:text-2xl pt-2 mb-8 md:mb-0">
          <h3 className="pb-2 font-semibold">Address</h3>
          <p className="pb-4 md:pb-8">Kigali, Rwanda</p>
          <h3 className="pb-2 font-semibold">Email</h3>
          <p className="pb-4 md:pb-8">latifahumunyana@gmail.com</p>
          <h3 className="pb-2 font-semibold">Phone</h3>
          <p>+250 786230026</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="font-semibold">Fullname</h3>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full text-black px-2 py-1 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email</h3>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black px-2 py-1 rounded-lg"
            />
          </div>
          <div>
            <h3 className="font-semibold">Message</h3>
            <textarea
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-black px-2 py-1 rounded-lg mb-2"
            ></textarea>
            <button
              type="submit"
              className="border rounded-xl font-semibold px-8 py-2 hover:text-[#cf871b] hover:bg-white transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {showPopup && (
        <Popup message={status} onClose={handleClosePopup} />
      )}

      <div className="border-t border-white pt-4">
        <p className="text-center text-lg">
          © 2025 Latifa Umunyana. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
