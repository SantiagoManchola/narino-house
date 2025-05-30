import { useState, useRef, useEffect } from 'react';
import HeroPlayer from './HeroPlayer';
import Episodies from './Episodies';

export default function SerieWrapper() {
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedEpisode]);

  return (
    <>
      <div ref={heroRef}>
        <HeroPlayer episodeId={selectedEpisode} />
      </div>

        <section class="text-white px-4 py-6 md:px-12 lg:px-20">
            <div class="md:flex md:gap-16">
                <div class="md:w-2/3">
                    <div class="flex items-center flex-wrap gap-4 text-sm text-white/80 mb-2">
                        <span>2024</span>
                        <span>1 temporada</span>
                        <span class="border border-white px-1.5 py-0.5 text-xs rounded">HD</span>
                    </div>

                    <div class="flex items-center flex-wrap gap-4 text-sm text-white/80 mb-6">
                        <span class="border border-white px-1.5 py-0.5 text-xs rounded">16+</span>
                        <span>violencia, sexo, lenguaje inapropiado</span>
                    </div>

                    <p class="text-lg leading-relaxed text-white">
                        En el interior de la Casa de Nariño, Verónica Alcocer inicia una fuerte lucha por el poder. Sus armas: chantaje y seducción.
                    </p>
                </div>

                <div class="mt-6 md:mt-0 md:w-1/3 text-sm text-white/80 space-y-2">
                    <p><span class="text-white/60">Elenco:</span> Verónica Alcocer, Gustavo Petro, Laura Sarabia, <em>más</em></p>
                    <p><span class="text-white/60">Géneros:</span> Series sobre política, Series dramáticas, Series de Colombia</p>
                    <p><span class="text-white/60">Este título es:</span> Complejo, Sombrío</p>
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
