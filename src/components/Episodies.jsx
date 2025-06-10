import { forwardRef } from "react";

const episodes = [
  {
    id: "T",
    title: "Tráiler",
    description: "El diablo cuenta cómo se llega a la Casa de Nariño",
    duration: "48 min",
    thumbnail: "/images/episodies/logo-hn.svg",
  },
  {
    id: 1,
    title: "Capítulo 1: Venderle el alma al diablo",
    description:
      "Una carta intentó evitar la catástrofe. Pero ya era tarde. El alfil se había ganado el corazón del nuevo presidente. Durante años, hizo las movidas necesarias para llegar al gobierno nacional, pero desde su silla en la UNGRD, el castillo de naipes se empezaría a derrumbar.",
    duration: "48 min",
    thumbnail: "/images/episodies/logo-hn.svg",
  },
  {
    id: 2,
    title: "Capítulo 2: Los buenos muchachos",
    description:
      "El periodo legislativo llegaba a su fin, y solo había una oportunidad para que la reforma más importante del Gobierno no se hundiera. Pero en el Congreso todo tiene un precio y los buenos muchachos del presidente estaban dispuestos a todo para lograrlo.",
    duration: "48 min",
    thumbnail: "/images/episodies/logo-hn.svg",
  },
  {
    id: 3,
    title: "Capítulo 3: El kit para emergencias",
    description:
      "Olmedo López y Sneyder Pinilla desactivaron los dispositivos de seguridad que evitaban la corrupción en la UNGRD. Con los dineros de la emergencia del presidente Petro, simularon competencias entre proponentes y acomodaron interventores y contratistas.",
    duration: "48 min",
    thumbnail: "/images/episodies/logo-hn.svg",
  },
];

const Episodies = forwardRef(function Episodies(
  { onEpisodeSelect, selectedEpisode },
  ref
) {
  return (
    <section
      ref={ref}
      className="px-6 sm:px-4 md:px-12 lg:px-20 py-6 text-white"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h2 className="text-xl sm:text-2xl">Episodios</h2>

        <div className="relative inline-block w-fit">
          <select
            disabled
            className="appearance-none bg-[#242424] border border-white text-white font-semibold px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base leading-tight pr-10"
          >
            <option className="text-black">Temporada 1</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="text-sm mb-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span>Temporada 1:</span>
          <span className="border border-white px-1.5 py-0">16+</span>
          <span>Corrupción, coimas, desastre nacional</span>
        </div>
      </div>

      <div id="episode-list">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            className={`episode-item flex flex-col md:flex-row items-start gap-4 px-2 sm:px-4 md:px-12 py-4 rounded-md transition-colors cursor-pointer border-b border-[#333] ${
              selectedEpisode === ep.id ? "bg-white/10 border-none" : ""
            }`}
            onClick={() => onEpisodeSelect(ep.id)}
          >
            <div className="w-6 text-base sm:text-lg text-white/60 self-center flex justify-center">
              {ep.id}
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full items-center ">
              <div className="relative w-full sm:w-[157px] aspect-video shrink-0 rounded bg-black">
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full object-cover rounded p-20 md:p-7"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[46px] h-[46px]"
                    viewBox="0 0 46 46"
                  >
                    <circle
                      cx="23"
                      cy="23"
                      r="22"
                      fill="#181818"
                      fillOpacity="0.5"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <path d="M16 13v20l16-10z" fill="white" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 py-2 sm:py-3 overflow-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {ep.title}
                  </h3>
                  <span className="text-white/70 text-sm shrink-0">
                    {ep.duration}
                  </span>
                </div>
                <p className="text-white/80 text-sm mt-2 w-full">
                  {ep.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Episodies;
