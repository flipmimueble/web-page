import mesita from "./_assets/fotos/mesita-antes-despues.jpg";
import procesoSilla from "./_assets/fotos/proceso-silla-pintando.jpg";
import sillaAntes from "./_assets/fotos/silla-antes.jpg";
import StickyNav from "./_components/StickyNav";
import ParallaxImage from "./_components/ParallaxImage";
import Reveal from "./_components/Reveal";
import Ficha from "./_components/Ficha";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";
const EMAIL = "hola@flipmimueble.com";
const INSTAGRAM_URL = "https://instagram.com/flipmimueble";

const TALLER_PIEZAS = [
  {
    src: mesita,
    alt: "Mesita de pino antes y después de la restauración, pintada de blanco con manija dorada y patas con puntas en borravino",
    numero: "01",
    pieza: "Mesita de luz",
    detalle: "Pino, blanco + borravino",
    caption:
      "Mesita de pino restaurada en blanco, con detalle en borravino y manija dorada.",
    // Pre-designed antes/después composite (with baked-in text) — keep its
    // natural portrait ratio instead of the wide crop used for plain photos.
    aspectClassName: "aspect-[3/4]",
  },
  {
    src: procesoSilla,
    alt: "Pincel y frasco de pintura junto al respaldo de una silla de madera, con uno de los barrotes ya pintado en borravino y el resto sin pintar, planta de fondo",
    numero: "02",
    pieza: "Silla — proceso",
    detalle: "Pintura a mano, barrote a barrote",
    caption: "Pintando a mano los barrotes de una silla, en el taller.",
  },
  {
    src: sillaAntes,
    alt: "Silla antigua con pintura blanca descascarada y asiento de madera desgastado, vista desde arriba, antes de restaurar",
    numero: "03",
    pieza: "Silla — antes",
    detalle: "Estado de ingreso",
    caption: "Antes de restaurar: una silla que llegó con años encima.",
  },
];

const PASOS = [
  {
    numero: "01",
    titulo: "Mandame una foto",
    texto: "Por WhatsApp o por DM en Instagram, contame qué mueble tenés.",
  },
  {
    numero: "02",
    titulo: "Coordinamos",
    texto: "Vemos qué necesita, cómo lo vamos a restaurar y los tiempos.",
  },
  {
    numero: "03",
    titulo: "Tu mueble, con historia nueva",
    texto:
      "Lo restauro con cariño y te lo devuelvo listo para volver a usarse.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <StickyNav whatsappUrl={WHATSAPP_URL} />

      {/* 01 HERO */}
      <header className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pt-10 pb-10 sm:px-10">
        <div className="font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase">
          Ficha de ingreso — 01
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-[15vw] leading-[0.9] font-semibold tracking-tighter text-foreground sm:text-[9vw] lg:text-[7.5rem]">
            FLIPPING
            <br />
            <span className="ml-[6vw] sm:ml-24">DE MUEBLES</span>
          </h1>

          <div className="flex flex-col gap-6 sm:ml-24 sm:max-w-lg">
            <div className="border-t border-foreground/20 pt-3 font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase">
              CABA —— Restauración de muebles
            </div>
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
              className="flex h-14 w-fit items-center justify-center rounded-full bg-accent-strong px-8 text-base font-semibold text-background shadow-lg shadow-accent/20 transition-colors hover:brightness-90"
            >
              Escribime por WhatsApp
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase">
          <span className="h-8 w-px motion-safe:animate-pulse bg-foreground/30" />
          Scroll
        </div>
      </header>

      <main>
        {/* 02 MANIFIESTO */}
        <section className="px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[auto_1fr]">
            <div
              aria-hidden="true"
              className="font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase"
            >
              02 — Manifiesto
            </div>
            <Reveal>
              <h2 className="sr-only">Manifiesto</h2>
              <p className="max-w-3xl font-serif text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
                Restauro muebles con historia. Cada pieza llega con marcas,
                golpes y años encima — y sale con una historia nueva para
                seguir usándose.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 EL TALLER */}
        <section className="py-24 sm:py-32">
          <h2 className="mx-auto mb-12 max-w-6xl px-6 font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase sm:px-10">
            <span aria-hidden="true">03 — </span>El taller
          </h2>

          <div className="flex flex-col gap-20 sm:gap-32">
            {TALLER_PIEZAS.map((pieza, index) => (
              <Reveal key={pieza.numero}>
                <figure
                  className={`flex flex-col gap-6 sm:gap-10 ${
                    index % 2 === 1
                      ? "sm:flex-row-reverse"
                      : "sm:flex-row"
                  } sm:items-end`}
                >
                  <div className="w-full sm:w-2/3">
                    <ParallaxImage
                      src={pieza.src}
                      alt={pieza.alt}
                      sizes="(min-width: 640px) 66vw, 100vw"
                      aspectClassName={pieza.aspectClassName}
                    />
                  </div>
                  <div className="w-full px-6 sm:w-1/3 sm:px-0">
                    <Ficha
                      title={pieza.numero}
                      rows={[
                        { label: "Pieza", value: pieza.pieza },
                        { label: "Detalle", value: pieza.detalle },
                      ]}
                    />
                    <figcaption className="mt-4 text-sm text-foreground/70 sm:text-base">
                      {pieza.caption}
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 04 CÓMO FUNCIONA */}
        <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase">
              <span aria-hidden="true">04 — </span>Cómo funciona
            </h2>
            <ol className="flex flex-col">
              {PASOS.map((paso, index) => (
                <Reveal key={paso.numero} delay={index * 0.1} as="li">
                  <div className="grid grid-cols-[3.5rem_1fr] items-start gap-6 border-t border-foreground/20 py-8 sm:grid-cols-[6rem_1fr] sm:gap-10">
                    <span className="font-mono text-xl text-foreground/70 sm:text-2xl">
                      {paso.numero}
                    </span>
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

        {/* 05 CONTACTO */}
        <section className="border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <div
              aria-hidden="true"
              className="mb-8 font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase"
            >
              05 — Contacto
            </div>
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
                ¿Tenés un mueble con historia? Hablemos.
              </h2>
            </Reveal>
            <div className="mt-12 flex flex-col gap-4 text-base font-medium sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full bg-accent-strong px-6 text-background transition-colors hover:brightness-90"
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 px-6 py-10 text-center sm:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase">
          Flipping de muebles · CABA
        </p>
      </footer>
    </div>
  );
}
