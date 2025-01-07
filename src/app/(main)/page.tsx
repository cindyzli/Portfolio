import Contact from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import Experience from '@/components/Experience'
import { About } from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
