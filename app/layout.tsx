import { Montserrat } from '@next/font/google'
import { Header } from 'widgets/header'
import 'shared/global.css'
import { Footer } from 'widgets/footer'

/**
 * Свойства корневого шаблона.
 * @param children Дочерние элементы.
 */
interface IRootLayout {
  children: React.ReactNode
}

/** Шрифт. */
const montserratFont = Montserrat()

/**
 * Корневой шаблон всего приложения.
 * @param props Свойства корневого шаблона.
 * @returns Корневой шаблон.
 */
const RootLayout = (props: IRootLayout) => {
  const { children } = props

  return (
    <html lang='ru' style={montserratFont.style}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='apple-touch-icon' sizes='180x180' href='images/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='images/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='images/favicons/favicon-16x16.png' />
        {/* <link rel='mask-icon' href='images/favicons/safari-pinned-tab.svg' color='#0044a7' /> */}
        <link rel='manifest' href='manifest.json' />
      </head>
      <body className='text-primary'>
        <div className='flex flex-col min-h-full'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
