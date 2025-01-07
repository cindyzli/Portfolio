'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Cat from '@/images/logos/catandyarn.gif'
import emailjs from 'emailjs-com';

export default function Example() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_6eectfo',
        'template_geob6xq',
        formData,
        'KsD1axxP-vI0yDO-7'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message Sent! Will get back to you shortly');

          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Oops! Something went wrong.');
        }
      );
  };

  return (
    <section
      id="contact"
      aria-label="contact"
      className="bg-white py-20 sm:py-32 relative"
    >
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-full sm:w-1/2">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me!</h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-300"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-300"
                    />
                  </div>
                </div>

              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-pink-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
                >
                  Let&rsquo;s talk
                </button>
              </div>
            </form>
          </div>

          <div className="w-full sm:w-1/2 flex justify-center">
            <Image src={Cat} alt="logo" width={600} height={600} className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
