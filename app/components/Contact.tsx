import { FaYoutube, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <a
            href="https://www.youtube.com/@xfinsbanksforexacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-black hover:text-gray-700 text-2xl"
          >
            <FaYoutube className="text-5xl mr-4" />
            <span>YouTube Channel</span>
          </a>
          <a href="https://wa.me/2348062558567" className="flex items-center text-black hover:text-gray-700 text-2xl">
            <FaWhatsapp className="text-5xl mr-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

