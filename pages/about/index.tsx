import { Container } from 'shared/ui/container'
import { PageDescription } from 'widgets/page-description'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import { YandexMap } from 'widgets/map'
import { Feedback } from 'widgets/feedback'
import Head from 'next/head'

const About = () => (
  <>
    <Head>
      <title>О Нас</title>
    </Head>
    <PageDescription pageTitle='О Нас' />
    <section>
      <Container className='py-24 flex flex-wrap justify-center'>
        <div className='lg:w-[calc(50%-2rem)] sm:max-lg:w-full'>
          <img className='mx-auto rounded-2xl' alt='Бухгалтерские Услуги' src='images/about-us.jpg' />
        </div>
        <div className='lg:w-2/4 lg:ml-8 sm:max-lg:w-full sm:max-lg:mt-8'>
          <h2 className='text-cobalt text-lg font-semibold mb-3'>Введение</h2>
          <h3 className='text-black md:text-5xl sm:max-md:text-3xl font-bold mb-3'>
            О Нашей <span className='text-dodgerBlue'>Работе</span>
          </h3>
          <p className='mb-3'>
            Компания «Консолидация» оказывает услуги по восстановлению и исправлению бухгалтерского учета. Может
            возникнуть такая ситуация, что база учета потеряна, документация потеряна. Необходимо оперативно произвести
            восстановление отчетности, восстановление первичной документации. Для этого производится ряд мероприятий и в
            максимально короткие сроки наладить учет организации.
          </p>
          <p>
            Так же неправильные данные первичной документации будут способствовать возникновению новых ошибок. Ошибки
            провоцируют нарушения, и могут привести к штрафам. Мы оперативно исправляем отчетность , находящаяся в любом
            состоянии максимально короткие сроки.
          </p>
        </div>
      </Container>
    </section>
    <section className='bg-blackSqueeze'>
      <Container className='py-24 flex flex-wrap justify-center'>
        <div className='lg:w-[calc(50%-2rem)] sm:max-lg:w-full'>
          <p className='text-black md:text-5xl sm:max-md:text-3xl font-bold mb-3'>
            Как Нас <span className='text-dodgerBlue'>Найти</span>
          </p>
          <div className='text-cobalt font-medium text-lg'>
            <p className='mb-3'>
              <span className='text-black font-semibold'>Адрес:</span> Московская область, городской округ Пушкинский,
              г. Ивантееевка, ул. Хлебозаводская, д. 43, помещение 2.
            </p>
            <p className='mb-3'>
              <span className='text-black font-semibold'>Как пройти:</span> Здание "Почта России", от главного входа
              повернуть направо, офис с вывеской "Бухгалтерские услуги".
            </p>
            <p className='mb-3'>
              <span className='text-black font-semibold'>Режим работы:</span> пн-пт с 9:00 до 18:00, обеденный перерыв с
              13:00 до 14:00
            </p>
            <div className='mb-3'>
              <Link href='mailto:help@consolidacia.ru' className='inline-block'>
                <div className='flex items-center text-cobalt hover:opacity-70 active:opacity-70'>
                  <FiMail size={20} />
                  <span className='ml-3'>help@consolidacia.ru</span>
                </div>
              </Link>
            </div>
            <div>
              <Link href='tel:+74999645683' className='inline-block'>
                <div className='flex items-center text-cobalt hover:opacity-70 active:opacity-70'>
                  <BsTelephone size={18} />
                  <span className='ml-3'>+7 499 964 56 83</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='lg:w-2/4 sm:max-lg:w-full lg:ml-8 sm:max-lg:mt-8'>
          <YandexMap />
        </div>
      </Container>
    </section>
    <section>
      <Container className='py-24 flex flex-wrap justify-center'>
        <div className='lg:w-[calc(50%-1rem)] sm:max-lg:w-full sm:max-lg:hidden'>
          <img className='mx-auto rounded-2xl' alt='Обратная связь' src='images/feedback.jpg' />
        </div>
        <div className='lg:w-2/4 lg:ml-4 sm:max-lg:w-full sm:max-lg:mt-8'>
          <Feedback className='h-full' />
        </div>
      </Container>
    </section>
  </>
)

export default About
