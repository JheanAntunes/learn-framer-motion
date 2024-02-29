import { ImagesSliderDemo } from '@/components/aceternity/demo/image-slider-demo'
import { Button } from '@/components/ui/button'

const PageAceternityExamples = () => {
  return (
    <main className="h-svh w-svw">
      {/* <ThreeDCardDemo /> */}
      {/* <SparklesPreview /> */}

      <div className="space-y-1">
        {/* Header */}
        <h1 className="font-serif text-4xl text-white">Produto</h1>
        <p className="font-sans text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          possimus, cumque voluptatem facere suscipit quo pariatur aliquid, in
          ratione, assumenda quas aliquam impedit! Nisi consectetur voluptatem
          animi mollitia aliquam rerum!
        </p>
      </div>
      <div className="flex items-center">
        {/* Body */}
        <Button>Comprar Produto</Button>
      </div>
      <div className="mb-8">
        <ImagesSliderDemo />
      </div>
    </main>
  )
}

export default PageAceternityExamples
