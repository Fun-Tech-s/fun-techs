import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/fun.css'
import '../styles/medium.css'
import '../styles/small.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
