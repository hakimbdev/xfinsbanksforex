import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "xFins Banks Forex Academy transformed my trading career. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
      name: "Jane Smith",
      text: "The mentorship program provided invaluable insights into forex trading.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      name: "Mike Johnson",
      text: "Thanks to xFins, I now have the confidence to trade in the forex market.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}'s profile`}
                    fill
                    className="rounded-full object-cover"
                    sizes="64px"
                  />
                </div>
                <p className="font-semibold text-xl">{testimonial.name}</p>
              </div>
              <p className="text-lg">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

