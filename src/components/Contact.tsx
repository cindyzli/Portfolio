'use client'

import React, { useCallback, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Cat from '@/images/logos/catandyarn.gif'
import emailjs from 'emailjs-com';
import clsx from 'clsx'

export default function Example() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({ email: false, message: false })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const spotlightRef = useRef<HTMLDivElement>(null)
  const [spotPos, setSpotPos] = useState({ x: 0, y: 0 })
  const [showSpot, setShowSpot] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSpotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const email = formData.email.trim()
  const message = formData.message.trim()

  const emailValid = useMemo(() => {
    if (!email) return false
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }, [email])

  const messageValid = useMemo(() => message.length >= 10, [message.length])

  const canSubmit = emailValid && messageValid && status !== 'sending'

  const emailError =
    touched.email && !emailValid ? 'Please enter a valid email.' : null
  const messageError =
    touched.message && !messageValid
      ? 'Please write a message (10+ characters).'
      : null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (status !== 'idle') {
      setStatus('idle')
      setStatusMessage(null)
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSubmit) {
      setTouched({ email: true, message: true })
      return
    }

    setStatus('sending')
    setStatusMessage(null)

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
          setStatus('success')
          setStatusMessage('Message sent! I’ll get back to you soon.')

          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
          setTouched({ email: false, message: false })
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setStatus('error')
          setStatusMessage('Oops — something went wrong. Please try again.')
        }
      );
  };

  return (
    <section
      id="contact"
      aria-label="contact"
      className="bg-gray-950 py-20 sm:py-32 relative"
    >
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-full sm:w-1/2">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact Me!</h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
              {statusMessage && (
                <div
                  className={clsx(
                    'mb-6 rounded-2xl px-4 py-3 text-sm font-medium ring-1',
                    status === 'success'
                      ? 'bg-green-900/30 text-green-300 ring-green-500/30'
                      : status === 'error'
                        ? 'bg-pink-900/30 text-pink-300 ring-pink-500/30'
                        : 'bg-white/5 text-white/70 ring-white/10',
                  )}
                  role={status === 'error' ? 'alert' : undefined}
                >
                  {statusMessage}
                </div>
              )}
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white/80">
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
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-400 ring-1 ring-white/10"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white/80">
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
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-400 ring-1 ring-white/10"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-white/80">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      autoComplete="email"
                      aria-invalid={emailError ? true : undefined}
                      className={clsx(
                        'block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 placeholder:text-white/30 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-400 ring-1 ring-white/10',
                        emailError ? 'outline-pink-400' : 'outline-white/10',
                      )}
                    />
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm font-medium text-pink-400">
                      {emailError}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-white/80">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                      aria-invalid={messageError ? true : undefined}
                      className={clsx(
                        'block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 placeholder:text-white/30 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-400 ring-1 ring-white/10',
                        messageError ? 'outline-pink-400' : 'outline-white/10',
                      )}
                    />
                  </div>
                  {messageError && (
                    <p className="mt-2 text-sm font-medium text-pink-400">
                      {messageError}
                    </p>
                  )}
                </div>

              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={clsx(
                    'block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300',
                    canSubmit
                      ? 'bg-pink-500 hover:bg-pink-400'
                      : 'cursor-not-allowed bg-white/10 text-white/30',
                  )}
                >
                  {status === 'sending' ? 'Sending…' : 'Let’s talk'}
                </button>
                <p className="mt-3 text-xs text-white/40">
                  Tip: add your email + a short message to enable the button.
                </p>
              </div>
            </form>
          </div>

          <div className="w-full sm:w-1/2 flex justify-center">
            <div
              ref={spotlightRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowSpot(true)}
              onMouseLeave={() => setShowSpot(false)}
              className="relative h-[400px] w-[400px] cursor-none overflow-hidden rounded-2xl bg-gray-950"
            >
              {/* Spotlight glow layer — white circle where the mouse is */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: showSpot
                    ? `radial-gradient(circle 100px at ${spotPos.x}px ${spotPos.y}px, rgba(255,255,255,0.85) 0%, transparent 100%)`
                    : 'transparent',
                }}
              />
              {/* Cat image with multiply blend — white in the GIF disappears against the dark bg */}
              <Image
                src={Cat}
                alt="logo"
                width={600}
                height={600}
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              {/* Dark vignette overlay to keep the flashlight feel */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: showSpot
                    ? `radial-gradient(circle 100px at ${spotPos.x}px ${spotPos.y}px, transparent 0%, rgba(0,0,0,0.92) 100%)`
                    : 'rgba(0,0,0,0.95)',
                }}
              />
              {!showSpot && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-white/40 select-none">hover to reveal</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
