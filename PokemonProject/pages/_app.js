import Layout from "../components/Layout/Layout"
import '../global.styles.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
  
export default MyApp