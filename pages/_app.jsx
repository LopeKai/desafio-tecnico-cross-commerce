import { Toaster } from 'react-hot-toast'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster  position='top-right' /> {/* success message */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
