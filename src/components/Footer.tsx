import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import Logo from '@/images/logos/totallogo.svg'


export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <Link href="/" aria-label="Home">
            <Image src={Logo} alt="logo" width="80" height="80" />
          </Link>
          <nav className="mt-11 flex gap-8">
            <NavLinks />
          </nav>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">

            &copy; Cindy Li {new Date().getFullYear()}. All rights reserved.
          </p>

        </div>
      </Container>
    </footer>
  )
}
