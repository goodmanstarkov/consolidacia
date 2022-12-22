import { ContactUsButton } from 'shared/ui/contact-us-button'
import { Container } from 'shared/ui/container'
import { CardList } from 'widgets/card-list'
import { PageDescription } from 'widgets/page-description'
import Head from 'next/head'
import { servicesListData } from 'pages-data/servicesData'

const Services = () => (
  <>
    <Head>
      <title>Услуги</title>
    </Head>
    <PageDescription pageTitle='Услуги' />
    <section>
      <Container className='py-24'>
        <section className='flex mb-14'>
          <div className='w-3/6 border-r border-solid border-silver pr-7'>
            <p className='text-cobalt text-lg font-semibold'>Общий набор</p>
            <h4 className='sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black'>
              Наших Сфер <span className='text-dodgerBlue'>Услуг</span>
            </h4>
          </div>
          <div className='w-3/6 pl-7'>
            Компания «Консолидация» оказывает комплекс услуг по сопровождению бухгалтерского учета для малого и среднего
            бизнеса, по всем видам систем налогообложения.
          </div>
        </section>
        <section>
          <CardList items={servicesListData} />
        </section>
      </Container>
    </section>
    <section className='bg-blackSqueeze'>
      <Container className='sm:max-lg:py-12 lg:py-24 text-center'>
        <h3 className='sm:max-md:text-xl md:max-lg:text-2xl lg:text-4xl text-black font-bold text-center'>
          Ваш источник для надёжных <br /> Бухгалтерских услуг
        </h3>
        <ContactUsButton className='mt-6' />
      </Container>
    </section>
  </>
)

export default Services
