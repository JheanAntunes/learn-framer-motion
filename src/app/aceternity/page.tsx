import { TextGenerateEffect } from '@/components/aceternity/ui/text-generate-effect'
import { TracingBeam } from '@/components/aceternity/ui/tracing-beam'
import { TypewriterEffectSmooth } from '@/components/aceternity/ui/typewriter-effect'

const PageAceternityExamples = () => {
  const wordsInitial =
    'Olá, Sou Jhean que está na jornada de desenvolvedor front-end'
  const wordsTypeEffect = [
    {
      text: 'Meus'
    },
    {
      text: 'Projetos'
    }
  ]
  return (
    <main className="overflow-x-hidden">
      {/* <ThreeDCardDemo /> */}
      {/* <SparklesPreview /> */}
      {/* <BackgroundBoxesDemo /> */}
      <TracingBeam className="px-8">
        <section className="flex h-svh w-svw items-center justify-center">
          <TextGenerateEffect words={wordsInitial} />
        </section>
        <section
          id="#project"
          className="flex h-svh w-svw items-center justify-center"
        >
          <TypewriterEffectSmooth words={wordsTypeEffect} />
        </section>
      </TracingBeam>
    </main>
  )
}

export default PageAceternityExamples
