import Layout from "../components/Layout/Layout"
import '../global.styles.css'
import { AppContextProvider } from "../context/Context"

function MyApp({ Component, pageProps }) {
    return (
        <AppContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContextProvider>
    )
}
  
export default MyApp