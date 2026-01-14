import '@/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-[#f7f5f2] text-gray-800 overflow-x-hidden">

     <section className="relative h-[85vh] flex items-center">
  <Image
    src="/wedding/weddingX.jpg"
    alt="Luxury Wedding Decor"
    fill
    priority
    className="object-cover object-[50%_30%]"
  />
  <div className="absolute inset-0 bg-black/55" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
    <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
      Floral Design
    </h1>
    <p className="text-xl md:text-2xl italic mb-8">
      “Where Every Bloom Tells Your Love Story”
    </p>

    <Link
      href="/contact"
      className="inline-block bg-[#c6a062] text-black px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#b59552] transition"
    >
      Book a Consultation
    </Link>
  </div>
</section>


      {/* ================= INTRO ================= */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Luxury Wedding Decor & Design in New York & New Jersey
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          At Elegantize, we believe your wedding should feel as extraordinary as your love story.
          Every couple is unique — and so should be their wedding décor.
        </p>
      </section>

     {/* ================= FEATURED ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-12">
      Also Featured In
    </p>

    <div className="grid md:grid-cols-3 gap-16 place-items-center">
      
      <div className="relative w-65 h-45">
  <Image
    src="/homepage/home1.jpeg"
    alt="Maharani Weddings"
    fill
    className="object-cover rounded-lg"
  />
</div>

<div className="relative w-65 h-45">
  <Image
    src="/homepage/home1.jpg"
    alt="Wezoree"
    fill
    className="object-cover rounded-lg"
  />
</div>

<div className="relative w-65 h-45">
  <Image
    src="/homepage/home4.jpg"
    alt="WeddingWire"
    fill
    className="object-cover rounded-lg"
  />
</div>

    </div>
  </div>
</section>


      {/* ================= PORTFOLIO (VIDEO FIXED) ================= */}
      <section className="py-24 bg-[#111] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-6">
            Real Weddings. Real Experiences.
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12">
            Our portfolio features real couples and real celebrations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative h-64 overflow-hidden bg-black rounded"
              >
                <video
                  src="/weddingA.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="text-sm uppercase tracking-widest text-white">
                    Play Video
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-24 bg-[#f7f5f2]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-serif mb-12 text-center">
      Our Signature Wedding Decor Services
    </h2>

    <div className="grid md:grid-cols-4 gap-10">
      {[
        {
          title: "Floral Design",
          image: "/homepage/home25.jpg",
        },
        {
          title: "Ceiling Design",
          image: "/wedding/home23.jpg",
        },
        {
          title: "Centerpiece Design",
          image: "/homepage/home24.jpg",
        },
        {
          title: "Vinyl Floor Wraps",
          image: "/homepage/home11.jpg",
        },
        {
          title: "Ceremony Decor",
          image: "/homepage/home21.jpeg",
        },
        {
          title: "Draping Service",
          image: "/homepage/home19.jpg",
        },
        {
          title: "Mandap Design",
          image: "/homepage/home22.jpg", // use mandap-specific image if available
        },
        {
          title: "Stage Design",
          image: "/homepage/home18.jpg",
        },
      ].map((service) => (
        <div key={service.title} className="text-center">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-serif text-lg">{service.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-[#111] text-white text-center">
        <h2 className="text-4xl font-serif mb-6">
          Ready to Design Your Day?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Your wedding deserves unforgettable beauty.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#c6a062] text-black px-10 py-4 font-semibold tracking-wide hover:bg-[#b59552] transition"
        >
          Book a Free Consultation
        </Link>
      </section>

    </main>
  )
}
