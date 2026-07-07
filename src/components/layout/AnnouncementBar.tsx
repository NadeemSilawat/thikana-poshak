import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#54121B] text-[#E7C784] text-[13px] tracking-[0.03em] text-center py-2 px-4">
      Open Daily 10:00 AM – 9:00 PM &nbsp;·&nbsp; Suraj Pole, Pali &nbsp;·&nbsp;{" "}
      <a
        href="tel:+919414817900"
        className="text-white font-semibold border-b border-[#C08A28] hover:text-[#C08A28] transition-colors"
      >
        Call +91 94148 17900
      </a>
    </div>
  );
}
