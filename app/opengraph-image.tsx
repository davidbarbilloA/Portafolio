import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

// Runtime edge: en Next 14, next/og con el runtime de Node falla al compilar en Windows.
export const runtime = "edge";
export const alt = `${SITE.name}, ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Copia ligera: este archivo se empaqueta en la función edge, que tiene límite de tamaño.
  const photo = await fetch(new URL("../public/profile-og.jpg", import.meta.url)).then(
    (response) => response.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0B0A09",
          color: "#F4EFE8",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 690,
            padding: "0 40px 0 72px",
          }}
        >
          <div style={{ fontSize: 88, lineHeight: 1, letterSpacing: "-0.02em" }}>
            {SITE.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#E2A65C" }}>
            Desarrollador Full Stack
          </div>
          <div style={{ marginTop: 6, fontSize: 32, color: "#B8B2A9" }}>
            React y Java
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          // Satori acepta un ArrayBuffer como src aunque el tipo de React pida string.
          src={photo as unknown as string}
          width={510}
          height={638}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    size
  );
}
