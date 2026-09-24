import Link from "next/link";
import StickyNav from "./_components/StickyNav";
import ParallaxImage from "./_components/ParallaxImage";
import Reveal from "./_components/Reveal";
import Ficha from "./_components/Ficha";
import { ESTADO_LABELS, getAllPiezas, getPiezaFotoPrincipal } from "./_lib/piezas";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";

const PASOS = [
  {
    titulo: "Mandame una foto",
    texto: "Por WhatsApp o por DM en Instagram, contame qué mueble tenés.",
  },
  {
    titulo: "Coordinamos",
    texto: "Vemos qué necesita, cómo lo vamos a restaurar y los tiempos.",
  },
  {
    titulo: "Tu mueble, con historia nueva",
    texto:
      "Lo restauro con cariño y te lo devuelvo listo para volver a usarse.",
  },
];

export default function Home() {
  const tallerPiezas = getAllPiezas().slice(0, 3);

  return (
    <div className="flex flex-1 flex-col">
      <StickyNav whatsappUrl={WHATSAPP_URL} />

      {/* HERO */}
      <header className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-10 pb-10 sm:px-10">
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-6xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            FLIPPING
            <br />
            <span className="sm:ml-16">DE MUEBLES</span>
          </h1>

          <div className="flex flex-col gap-6 sm:ml-24 sm:max-w-lg">
            <p className="max-w-md text-lg text-foreground/80 sm:text-xl">
              🪑 Restauro muebles con historia · CABA
            </p>
            <p className="max-w-md text-base text-foreground/70">
              Mandame una foto por DM y vemos ✉️
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-fit items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-background transition-colors hover:bg-brand-strong"
            >
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* MANIFIESTO */}
        <section className="px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="sr-only">Manifiesto</h2>
              <p className="font-serif text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
                Restauro muebles con historia. Cada pieza llega con marcas,
                golpes y años encima — y sale con una historia nueva para
                seguir usándose.
              </p>
            </Reveal>
          </div>
        </section>

        {/* EL TALLER */}
        <section className="py-24 sm:py-32">
          <h2 className="mx-auto mb-12 max-w-6xl px-6 font-serif text-2xl font-semibold text-foreground sm:px-10 sm:text-3xl">
            El taller
          </h2>

          <div className="flex flex-col gap-20 sm:gap-32">
            {tallerPiezas.map((pieza, index) => {
              const foto = getPiezaFotoPrincipal(pieza);
              const rows = [
                { label: "Estado", value: ESTADO_LABELS[pieza.estado] },
              ];
              if (pieza.materiales) {
                rows.push({ label: "Materiales", value: pieza.materiales });
              }

              return (
                <Reveal key={pieza.slug}>
                  <figure
                    className={`flex flex-col gap-6 sm:gap-10 ${
                      index % 2 === 1
                        ? "sm:flex-row-reverse"
                        : "sm:flex-row"
                    } sm:items-end`}
                  >
                    <div className="w-full sm:w-2/3">
                      {foto ? (
                        <ParallaxImage
                          src={foto}
                          alt={pieza.resumen}
                          sizes="(min-width: 640px) 66vw, 100vw"
                        />
                      ) : null}
                    </div>
                    <div className="w-full px-6 sm:w-1/3 sm:px-0">
                      <p className="font-serif text-xl font-semibold text-foreground">
                        {pieza.titulo}
                      </p>
                      <Ficha rows={rows} className="mt-3" />
                      <figcaption className="mt-4 text-sm text-foreground/70 sm:text-base">
                        {pieza.resumen}
                      </figcaption>
                    </div>
                  </figure>
                </Reveal>
              );
            })}
          </div>

          <div className="mx-auto mt-16 max-w-6xl px-6 sm:px-10">
            <Link
              href="/muebles/"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-brand-strong"
            >
              Ver productos →
            </Link>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Cómo funciona
            </h2>
            <ol className="flex flex-col">
              {PASOS.map((paso, index) => (
                <Reveal key={paso.titulo} delay={index * 0.1} as="li">
                  <div className="flex items-start gap-6 border-t border-foreground/20 py-8 sm:gap-10">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                        {paso.titulo}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm text-foreground/70 sm:text-base">
                        {paso.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
                ¿Tenés un mueble con historia? Hablemos.
              </h2>
            </Reveal>
            <div className="mt-12">
              <Link
                href="/contacto/"
                className="flex h-12 w-fit items-center justify-center rounded-full bg-brand px-6 text-base font-semibold text-background transition-colors hover:bg-brand-strong"
              >
                Ir a contacto →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 px-6 py-10 text-center sm:px-10">
        <p className="text-xs text-foreground/70">
          Flipping de muebles · CABA
        </p>
      </footer>
    </div>
  );
}
