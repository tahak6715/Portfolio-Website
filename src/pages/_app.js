import '../../src/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: ["--font-mont"]
})

export default function App({ Component, pageProps }) {

   return(
    <main className={`${montserrat.variable} font-mont bg-light w-100 min-h-screen` }>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>

    </main>
    
   ) 
}