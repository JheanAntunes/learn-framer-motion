import { Button } from '@/components/ui/button'
import Cards from '../../cards'
import SectionProjects from './section-projects'

const SectionSelectProjects = () => {
  return (
    <>
      <SectionProjects>
        <section className="ml-8 flex h-[450px] w-[450px] flex-col justify-between overflow-hidden rounded-3xl border border-solid border-neutral-50 p-8 text-neutral-50">
          <div className="space-y-2">
            <h2 className="relative overflow-hidden font-serif text-6xl text-yellow-400">
              Selected Works
            </h2>
            <p className="w-full max-w-2xl indent-1">
              I`ve played a key role in developing impactful projects. Here`s a
              curated selection showcasing my expertise and the achieved
              results.
            </p>
          </div>
          <Button className="bg-yellow-400 text-2xl uppercase text-neutral-950">
            Contact
          </Button>
        </section>
        <Cards />
      </SectionProjects>
    </>
  )
}
export default SectionSelectProjects
