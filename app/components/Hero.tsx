export default function Hero() {
  return (
    <section
      className="bg-gray-900 text-white py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better text visibility */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to xFins Banks Forex Academy</h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          Master the art of forex trading with our expert mentorship program
        </p>
        <a
          href="#payment"
          className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-200 transition duration-300 inline-block"
        >
          Enroll Now
        </a>
      </div>
    </section>
  )
}

