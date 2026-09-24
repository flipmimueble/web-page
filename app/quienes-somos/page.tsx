import type { Metadata } from "next";
import StickyNav from "../_components/StickyNav";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";

export const metadata: Metadata = {
  title: "Quiénes somos | Flipping de muebles",
  description:
    "Restauramos muebles con historia en CABA, pieza por pieza, junto a cada persona.",
};

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-1 flex-col">
      <StickyNav whatsappUrl={WHATSAPP_URL} />

      <header className="px-6 pt-16 pb-10 sm:px-10 sm:pt-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
            Quiénes somos
          </h1>
        </div>
      </header>

      <main className="px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <p className="text-lg text-foreground/80 sm:text-xl">
            Restauramos muebles con historia acá en CABA. Cada pieza que
            llega al taller ya vivió algo — golpes, marcas, años de uso — y
            nuestro trabajo es cuidar esa historia mientras le devolvemos las
            ganas de seguir siendo usada.
          </p>
          <p className="text-base text-foreground/70 sm:text-lg">
            Trabajamos mueble por mueble, junto a cada persona que nos
            escribe, para entender qué necesita esa pieza puntual: si hay que
            reforzar la estructura, renovar la terminación, o simplemente
            devolverle brillo a algo que ya estaba bien hecho.
          </p>
          <p className="text-base text-foreground/70 sm:text-lg">
            El resultado siempre es el mismo mueble que ya conocías, con
            historia nueva para seguir formando parte de tu casa.
          </p>

          <div className="mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-fit items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-background transition-colors hover:bg-brand-strong"
            >
              Escribime por WhatsApp
            </a>
          </div>
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
