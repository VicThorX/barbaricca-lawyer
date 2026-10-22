import { ImageResponse } from "next/og";

export const alt =
  "Estudio Jurídico Dr. Martín Barbaricca & Asociados — Abogado en Mar del Plata";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0a0d14",
          padding: "56px 72px",
          color: "#f8fafc",
          border: "2px solid #c5a059",
        }}
      >
        {/* Top Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#d4af37",
            fontSize: 20,
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <span>ABOGADO EN MAR DEL PLATA • GENERAL PUEYRREDÓN • PBA</span>
        </div>

        {/* Center Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "76px",
              height: "76px",
              borderRadius: "50%",
              border: "2px solid #d4af37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d4af37",
              fontSize: 30,
              fontWeight: 700,
              marginBottom: "24px",
            }}
          >
            MB
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "4px",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            MARTIN BARBARICCA
          </div>

          <div
            style={{
              fontSize: 28,
              color: "#d4af37",
              letterSpacing: "6px",
              marginTop: "12px",
              textTransform: "uppercase",
            }}
          >
            &amp; ASOCIADOS • ESTUDIO JURÍDICO
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#cbd5e1",
              marginTop: "28px",
              maxWidth: "920px",
              lineHeight: 1.4,
            }}
          >
            Derecho de Familia • Divorcios • Sucesiones • Desalojos y Alquileres • Derecho Informático y Software
          </div>
        </div>

        {/* Bottom Credentials */}
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
