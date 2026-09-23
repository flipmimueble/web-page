import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PiezaEstado = "disponible" | "vendido" | "a-pedido" | "proceso";

export type Pieza = {
  slug: string;
  titulo: string;
  resumen: string;
  fotoAntes?: string;
  fotoDespues?: string;
  fotos: string[];
  materiales?: string;
  estado: PiezaEstado;
  fecha: string;
  body: string;
};

export const ESTADO_LABELS: Record<PiezaEstado, string> = {
  disponible: "Disponible",
  vendido: "Vendido",
  "a-pedido": "A pedido",
  proceso: "En proceso",
};

const PIEZAS_DIR = path.join(process.cwd(), "content", "piezas");

/**
 * Picks the best available image for a piece, since not every piece has a
 * distinct "antes"/"después" pair (e.g. a piece still in progress may only
 * have an "antes" shot). Prefers the finished/current photo, then the
 * before shot, then any extra photo.
 */
export function getPiezaFotoPrincipal(
  pieza: Pick<Pieza, "fotoDespues" | "fotoAntes" | "fotos">,
): string | undefined {
  return pieza.fotoDespues ?? pieza.fotoAntes ?? pieza.fotos[0];
}

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  return String(value ?? "");
}

export function getAllPiezas(): Pieza[] {
  if (!fs.existsSync(PIEZAS_DIR)) return [];

  const files = fs.readdirSync(PIEZAS_DIR).filter((file) => file.endsWith(".md"));

  const piezas = files.map((file): Pieza => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(PIEZAS_DIR, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      titulo: data.titulo as string,
      resumen: data.resumen as string,
      fotoAntes: (data.fotoAntes as string | undefined) || undefined,
      fotoDespues: (data.fotoDespues as string | undefined) || undefined,
      fotos: (data.fotos as string[] | undefined) ?? [],
      materiales: (data.materiales as string | undefined) || undefined,
      estado: data.estado as PiezaEstado,
      fecha: toIsoDate(data.fecha),
      body: content.trim(),
    };
  });

  return piezas.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

export function getPiezaBySlug(slug: string): Pieza | undefined {
  return getAllPiezas().find((pieza) => pieza.slug === slug);
}
