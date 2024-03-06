import { DataCard, dataCards } from '../data/card'

const Cards = () => {
  return (
    <>
      {dataCards.map((dataCard) => {
        return (
          <Card
            key={dataCard.title + dataCard.technology + dataCard.description}
            data={dataCard}
          />
        )
      })}
    </>
  )
}

export default Cards

export type CardProps = {
  data: DataCard
}

export const Card = ({ data }: CardProps) => {
  const { title, description, technology } = data
  return (
    <section className="h-[450px] w-[450px] space-y-2 rounded-3xl border border-solid border-neutral-50 p-8 text-neutral-50">
      <h1 className="font-serif text-4xl">{title}</h1>
      <p className="indent-1">{description}</p>
      <ul className="list-inside list-disc space-y-2">
        {technology.map((tech) => (
          <li key={tech + title}>{tech}</li>
        ))}
      </ul>
    </section>
  )
}
