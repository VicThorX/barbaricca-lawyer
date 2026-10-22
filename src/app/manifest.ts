import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Estudio Jurídico Martin Barbaricca & Asociados",
    short_name: "Dr. Barbaricca",
    description:
      "Abogado en Mar del Plata y Provincia de Buenos Aires: Derecho de Familia, Divorcios, Sucesiones, Desalojos y Derecho Informático.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d14",
    theme_color: "#c5a059",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
