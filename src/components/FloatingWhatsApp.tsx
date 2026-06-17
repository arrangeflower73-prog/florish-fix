import { MessageCircle, Phone } from "lucide-react";

const PHONE = "+918293982827";
const WHATSAPP = "https://wa.me/918293982827";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col gap-3">
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A07830] text-white shadow-[0_12px_30px_-6px_rgba(201,168,76,0.6)] hover:scale-110 transition-transform"
      >
        <Phone className="size-7" />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform animate-[pulse_2.5s_ease-in-out_infinite]"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}