import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-[90px] bg-[#54121B] text-[#E7DCC9] pt-[50px] pb-[26px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="text-white font-serif text-2xl mb-[14px]">Thikana Poshak</h3>
            <p className="text-[#CBB99B] text-[13.5px] max-w-[320px]">
              Rajputi poshak, suits and sarees from the heart of Suraj Pole, Pali — trusted for the moments that matter.
            </p>
          </div>
          <div>
            <h5 className="text-[#E7C784] text-[13px] uppercase tracking-[0.08em] mb-4 font-bold font-sans">Explore</h5>
            <ul className="space-y-[10px]">
              <li><Link href="/collection" className="text-[#DCCFB8] text-[13.5px] hover:text-white transition-colors">Collection</Link></li>
              <li><Link href="/about" className="text-[#DCCFB8] text-[13.5px] hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="text-[#DCCFB8] text-[13.5px] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#E7C784] text-[13px] uppercase tracking-[0.08em] mb-4 font-bold font-sans">Reach Us</h5>
            <ul className="space-y-[10px]">
              <li><a href="tel:+919414817900" className="text-[#DCCFB8] text-[13.5px] hover:text-white transition-colors">+91 94148 17900</a></li>
              <li><a href="https://wa.me/919414817900" className="text-[#DCCFB8] text-[13.5px] hover:text-white transition-colors">WhatsApp</a></li>
              <li><Link href="/contact" className="text-[#DCCFB8] text-[13.5px] hover:text-white transition-colors">Suraj Pole, Pali</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E7C784]/20 pt-[22px] flex justify-between items-center text-[12.5px] text-[#B3A184] flex-wrap gap-[10px]">
          <span>© {new Date().getFullYear()} Thikana Poshak, Pali. All rights reserved.</span>
          <span>Website by Silawat Tech</span>
        </div>
      </div>
    </footer>
  );
}
