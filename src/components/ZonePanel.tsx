"use client";

import { useGameStore } from "@/store/useGameStore";
import { ZONES } from "@/data/zones";

export default function ZonePanel() {
  const currentZone = useGameStore(
    (s) => s.currentZone
  );

  const zone = ZONES.find(
    (z) => z.id === currentZone
  );

  if (!zone) return null;

  return (
    <div
      className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        w-[720px]
        max-w-[92vw]
        bg-[#09090f]/95
        backdrop-blur-md
        border
        border-white/10
        rounded-2xl
        overflow-hidden
        shadow-2xl
        z-50
      "
    >
      {/* Top Accent Border */}
      <div
        className="h-1 w-full"
        style={{
          backgroundColor: zone.color,
        }}
      />

      {/* Panel Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h2
            className="
              text-2xl
              font-bold
              tracking-wide
            "
            style={{
              color: zone.color,
            }}
          >
            {zone.name}
          </h2>

          <p
            className="
              mt-2
              text-sm
              italic
              text-gray-400
              leading-relaxed
            "
          >
            {zone.lore}
          </p>
        </div>

        {/* Dynamic Zone Content */}
        <div className="mt-5">
          {(() => {
            switch (zone.content.type) {
              case "forge":
                return (
                  <ForgeContent
                    content={zone.content}
                  />
                );

              case "archives":
                return (
                  <ArchivesContent
                    content={zone.content}
                  />
                );

              case "oracle":
                return (
                  <OracleContent
                    content={zone.content}
                  />
                );

              case "gateway":
                return (
                  <GatewayContent
                    content={zone.content}
                  />
                );

              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}


function ForgeContent({
  content,
}: any) {
  return (
    <div>
      Forge content goes here
    </div>
  );
}


function ArchivesContent({
  content,
}: any) {
  return (
    <div>
      Archives content goes here
    </div>
  );
}

function OracleContent({
  content,
}: any) {
  return (
    <div>
      Oracle content goes here
    </div>
  );
}

function GatewayContent({
  content,
}: any) {
  return (
    <div>
      Gateway content goes here
    </div>
  );
}