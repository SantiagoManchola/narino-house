import { useState, useRef, useEffect } from "react";
import HeroPlayer from "./HeroPlayer";
import Episodies from "./Episodies";

export default function SerieWrapper() {
  const [selectedEpisode, setSelectedEpisode] = useState("T");
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef(null);
  const episodesRef = useRef(null);

  const handleEpisodeSelect = (episodeId) => {
    setSelectedEpisode(episodeId);
    setIsPlaying(true);

    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={heroRef}>
        <HeroPlayer
          episodeId={selectedEpisode}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onPlayClick={() => {
            setSelectedEpisode("T");
            setIsPlaying(true);
          }}
        />
      </div>

      <section className="text-white px-6 py-6 md:px-12 lg:px-20">
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
              En la Casa de Nariño, algunos no hicieron pactos con el pueblo…
              sino con el diablo. Campañas manchadas de dinero poco limpio,
              pactos en la sombra y una entidad clave: la UNGRD. Esta es la
              historia de cómo el poder se compró con contratos, cómo Olmedo
              López escaló con fuego en los talones y cómo partidos de todos los
              colores terminaron untados. Plata caliente. Pactos silenciosos. Y
              un infierno llamado corrupción. Dale play a esta investigación que
              destapa los secretos del escándalo que sacude al gobierno de
              Gustavo Petro.
            </p>
          </div>

          <div className="mt-6 md:mt-0 md:w-1/3 text-sm space-y-4">
            <p>
              <span className="text-[#777777]">Elenco:</span> Gustavo Petro,
              Olmedo López, Sneyder Pinilla, Carlos Trujillo, Andrés Calle,
              Julio Elías Chagüi, Julián Bedoya, Emilio Tapia, Ciro Ramírez, la
              Ungrd.
            </p>
            <p>
              <span className="text-[#777777]">Géneros:</span> Investigación
              periodística
            </p>
          </div>
        </div>
      </section>

      <Episodies
        ref={episodesRef}
        selectedEpisode={selectedEpisode}
        onEpisodeSelect={handleEpisodeSelect}
      />
    </>
  );
}
