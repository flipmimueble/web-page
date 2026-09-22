export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 text-center font-sans dark:bg-black">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Flipping de muebles
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Restauro muebles con historia · CABA
      </p>
      <div className="mt-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="https://wa.me/5491150157010"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="flex h-12 items-center justify-center rounded-full border border-solid border-black/8 px-6 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          href="mailto:hola@flipmimueble.com"
        >
          Email
        </a>
        <a
          className="flex h-12 items-center justify-center rounded-full border border-solid border-black/8 px-6 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          href="https://instagram.com/flipmimueble"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
