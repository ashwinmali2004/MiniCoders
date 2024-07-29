"use client"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setMessage(true);
    e.preventDefault();

    emailjs.sendForm('service_xx1z4se', 'template_76ab09d', form.current!, 'aiOWrRF1FXzLf8_e_')
      .then((result) => {
          console.log(result.text);
          setMessage(false);
      }, (error) => {
          console.log(error.text);
          setMessage(false);
      });
      e.currentTarget.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20" id='contact'>
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="border rounded-lg shadow-green-300 p-6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <h2 className="font-semibold">Address:</h2>
            <p>IT Hub, Jaipur</p>
          </div>
          <div>
            <h2 className="font-semibold">Phone:</h2>
            <p>(+91) 9460994274 </p>
          </div>
          <div>
            <h2 className="font-semibold">Email:</h2>
            <p>info@dataqueryai.com</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="text-black w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          />
          <button type="submit" className="bg-gradient-to-r from-cyan-400 to-green-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
        {message && <p>Message has been sent.</p>}
      </div>
    </div>
  );
};

export default Contact;
