import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FixedCta() {
  const phoneNumber = "212679186173";
  const message = encodeURIComponent(
    "Hello Mohammed, I saw your portfolio and I would like to discuss a potential collaboration."
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl animate-bounce-slow">
        <MessageCircle className="text-white w-6 h-6" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
        Let’s talk on WhatsApp
      </span>
    </Link>
  );
}
