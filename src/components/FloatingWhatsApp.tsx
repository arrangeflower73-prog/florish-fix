import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[80] grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}