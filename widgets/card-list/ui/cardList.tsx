import { Card, ICard } from 'shared/ui/cards/card'

interface ICardList {
  items: ICard[]
}

export const CardList = (props: ICardList) => {
  const { items } = props

  return (
    <section className='flex flex-wrap lg:-mx-4 -mt-8'>
      {items.map((item, idx) => (
        <Card key={idx} className='lg:mx-4 sm:max-lg:w-full mt-8 lg:w-[calc(33.333333%-2rem)]' {...item} />
      ))}
    </section>
  )
}
