import { Container } from 'shared/ui/container'

interface IPageDescription {
  pageTitle: string
}

export const PageDescription = (props: IPageDescription) => {
  const { pageTitle } = props

  return (
    <section className='bg-blackSqueeze'>
      <Container className='sm:max-lg:py-12 lg:py-24 text-center'>
        <h3 className='sm:max-md:text-4xl md:max-lg:text-5xl lg:text-6xl text-black font-bold'>{pageTitle}</h3>
      </Container>
    </section>
  )
}
