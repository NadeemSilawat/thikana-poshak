import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-[88px] pb-12">
      <div className="container">
        <div className="text-center max-w-[640px] mx-auto mb-[56px]">
          <div className="w-[64px] h-[2px] bg-[#C08A28] mx-auto mb-[14px]"></div>
          <div className="eyebrow">Visit or Ask</div>
          <h2 className="text-[38px] my-3 font-serif font-bold text-[#7A1F2B]">Find us in Suraj Pole</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          <div className="bg-[#FFFDF8] border border-[#E4D6BF] rounded-[8px] p-[34px]">
            <div className="flex gap-[16px] mb-[22px]">
              <div className="w-[42px] h-[42px] rounded-full bg-[#7A1F2B] text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] mb-[3px] text-[#2B2320] font-sans font-bold">Address</h4>
                <p className="text-[14px] text-[#5a4d43]">Shiv Gori Complex, Mahaveer Marg, Suraj Pole, Pali, Rajasthan 306401</p>
              </div>
            </div>

            <div className="flex gap-[16px] mb-[22px]">
              <div className="w-[42px] h-[42px] rounded-full bg-[#7A1F2B] text-white flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] mb-[3px] text-[#2B2320] font-sans font-bold">Phone</h4>
                <a href="tel:+919414817900" className="text-[14px] text-[#5a4d43] hover:text-[#7A1F2B]">+91 94148 17900</a>
              </div>
            </div>

            <div className="flex gap-[16px] mb-[22px]">
              <div className="w-[42px] h-[42px] rounded-full bg-[#7A1F2B] text-white flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[15px] mb-[3px] text-[#2B2320] font-sans font-bold">Hours</h4>
                <p className="text-[14px] text-[#5a4d43]">Open Daily · 10:00 AM – 9:00 PM</p>
              </div>
            </div>

            <a 
              href="https://wa.me/919414817900?text=Namaste%2C%20store%20visit%20se%20pehle%20kuch%20poochna%20tha." 
              className="flex items-center justify-center gap-2 w-full mt-6 rounded-[2px] bg-[#7A1F2B] px-[22px] py-[11px] text-[14px] font-bold tracking-[0.02em] text-white hover:bg-[#54121B] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message on WhatsApp
            </a>
          </div>

          <div className="rounded-[8px] overflow-hidden border border-[#E4D6BF] aspect-[4/3]">
            <iframe 
              src="https://www.google.com/maps?q=Thikana+Poshak,+Shiv+Gori+Complex,+Mahaveer+Marg,+Suraj+Pole,+Pali,+Rajasthan&output=embed" 
              loading="lazy"
              className="w-full h-full border-0"
              title="Thikana Poshak Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
