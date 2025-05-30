import { useState } from 'react';
import serieLogoUrl from '../assets/images/icon-cp.svg?url';
import houseTextUrl from '../assets/images/house.svg?url';
import flagColombiaUrl from '../assets/images/flag.svg?url';
import ofTextUrl from '../assets/images/of.svg?url';
import narinoTextUrl from '../assets/images/narino.svg?url';

export default function HeroPlayer({ episodeId }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const episodes = {
        1: "dQw4w9WgXcQ",
        2: "9bZkp7q19f0",
        3: "3JZ_D3ELwOQ",
    };

    const videoId = episodes[episodeId] || episodes[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;

  return (
    <section
      className="relative text-white py-12 px-4 md:px-12 lg:px-20 bg-cover bg-center min-h-[80vh] flex flex-col justify-end"
      style={{ backgroundImage: isPlaying ? 'none' : "url('/images/bg-narino.png')" }}
    >
      {!isPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none bg-gradient-to-t from-[#181818] to-transparent z-0" />
      )}

      {!isPlaying && (
        <>
          <div className="relative z-10 mb-12">
            <div className="flex items-center gap-2">
                <img src={serieLogoUrl} alt="Serie logo" className="w-4" />
                <span className="text-sm uppercase font-light tracking-wide">Serie</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap h-6 md:h-8">
                <img src={houseTextUrl} alt="House" />
                <img src={flagColombiaUrl} alt="Colombia" />
                <img src={ofTextUrl} alt="Of" className="translate-y-[5px]" />
                <img src={narinoTextUrl} alt="Nariño" />
            </div>
          </div>

          <div className="relative z-10 flex gap-4 flex-wrap items-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer"
            >
              <i className="fas fa-play" />
              Reproducir
            </button>

            <button className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition cursor-pointer">
              <i className="fas fa-plus" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition cursor-pointer">
              <i className="fas fa-thumbs-up" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition ml-auto md:ml-0 cursor-pointer">
              <i className="fas fa-volume-up" />
            </button>
          </div>
        </>
      )}

      {isPlaying && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
            <iframe
                key={videoId} 
                src={embedUrl}
                className="w-full h-full rounded-2xl shadow-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Episodio ${episodeId}`}
            />
        </div>
      )}
    </section>
  );
}
