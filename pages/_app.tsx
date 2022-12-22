import 'shared/global.css'
import Head from 'next/head'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import { Montserrat } from '@next/font/google'

/** Шрифт. */
const montserratFont = Montserrat({ subsets: ['latin'] })

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <main className='flex flex-col min-h-full text-primary' style={montserratFont.style}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  </>
)

export default App
