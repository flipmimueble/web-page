import type { Metadata } from "next";
import Link from "next/link";
import StickyNav from "../_components/StickyNav";
import ParallaxImage from "../_components/ParallaxImage";
import Reveal from "../_components/Reveal";
import Ficha from "../_components/Ficha";
import { ESTADO_LABELS, getAllPiezas, getPiezaFotoPrincipal } from "../_lib/piezas";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";

export const metadata: Metadata = {
  title: "Muebles | Flipping de muebles",
  description:
    "Todas las piezas restauradas — antes y después, materiales y estado de cada una.",
};

export default function MueblesPage() {
  const piezas = getAllPiezas();

  return (
    <div className="flex flex-1 flex-col">
      <StickyNav whatsappUrl={WHATSAPP_URL} />

      <header className="px-6 pt-16 pb-10 sm:px-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
            Todas las piezas
          </h1>
          <p className="mt-4 max-w-xl text-base text-foreground/70 sm:text-lg">
            Cada mueble pasa por el taller con su propia historia. Acá están
            todas, con su estado y materiales.
          </p>
        </div>
      </header>

      <main className="px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 border-t border-foreground/10 pt-16 sm:grid-cols-2 sm:gap-20">
          {piezas.map((pieza, index) => {
            const foto = getPiezaFotoPrincipal(pieza);
            const rows = [
              { label: "Estado", value: ESTADO_LABELS[pieza.estado] },
            ];
            if (pieza.materiales) {
              rows.push({ label: "Materiales", value: pieza.materiales });
            }

            return (
              <Reveal key={pieza.slug} delay={(index % 2) * 0.05}>
                <Link href={`/muebles/${pieza.slug}/`} className="group block">
                  <figure className="flex flex-col gap-4">
                    {foto ? (
                      <ParallaxImage
                        src={foto}
                        alt={pieza.resumen}
                        sizes="(min-width: 640px) 50vw, 100vw"
                      />
                    ) : null}
                    <figcaption className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-brand-strong sm:text-2xl">
                      {pieza.titulo}
                    </figcaption>
                    <Ficha rows={rows} />
                  </figure>
                </Link>
              </Reveal>
            );
          })}
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
