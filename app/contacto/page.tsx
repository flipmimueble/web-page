import type { Metadata } from "next";
import StickyNav from "../_components/StickyNav";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";
const EMAIL = "hola@flipmimueble.com";
const INSTAGRAM_URL = "https://instagram.com/flipmimueble";

export const metadata: Metadata = {
  title: "Contacto | Flipping de muebles",
  description: "Escribinos por WhatsApp, mail o Instagram — hola@flipmimueble.com",
};

export default function ContactoPage() {
  return (
    <div className="flex flex-1 flex-col">
      <StickyNav whatsappUrl={WHATSAPP_URL} />

      <header className="px-6 pt-16 pb-10 sm:px-10 sm:pt-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
            Contacto
          </h1>
          <p className="mt-4 max-w-xl text-base text-foreground/70 sm:text-lg">
            ¿Tenés un mueble con historia? Mandame una foto y vemos qué
            necesita.
          </p>
        </div>
      </header>

      <main className="px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full bg-brand px-6 text-background transition-colors hover:bg-brand-strong"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex h-12 items-center justify-center rounded-full border border-foreground/20 px-6 text-foreground transition-colors hover:bg-foreground/5"
          >
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-foreground/20 px-6 text-foreground transition-colors hover:bg-foreground/5"
          >
            @flipmimueble
          </a>
        </div>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-10 text-center sm:px-10">
        <p className="text-xs text-foreground/70">
          Flipping de muebles · CABA
        </p>
      </footer>
    </div>
  );
}
