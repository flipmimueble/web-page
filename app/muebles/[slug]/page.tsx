import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StickyNav from "../../_components/StickyNav";
import ParallaxImage from "../../_components/ParallaxImage";
import Reveal from "../../_components/Reveal";
import Ficha from "../../_components/Ficha";
import { ESTADO_LABELS, getAllPiezas, getPiezaBySlug } from "../../_lib/piezas";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";

export function generateStaticParams() {
  return getAllPiezas().map((pieza) => ({ slug: pieza.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pieza = getPiezaBySlug(slug);

  if (!pieza) {
    return { title: "Pieza no encontrada | Flipping de muebles" };
  }

  const imagen = pieza.fotoDespues ?? pieza.fotoAntes;

  return {
    title: `${pieza.titulo} | Flipping de muebles`,
    description: pieza.resumen,
    openGraph: {
      title: pieza.titulo,
      description: pieza.resumen,
      images: imagen ? [{ url: imagen }] : undefined,
    },
  };
}

export default async function PiezaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pieza = getPiezaBySlug(slug);

  if (!pieza) {
    notFound();
  }

  const rows = [{ label: "Estado", value: ESTADO_LABELS[pieza.estado] }];
  if (pieza.materiales) {
    rows.push({ label: "Materiales", value: pieza.materiales });
  }

  const parrafos = pieza.body
    .split(/\n{2,}/)
    .map((parrafo) => parrafo.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-1 flex-col">
      <StickyNav whatsappUrl={WHATSAPP_URL} />

      <header className="px-6 pt-16 pb-6 sm:px-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/muebles/"
            className="text-sm text-foreground/70 transition-colors hover:text-brand-strong"
          >
            ← Todas las piezas
          </Link>
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
            {pieza.titulo}
          </h1>
        </div>
      </header>

      <main className="px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
            {pieza.fotoAntes ? (
              <Reveal>
                <div className="flex flex-col gap-3">
                  <ParallaxImage
                    src={pieza.fotoAntes}
                    alt={`${pieza.titulo} — antes`}
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <span className="text-sm text-foreground/70">Antes</span>
                </div>
              </Reveal>
            ) : null}
            {pieza.fotoDespues ? (
              <Reveal delay={0.05}>
                <div className="flex flex-col gap-3">
                  <ParallaxImage
                    src={pieza.fotoDespues}
                    alt={`${pieza.titulo} — después`}
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <span className="text-sm text-foreground/70">Después</span>
                </div>
              </Reveal>
            ) : null}
          </div>

          <div className="grid gap-10 sm:grid-cols-[1fr_2fr] sm:items-start">
            <Ficha rows={rows} />

            <div className="flex flex-col gap-6">
              <p className="text-lg text-foreground/80 sm:text-xl">
                {pieza.resumen}
              </p>
              {parrafos.map((parrafo, index) => (
                <p key={index} className="text-base text-foreground/70">
                  {parrafo}
                </p>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-fit items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-background transition-colors hover:bg-brand-strong"
              >
                Me interesa — escribime por WhatsApp
              </a>
            </div>
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
