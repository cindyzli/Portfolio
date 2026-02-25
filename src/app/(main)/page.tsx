import Contact from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import Experience from '@/components/Experience'
import { About } from '@/components/About'

function SectionDivider() {
  return (
    <div className="relative h-px w-full bg-gray-950">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </>
  )
}
