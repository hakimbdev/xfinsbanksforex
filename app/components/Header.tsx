import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20(11)-4tgVe7p0NGEzyKh8jasoYJaoZCY9WN.jpeg"
            alt="xFins Banks Forex Academy Logo"
            width={60}
            height={60}
          />
          <h1 className="text-2xl md:text-3xl font-bold ml-4"></h1>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li>
              <Link href="#offerings" className="text-lg hover:underline">
                Offerings
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-lg hover:underline">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#payment" className="text-lg hover:underline">
                Payment
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-lg hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

