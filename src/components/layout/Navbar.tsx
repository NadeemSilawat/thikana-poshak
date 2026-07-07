import Link from 'next/link';
import { Menu, Phone, ShoppingBag } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E4D6BF] bg-[#FBF3E7]/92 backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-serif text-[28px] font-bold tracking-[0.02em] text-[#7A1F2B]">
            Thikana <span className="text-[#C08A28]">Poshak</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {["Poshak", "Suits", "Sarees"].map((item) => (
            <Link 
              key={item} 
              href={`/collection/${item.toLowerCase()}`} 
              className="relative text-[14.5px] font-semibold text-[#2B2320] py-1 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C08A28] hover:after:w-full after:transition-all after:duration-250"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="/about" 
            className="relative text-[14.5px] font-semibold text-[#2B2320] py-1 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C08A28] hover:after:w-full after:transition-all after:duration-250"
          >
            Our Story
          </Link>
          <Link 
            href="/contact" 
            className="relative text-[14.5px] font-semibold text-[#2B2320] py-1 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C08A28] hover:after:w-full after:transition-all after:duration-250"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://wa.me/919414817900?text=Namaste%2C%20mujhe%20aapke%20poshak%20collection%20ke%20baare%20mein%20jaankari%20chahiye."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[2px] bg-[#7A1F2B] px-[22px] py-[11px] text-[14px] font-bold tracking-[0.02em] text-white hover:bg-[#54121B] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" className="text-[#7A1F2B]">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
