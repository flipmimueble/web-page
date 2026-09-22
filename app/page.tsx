import Image from "next/image";
import mesita from "./_assets/fotos/mesita-antes-despues.jpg";
import procesoSilla from "./_assets/fotos/proceso-silla-pintando.jpg";
import sillaAntes from "./_assets/fotos/silla-antes.jpg";

const WHATSAPP_URL =
  "https://wa.me/5491150157010?text=Hola%21%20Te%20mando%20una%20foto%20de%20mi%20mueble%20%F0%9F%A4%97";
const EMAIL = "hola@flipmimueble.com";
const INSTAGRAM_URL = "https://instagram.com/flipmimueble";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header / hero */}
      <header className="flex flex-col items-center px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Flipping de muebles
        </h1>
        <p className="mt-5 max-w-md text-lg text-foreground/80 sm:text-xl">
          🪑 Restauro muebles con historia · CABA
        </p>
        <p className="mt-2 max-w-md text-base text-foreground/70">
          Mandame una foto por DM y vemos ✉️
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex h-14 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
        >
          Escribime por WhatsApp
        </a>
      </header>

      <main>
        {/* Mood strip / en el taller */}
        <section className="px-6 py-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Así se restaura
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl bg-foreground/5 lg:col-span-2">
              <Image
                src={mesita}
                alt="Mesita de pino antes y después de la restauración, pintada de blanco con manija dorada y patas con puntas en borravino"
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
              <figcaption className="px-5 py-4 text-sm text-foreground/70 sm:text-base">
                Mesita de pino restaurada en blanco, con detalle en borravino
                y manija dorada.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl bg-foreground/5">
              <Image
                src={procesoSilla}
                alt="Pincel y frasco de pintura junto al respaldo de una silla de madera, con uno de los barrotes ya pintado en borravino y el resto sin pintar, planta de fondo"
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <figcaption className="px-5 py-4 text-sm text-foreground/70 sm:text-base">
                Pintando a mano los barrotes de una silla, en el taller.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl bg-foreground/5 sm:col-span-2 lg:col-span-1">
              <Image
                src={sillaAntes}
                alt="Silla antigua con pintura blanca descascarada y asiento de madera desgastado, vista desde arriba, antes de restaurar"
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <figcaption className="px-5 py-4 text-sm text-foreground/70 sm:text-base">
                Antes de restaurar: una silla que llegó con años encima.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-foreground/5 px-6 py-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            <li className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-serif text-xl font-semibold text-foreground">
                1
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                Mandame una foto
              </h3>
              <p className="mt-2 text-sm text-foreground/70 sm:text-base">
                Por WhatsApp o por DM en Instagram, contame qué mueble tenés.
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-serif text-xl font-semibold text-foreground">
                2
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                Coordinamos
              </h3>
              <p className="mt-2 text-sm text-foreground/70 sm:text-base">
                Vemos qué necesita, cómo lo vamos a restaurar y los tiempos.
              </p>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-serif text-xl font-semibold text-foreground">
                3
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                Tu mueble, con historia nueva
              </h3>
              <p className="mt-2 text-sm text-foreground/70 sm:text-base">
                Lo restauro con cariño y te lo devuelvo listo para volver a
                usarse.
              </p>
            </li>
          </ol>
        </section>
      </main>

      {/* Contact / footer */}
      <footer className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
        <p className="max-w-md text-lg text-foreground/80">
          ¿Tenés un mueble con historia? Hablemos.
        </p>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full bg-accent px-6 text-foreground transition-colors hover:bg-accent/90"
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
        <p className="mt-4 text-sm text-foreground/70">
          Flipping de muebles · CABA
        </p>
      </footer>
    </div>
  );
}
