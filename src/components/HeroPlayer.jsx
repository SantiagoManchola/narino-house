import serieLogoUrl from "../assets/images/icon-cp.svg?url";
import houseTextUrl from "../assets/images/house.svg?url";
import flagColombiaUrl from "../assets/images/flag.svg?url";
import ofTextUrl from "../assets/images/of.svg?url";
import narinoTextUrl from "../assets/images/narino.svg?url";

export default function HeroPlayer({ episodeId, isPlaying, onPlayClick }) {
  const episodes = {
    T: "J76Tqc3uGL0",
    1: "FW_3rVoBzPA",
    2: "75xlB8aw68o",
    3: "Re61e2rdBrQ",
  };

  const videoId = episodes[episodeId] || episodes[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;

  return (
    <section className="relative text-white py-12 px-6 md:px-12 lg:px-20 min-h-[80vh] flex flex-col justify-end overflow-hidden">
      {!isPlaying && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/banner-video.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>

          <div className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none bg-gradient-to-t from-[#181818] to-transparent z-10" />
        </>
      )}

      {!isPlaying && (
        <>
          <div className="relative z-20 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <img src={serieLogoUrl} alt="Serie logo" className="w-4" />
              <span className="text-xs uppercase tracking-wide font-sweet">
                SERIE PODCAST
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap h-6 md:h-8 mt-3">
              <img src={houseTextUrl} alt="House" className="h-6 md:h-8" />
              <img
                src={flagColombiaUrl}
                alt="Colombia"
                className="h-6 md:h-8"
              />
              <img
                src={ofTextUrl}
                alt="Of"
                className="translate-y-[4px] h-6 md:h-8"
              />
              <img src={narinoTextUrl} alt="Nariño" className="h-6 md:h-8" />
            </div>
          </div>

          <div className="flex flex-row items-end justify-between gap-6 md:gap-0 z-10">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4">
              <button
                onClick={onPlayClick}
                className="flex items-center gap-3 bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition cursor-pointer text-base sm:text-lg"
              >
                <i className="fas fa-play text-xl sm:text-2xl" />
                Reproducir
              </button>

              <div className="flex gap-2">
                <a
                  href="https://cuestionpublica.com/abonate-al-club-cp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <button className="w-10 h-10 sm:w-[42px] sm:h-[42px] flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition cursor-pointer">
                    <img src="images/icons/bell.svg" alt="Bell icon" />
                  </button>

                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Abonarme
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/c/Cuesti%C3%B3nP%C3%BAblica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <button className="w-10 h-10 sm:w-[42px] sm:h-[42px] flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition cursor-pointer">
                    <img src="images/icons/like.svg" alt="Like icon" />
                  </button>

                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Ir a YouTube
                  </div>
                </a>

                <button
                  onClick={() => {
                    const url = window.location.href;
                    const title = document.title;

                    if (navigator.share) {
                      navigator
                        .share({
                          title,
                          url,
                        })
                        .catch(console.error);
                    } else {
                      navigator.clipboard.writeText(url).then(() => {
                        alert("Enlace copiado al portapapeles");
                      });
                    }
                  }}
                  className="relative group w-10 h-10 sm:w-[42px] sm:h-[42px] flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition cursor-pointer ml-auto sm:ml-0"
                >
                  <img src="images/icons/share.svg" alt="Share icon" />

                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Compartir
                  </div>
                </button>
              </div>
            </div>

            <div className="flex md:block justify-center md:justify-end">
              <a
                href="https://open.spotify.com/show/1CdOtUj16umoFl4Kyi1FNn?si=215faa767ed14a60"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-10 h-10 sm:w-[42px] sm:h-[42px] flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition cursor-pointer"
              >
                <img
                  src="/images/spotify.svg"
                  alt="Spotify"
                  className="w-5 sm:w-auto"
                />

                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  Escuchar en Spotify
                </div>
              </a>
            </div>
          </div>
        </>
      )}

      {isPlaying && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black">
          <iframe
            key={videoId}
            src={embedUrl}
            className="w-full h-full rounded-t-2xl shadow-lg"
            frame-border="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={`Episodio ${episodeId}`}
          />
        </div>
      )}
    </section>
  );
}
