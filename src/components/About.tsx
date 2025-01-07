'use client'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import pic1 from 'pocket-ts/src/images/logos/pic1.jpg'
import pic2 from 'pocket-ts/src/images/logos/pic2.jpg'
import pic3 from '@/images/logos/pic3.jpg'
import pic4 from 'pocket-ts/src/images/logos/pic4.jpg'

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [pic1, pic2, pic3, pic4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <CircleBackground color="#f09d90" className="animate-spin-slower" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
          <div className="max-w-md text-center sm:text-left sm:mr-8">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Hello World
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Hey! I&rsquo;m a software engineer from Northern Virginia,
              currently studying at Cornell University. My interests include
              backend development, optimization, machine learning, and quantitative finance.
              Always up for tackling complex problems and making things run smoother (and faster)!
            </p>
          </div>

          <div className="mt-8 sm:mt-0 w-[300px] h-[400px]">
            <Image src={images[currentIndex]} alt="logo" width={300} height={400} className="rounded-md" />
          </div>
        </div>
      </Container>
    </section>



  )
}
