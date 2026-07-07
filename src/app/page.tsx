import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";

export default function Home() {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 4);
  
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 pt-[80px] pb-[100px] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 15% 20%, rgba(192,138,40,.10), transparent 40%), radial-gradient(circle at 85% 80%, rgba(122,31,43,.08), transparent 45%)'
        }}></div>
        
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-11 md:gap-16 items-center">
          <div>
            <div className="eyebrow">Rajputi Poshak · Suits · Sarees — Pali, Rajasthan</div>
            <h1 className="text-[42px] md:text-[56px] leading-[1.08] mt-[14px] mb-5 text-[#7A1F2B] font-bold font-serif">
              Traditions,<br />stitched with <em className="italic text-[#C08A28]">ijjat</em>.
            </h1>
            <p className="text-[17.5px] text-[#4a3f38] max-w-[460px] mb-8 font-light">
              Thikana Poshak brings Pali's finest Rajasthani poshak, suits and sarees — handpicked fabric, honest craftsmanship, and a fit that carries your family's grace forward.
            </p>
            <div className="flex flex-wrap gap-[14px]">
              <a href="https://wa.me/919414817900?text=Namaste%2C%20mujhe%20poshak%20collection%20dekhni%20hai." className="inline-flex items-center justify-center rounded-[2px] bg-[#7A1F2B] px-[22px] py-[11px] text-[14px] font-bold tracking-[0.02em] text-white hover:bg-[#54121B] transition-colors border-[1.5px] border-transparent">
                Enquire on WhatsApp
              </a>
              <Link href="/collection" className="inline-flex items-center justify-center rounded-[2px] bg-transparent px-[22px] py-[11px] text-[14px] font-bold tracking-[0.02em] text-[#7A1F2B] border-[1.5px] border-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white transition-colors">
                View Collection
              </Link>
            </div>
          </div>
          
          <div className="w-full aspect-[4/5] bg-[#7A1F2B] rounded-[200px_200px_8px_8px] p-[14px] shadow-[0_30px_60px_-20px_rgba(84,18,27,0.45)] relative">
            <div className="w-full h-full rounded-[190px_190px_4px_4px] border-2 border-[#E7C784] overflow-hidden flex items-end justify-center relative">
              <Image src="/img/hero-main.jpeg" alt="Thikana Poshak Collection" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#54121B]/70 via-transparent to-transparent pointer-events-none"></div>
              
              <svg className="w-[74%] pb-[8%] relative z-10" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 4 L112 26 L100 20 L88 26 Z" fill="#E7C784"/>
                <circle cx="100" cy="40" r="16" stroke="#E7C784" strokeWidth="1.5"/>
                <path d="M100 30 L100 50 M90 40 L110 40" stroke="#E7C784" strokeWidth="1.5"/>
                <path d="M40 70 Q100 50 160 70" stroke="#E7C784" strokeWidth="1.5" fill="none"/>
                <path d="M20 86 Q100 60 180 86" stroke="#E7C784" strokeWidth="1" fill="none" opacity=".8"/>
              </svg>
              <div className="absolute top-0 left-0 right-0 h-[46%] pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(231,199,132,.25), transparent 60%)' }}></div>
              <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 bg-[#FBF3E7]/95 text-[#7A1F2B] font-serif font-bold text-[15px] px-5 py-2 rounded-[2px] tracking-[0.04em] whitespace-nowrap z-10 shadow-lg">
                Since the heart of Suraj Pole
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Collection */}
      <section className="py-[88px]" id="collections">
        <div className="container">
          <div className="text-center max-w-[640px] mx-auto mb-[56px]">
            <div className="w-[64px] h-[2px] bg-[#C08A28] mx-auto mb-[14px]"></div>
            <div className="eyebrow">The Collection</div>
            <h2 className="text-[38px] my-3 font-serif font-bold text-[#7A1F2B]">Four ways to wear Rajasthan</h2>
            <p className="text-[#5a4d43] text-[15.5px]">From bridal-heavy poshak to everyday festive suits — every piece here is chosen the way it would be for our own ghar.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[26px]">
            {[
              { title: "Pure Poshak", sub: "Bridal & Occasion", img: "/img/pure_poshak.jpeg" },
              { title: "Semi-Pure Poshak", sub: "Festive Wear", img: "/img/semi_pure_poshak.jpeg" },
              { title: "Stitched Poshak", sub: "Ready to Wear", img: "/img/stitched_poshak.jpeg" },
              { title: "Suits & Sarees", sub: "Daily & Festive", img: "/img/suits-sarees.jpeg" }
            ].map((cat, i) => (
              <div key={i} className="bg-[#FFFDF8] border border-[#E4D6BF] rounded-[120px_120px_6px_6px] p-[10px] text-center hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(122,31,43,.28)] transition-all duration-250 group">
                <div className="aspect-[1/1.15] rounded-[110px_110px_4px_4px] mb-4 relative overflow-hidden">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-[21px] mb-1 font-serif font-bold text-[#7A1F2B]">{cat.title}</h3>
                <p className="text-[12.5px] text-[#7a6c60] uppercase tracking-[0.08em] mb-4 font-semibold">{cat.sub}</p>
                <Link href="/collection" className="inline-block pb-[22px] text-[13.5px] font-bold text-[#7A1F2B] border-b border-transparent hover:border-[#7A1F2B] transition-colors">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#1F3B3B] text-[#EFE7DA] py-[96px]" id="story">
        <div className="container grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-[70px] items-center">
          <div className="relative aspect-square border-2 border-[#E7C784]/35 rounded-[6px] flex items-center justify-center bg-[#152a2a]">
            <Image 
              src="/img/ourstory.jpeg" 
              alt="Thikana Poshak Store" 
              fill 
              className="object-cover rounded-[4px]" 
            />
            <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 flex bg-[#C08A28] rounded-[4px] overflow-hidden shadow-[0_20px_40px_-14px_rgba(0,0,0,0.4)] z-10">
              <div className="py-[18px] px-[26px] text-center border-r border-white/35">
                <b className="block font-serif text-[24px] text-white">10+</b>
                <span className="text-[10.5px] uppercase tracking-[0.08em] text-white">Yrs in Pali</span>
              </div>
              <div className="py-[18px] px-[26px] text-center">
                <b className="block font-serif text-[24px] text-white">7 Days</b>
                <span className="text-[10.5px] uppercase tracking-[0.08em] text-white">Open Weekly</span>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow text-[#E7C784]">Our Story</div>
            <h2 className="text-white text-[40px] my-[10px] mb-[22px] font-serif font-bold leading-tight">A shop-front on Mahaveer Marg, a legacy behind it.</h2>
            <p className="text-[#CFC6B8] text-[16px] mb-[18px] max-w-[520px]">
              Thikana Poshak began the way most trusted Rajasthani stores do — one family, one street corner in Suraj Pole, and a promise that every poshak leaving the shop would be worth wearing to someone's biggest day.
            </p>
            <p className="text-[#CFC6B8] text-[16px] mb-[18px] max-w-[520px]">
              Today the same care goes into every suit, saree and stitched poshak we keep — chosen fabric by fabric, fitted the way Pali's women have trusted us to, for years.
            </p>
            <div className="font-serif italic text-[24px] border-l-[3px] border-[#C08A28] pl-[22px] text-white mt-[26px]">
              "Ghar jaisa vishwas, har poshak mein."
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="py-[88px]">
        <div className="container">
          <div className="text-center max-w-[640px] mx-auto mb-[56px]">
            <div className="w-[64px] h-[2px] bg-[#C08A28] mx-auto mb-[14px]"></div>
            <div className="eyebrow">Handpicked</div>
            <h2 className="text-[38px] my-3 font-serif font-bold text-[#7A1F2B]">This week's featured pieces</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
            {featuredProducts.map((prod) => (
              <div key={prod.id} className="bg-[#FFFDF8] border border-[#E4D6BF] rounded-[8px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_18px_34px_-18px_rgba(122,31,43,.3)] transition-all duration-250">
                <div className="aspect-[3/4] relative">
                  <Image src={prod.images[0]} alt={prod.name} fill className="object-cover" />
                  <span className="absolute top-3 left-3 bg-[#7A1F2B] text-white text-[10.5px] font-bold tracking-[0.05em] uppercase px-[10px] py-[5px] rounded-[2px] z-10">
                    Featured
                  </span>
                </div>
                <div className="p-4 md:p-[16px_18px_20px]">
                  <h4 className="font-serif text-[19px] text-[#2B2320] font-bold leading-tight">{prod.name}</h4>
                  <div className="text-[#7A1F2B] font-bold text-[13.5px] my-2">{prod.priceLabel}</div>
                  <a href={`https://wa.me/919414817900?text=${encodeURIComponent(`Hello, I would like to inquire about the ${prod.name}.`)}`} className="flex items-center justify-center gap-2 w-full p-[10px] border-[1.5px] border-[#7A1F2B] rounded-[2px] text-[13px] font-bold text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white transition-colors">
                    Enquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-[88px]">
        <div className="container">
          <div className="text-center max-w-[640px] mx-auto mb-[56px]">
            <div className="w-[64px] h-[2px] bg-[#C08A28] mx-auto mb-[14px]"></div>
            <div className="eyebrow">Kept Word</div>
            <h2 className="text-[38px] my-3 font-serif font-bold text-[#7A1F2B]">What families say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {[
              {
                quote: "Poshak ka fit aur fabric dono bahut acche the — poora parivar khush hua.",
                name: "Smriti Rathore",
                loc: "Pali, Rajasthan"
              },
              {
                quote: "Shaadi ke liye poshak liya tha, quality bahut badhiya nikli. Highly recommended.",
                name: "Anjali Chouhan",
                loc: "Jodhpur, Rajasthan"
              },
              {
                quote: "WhatsApp par turant reply mil gaya aur naapa bhi sahi bataya. Great service.",
                name: "Meena Bhati",
                loc: "Pali, Rajasthan"
              }
            ].map((t, i) => (
              <div key={i} className="bg-[#FFFDF8] border border-[#E4D6BF] rounded-[8px] p-[30px_26px] relative">
                <div className="text-[#C08A28] text-[15px] tracking-[2px] mb-[14px]">★★★★★</div>
                <p className="text-[15px] text-[#4a3f38] mb-[18px] italic font-serif leading-snug">"{t.quote}"</p>
                <div className="font-bold text-[13.5px] text-[#7A1F2B]">{t.name}</div>
                <div className="text-[12px] text-[#8a7c70]">{t.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
