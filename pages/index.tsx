import { CardList } from 'widgets/card-list'
import { ContactUsButton } from 'shared/ui/contact-us-button'
import { Container } from 'shared/ui/container'
import { AiFillCheckCircle } from 'react-icons/ai'
import Head from 'next/head'
import { additionalBenefitsData, benefitsData } from 'pages-data/homeData'

const Home = () => (
  <>
    <Head>
      <title>Консолидация</title>
    </Head>
    <section className='bg-blackSqueeze'>
      <Container className='sm:max-lg:py-24 lg:py-36 text-center'>
        <h2 className='text-lg text-cobalt font-semibold mb-5'>Компания Консолидация</h2>
        <h3 className='sm:max-md:text-2xl md:max-lg:text-4xl lg:text-5xl text-black font-bold'>
          Мы оказываем <span className='text-dodgerBlue'>Комплекс Бухгалтерских Услуг</span> и
          <span className='text-dodgerBlue'> Консультации</span> Для Вас
        </h3>
        <ContactUsButton className='mt-6' />
      </Container>
    </section>
    <section>
      <Container className='py-24'>
        <CardList items={benefitsData} />
        <div className='mt-24 flex flex-wrap justify-center'>
          <div className='lg:w-[calc(50%-3rem)] sm:max-lg:w-full'>
            <img className='mx-auto' alt='Бухгалтерская Консультация' src='images/analysis.jpg' />
            <img className='mt-5 mx-auto' alt='Улучшение Показателей Отчётности' src='images/diagram.png' />
          </div>
          <div className='lg:w-2/4 lg:ml-12 sm:max-lg:w-full sm:max-lg:mt-8'>
            <h6 className='font-bold mb-2.5 text-black lg:text-4xl sm:max-lg:text-2xl'>
              Работайте с Лучшими <span className='text-dodgerBlue mb-4'>Бухгалтерами</span>
            </h6>
            <div className='font-medium mb-4'>
              <p>
                Компания «Консалидация» предлагает услугу «Бухгалтерское сопровождение бизнеса для ООО и ИП, всех видов
                налогооблажения». Гибкий подход для каждого клиента, минимизация налогового бремени в рамках
                действующего законодательства, сопровождение налоговых запросов.{' '}
              </p>
              <p className='mt-2'>
                Бухгалтерское сопровождение включает организацию документооборота в программе 1С, своевременное
                осуществление платежей в системе Клиент-Банк, начисление заработной платы сотрудникам, учет данных в
                разрезе отдельных показателей и счетов, расчет и уплату налогов, а также ведение всех налоговых и
                бухгалтерских регистров, оформление кадровых документов.
              </p>
              <p className='mt-2'>Наши специалисты работают качественно, оперативно, профессионально.</p>
            </div>
            {additionalBenefitsData.map((benefitsItem) => (
              <div key={benefitsItem} className='flex items-center mb-2'>
                <span>
                  <AiFillCheckCircle className='text-cobalt text-xl' size={22} />
                </span>
                <span className='ml-3'>{benefitsItem}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  </>
)

export default Home
