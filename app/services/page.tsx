import { Container } from 'shared/ui/container'
import { CardList } from 'widgets/card-list'
import { servicesListData } from './data'

const Services = () => (
  <>
    <section className='bg-blackSqueeze'>
      <Container className='sm:max-lg:py-12 lg:py-24 text-center'>
        <h3 className='sm:max-md:text-4xl md:max-lg:text-5xl lg:text-6xl text-black font-bold'>Услуги</h3>
      </Container>
    </section>
    <section>
      <Container className='py-24'>
        <section className='flex mb-14'>
          <div className='w-3/6 border-r border-solid border-silver'>
            <p className='text-cobalt text-lg font-semibold'>A General Set Of</p>
            <h4 className='text-5xl font-bold text-black'>
              Our Area of <span className='text-dodgerBlue'>Services</span>
            </h4>
          </div>
          <div className='w-3/6 pl-7'>
            Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
          </div>
        </section>
        <section>
          <CardList items={servicesListData} />
        </section>
      </Container>
    </section>
  </>
)

export default Services
