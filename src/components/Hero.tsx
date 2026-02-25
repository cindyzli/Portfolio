import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import Cat from '@/images/logos/cat.gif'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.15"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f09d90" />
            <stop offset="1" stopColor="#f09d90" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.15"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f09d90" />
            <stop offset="1" stopColor="#f09d90" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function LinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#f09d90]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    </span>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-gray-950 py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-7xl font-extrabold tracking-tighter sm:text-8xl lg:text-9xl">
              <span
                className="inline-block bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,1) 40%, rgba(240,157,144,0.9) 50%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.7) 80%, rgba(255,255,255,0.3) 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
                }}
              >
                Cindy Li
              </span>
            </h1>
            <p className="mt-8 text-xl font-light tracking-wide sm:text-2xl">
              <span className="text-white/40">Thanks for checking out my page</span>
              <span className="mx-2 text-white/20">&mdash;</span>
              <span
                className="bg-gradient-to-r from-pink-300 via-white to-pink-300 bg-clip-text text-transparent"
              >
                hope you find something cool
              </span>
              <span className="text-white/40"> :)</span>
            </p>
            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/cindy-li-569a30187/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition-all duration-300 hover:bg-white/10 hover:ring-white/30 hover:shadow-[0_0_30px_rgba(240,157,144,0.2)]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/0 via-pink-400/10 to-pink-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <LinkedIn />
                <span className="relative">Connect with me!</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/80">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-white/[0.04] blur-3xl" />
              <Image
                src={Cat}
                alt="logo"
                width={600}
                height={600}
                className="relative drop-shadow-[0_0_50px_rgba(255,255,255,0.08)]"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
