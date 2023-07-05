import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/paymentCard.css'
import { AuthProvider } from 'contexts/AuthContext'
import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
