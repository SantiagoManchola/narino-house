import { useState, useRef, useEffect } from "react";
import HeroPlayer from "./HeroPlayer";
import Episodies from "./Episodies";

export default function SerieWrapper() {
  const [selectedEpisode, setSelectedEpisode] = useState("T");
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedEpisode]);

  return (
    <>
      <div ref={heroRef}>
        <HeroPlayer episodeId={selectedEpisode} />
      </div>

      <section className="text-white px-4 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="md:w-2/3 space-y-4">
            <div className="flex items-center flex-wrap gap-2 text-md mb-1.5">
              <span className="text-[#BCBCBC]">2025 1 temporada</span>
              <span className="border border-white px-1.5 py-[1px] text-xs rounded text-white">
                HD
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-2 text-sm text-white mb-6">
              <span className="border border-white px-1.5 py-[1px]">16+</span>
              <span>Corrupción, coimas, desastre nacional</span>
            </div>

            <p>
              En la Casa de Nariño, muchos le han vendido el alma al diablo. El
              pecado original: las campañas electorales. La fórmula: alianzas y
              plata. El triunfo final: la impunidad y ríos de dinero desviados,
              esta vez, a través de la Unidad del Riesgo.
            </p>
          </div>

          <div className="mt-6 md:mt-0 md:w-1/3 text-sm space-y-4">
            <p>
              <span className="text-[#777777]">Elenco:</span> Gustavo Petro,
              Olmedo López, Sneyder Pinilla, Carlos Trujillo, Andrés Calle,
              Elías Chagüi, Emilio Tapia, Laura Sarabia, Mauricio Lizcano,
              Julián Bedoya, Ciro Ramírez.
            </p>
            <p>
              <span className="text-[#777777]">Géneros:</span> Investigación
              periodística
            </p>
          </div>
        </div>
      </section>

      <Episodies
        selectedEpisode={selectedEpisode}
        onEpisodeSelect={setSelectedEpisode}
      />
    </>
  );
}
