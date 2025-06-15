import Image from "next/image"

export default function Offerings() {
  const offerings = [
    {
      title: "Beginner Course",
      description: "Learn the basics of forex trading",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
    },
    {
      title: "Advanced Strategies",
      description: "Master complex trading techniques",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    },
    {
      title: "One-on-One Mentorship",
      description: "Personalized guidance from expert traders",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    },
    {
      title: "Live Trading Sessions",
      description: "Watch and learn from real-time trades",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80",
    },
  ]

  return (
    <section id="offerings" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src={offering.image || "/placeholder.svg"}
                  alt={offering.title}
                  fill
                  className="rounded object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{offering.title}</h3>
              <p className="text-lg">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

