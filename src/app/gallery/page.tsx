import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1620011504997-767098495dc9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583391733959-15833934335c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1585465942732-b9e7dfc7bb61?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
            Store Gallery
          </h1>
          <p className="text-lg text-slate-600">
            A glimpse into our store and the beautiful collections we offer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
