import Image from "next/image"

export default function CEO() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our CEO</h2>
          <div className="flex flex-col items-center">
            <div className="mb-8 relative w-64 h-64 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg"
                alt="CEO of xFins Banks Forex Academy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Abdulhakim Ahmad</h3>
            <p className="text-xl text-gray-600 mb-6">CEO | Quant Trader | CIF</p>
            <p className="text-lg text-gray-700 max-w-2xl">
              With years of experience in forex trading and a passion for education, our CEO leads xFins Banks Forex
              Academy with a vision to empower traders worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

