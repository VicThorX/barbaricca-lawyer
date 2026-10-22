import { ImageResponse } from "next/og";
import { getSpecialtyBySlug } from "@/config/specialties";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getSpecialtyBySlug(slug);

  const title = area
    ? area.h1Title
    : "Estudio Jurídico Martin Barbaricca & Asociados";
  const subtitle = area
    ? area.subtitle
    : "Abogado en Mar del Plata y Provincia de Buenos Aires";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0d14",
          padding: "56px 72px",
          color: "#f8fafc",
          border: "2px solid #c5a059",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "2px solid #d4af37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af37",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              MB
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: "#ffffff",
                }}
              >
                MARTIN BARBARICCA &amp; ASOCIADOS
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "#d4af37",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                ESTUDIO JURÍDICO • MAR DEL PLATA
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: 16,
              color: "#d4af37",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              padding: "8px 18px",
              borderRadius: "999px",
            }}
          >
            Especialidad Jurídica
          </div>
        </div>

        {/* Main Specialty Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.18,
              maxWidth: "1020px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#cbd5e1",
              marginTop: "20px",
              lineHeight: 1.4,
              maxWidth: "960px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer Credentials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(212, 175, 55, 0.35)",
            paddingTop: "20px",
            fontSize: 18,
            color: "#94a3b8",
          }}
        >
          <span>Dr. Martín Luis Barbaricca • T° XII F° 197 CAMDP (COLPROBA)</span>
          <span style={{ color: "#d4af37", fontWeight: 700 }}>
            mlbestudio.com.ar • +54 9 223 426-4333
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
