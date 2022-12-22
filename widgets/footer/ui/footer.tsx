import { Container } from 'shared/ui/container'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mt-auto bg-cobalt'>
      <Container className='text-center'>
        <p className='text-white py-3 sm:max-md:text-sm'>© {currentYear} ООО "Консолидация". Все права защищены.</p>
      </Container>
    </footer>
  )
}
