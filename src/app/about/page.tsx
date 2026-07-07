import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1605918731174-8b6f35b2e3f4?auto=format&fit=crop&q=80&w=1200"
              alt="Thikana Poshak Store"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider uppercase mb-2">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900">
              Preserving Royal Traditions
            </h1>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Located in the heart of Pali, Rajasthan, Thikana Poshak is more than just a store; it is a celebration of our rich cultural heritage. For years, we have been a trusted destination for families seeking authentic traditional wear.
              </p>
              <p>
                We specialize in bridal poshak, intricately designed suits, and elegant sarees. Every piece in our collection is thoughtfully curated to reflect the vibrant colors and exquisite craftsmanship that Rajasthan is famous for.
              </p>
              <p>
                Whether you are preparing for a royal wedding or a festive celebration, our team is dedicated to helping you find the perfect attire that makes you feel majestic.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-8 border-t mt-8">
              <div>
                <h3 className="text-3xl font-bold font-serif text-primary mb-2">10+</h3>
                <p className="text-slate-600 font-medium">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold font-serif text-primary mb-2">5000+</h3>
                <p className="text-slate-600 font-medium">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
