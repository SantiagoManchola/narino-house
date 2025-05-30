const episodes = [
  {
    id: 1,
    title: "Capítulo 1",
    description:
      "Clientelismo, pago de favores, cuotas políticas Gobierno Petro (UNGRD) La Paz Total.",
    duration: "56 min",
    thumbnail: "/images/episodies/ep1.png",
  },
  {
    id: 2,
    title: "Capítulo 2",
    description: "El Clan Torres es el nuevo Clan Char.",
    duration: "48 min",
    thumbnail: "/images/episodies/ep2.png",
  },
  {
    id: 3,
    title: "Capítulo 3",
    description:
      "Las mafias detrás del Gobierno Petro (Bedoya) (Esmeralderos Boyacá)",
    duration: "55 min",
    thumbnail: "/images/episodies/ep3.png",
  },
];

export default function Episodies({ onEpisodeSelect, selectedEpisode }) {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Episodios</h2>

        <div className="relative inline-block">
          <select
            disabled
            className="appearance-none bg-[#1a1a1a] border border-white text-white font-semibold px-6 py-3 rounded-md text-base leading-tight pr-10"
          >
            <option className="text-black">Temporada 1</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm mb-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Temporada 1:</span>
          <span className="border border-white px-1.5 py-0.5 rounded text-xs">16+</span>
          <span className="text-white/80">
            violencia, sexo, lenguaje inapropiado
          </span>
        </div>
      </div>

      <div id="episode-list">
        {episodes.map((ep) => (
          <div
            key={ep.id}
            className={`episode-item flex items-start gap-4 px-12 py-4 rounded-md transition-colors cursor-pointer md:h-[130px] border-b border-[#333] ${
              selectedEpisode === ep.id ? 'bg-white/10 border-none' : ''
            }`}
            onClick={() => onEpisodeSelect(ep.id)}
          >
            <div className="w-6 text-lg text-white/60 self-center flex justify-center">{ep.id}</div>

            <div className="flex-1 flex flex-col sm:flex-row gap-4 h-full">
              <div className="relative w-full sm:w-[132px] aspect-video shrink-0 rounded overflow-hidden self-center">
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 py-3 overflow-auto">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-semibold">{ep.title}</h3>
                  <span className="text-white/70 text-sm">{ep.duration}</span>
                </div>
                <p className="text-white/80 text-sm mt-2 w-[85%]">{ep.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
