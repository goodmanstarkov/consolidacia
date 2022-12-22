import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  // <Html lang='ru' style={montserratFont.style}>
  <Html lang='ru'>
    <Head>
      <link rel='apple-touch-icon' sizes='180x180' href='images/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='images/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='images/favicons/favicon-16x16.png' />
      <link rel='mask-icon' href='images/logo.svg' />
      <link rel='manifest' href='images/manifest.json' />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
