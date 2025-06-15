import Header from "./components/Header"
import Hero from "./components/Hero"
import Offerings from "./components/Offerings"
import Testimonials from "./components/Testimonials"
import PaymentInfo from "./components/PaymentInfo"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CEO from "./components/CEO"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <CEO />
        <Offerings />
        <Testimonials />
        <PaymentInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

