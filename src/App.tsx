import { useState } from 'react';
import {
  Sparkles,
  Layers,
  BookOpen,
  Smartphone,
  GraduationCap,
  X,
  ChevronRight,
  Award,
  Flame,
  Volume2
} from 'lucide-react';
import { FusedAtmosphere } from './components/FusedAtmosphere';
import { FacultyHeader } from './components/FacultyHeader';
import { TrilingualBreakdownSpace } from './components/TrilingualBreakdownSpace';
import { AtomicExamplesSpace } from './components/AtomicExamplesSpace';
import { InteractiveExercisesSpace } from './components/InteractiveExercisesSpace';
import { RegionalSlangSpace } from './components/RegionalSlangSpace';
import { HskStudyHallSpace } from './components/HskStudyHallSpace';
import { KoreanAppView } from './components/KoreanAppView';
import { LanguageMode, AtomicLesson } from './types';
import { ATOMIC_LESSONS, FUSED_MASTER_DESIGN } from './data/dualCurriculum';
import { playClickSound, playChimeSound } from './utils/audio';

export type ActiveSpace =
  | 'anatomy'
  | 'examples'
  | 'exercises'
  | 'slang'
  | 'textbook'
  | 'simulator';

export default function App() {
  // Academic language track: Korean (Dra. Min-ji Park) or Chinese Mandarin (Dra. Li Wei)
  const [languageMode, setLanguageMode] = useState<LanguageMode>('korean');

  // Active dedicated space (Each section in its own unique spacious layout)
  const [activeSpace, setActiveSpace] = useState<ActiveSpace>('anatomy');

  // Selected lesson ID within the active language track
  const [selectedLessonId, setSelectedLessonId] = useState<string>('korean-1');

  // Fullscreen image lightbox
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Filter lessons for the active track
  const trackLessons = ATOMIC_LESSONS.filter((l) => l.language === languageMode);

  // Current active lesson
  const currentLesson: AtomicLesson =
    trackLessons.find((l) => l.id === selectedLessonId) || trackLessons[0] || ATOMIC_LESSONS[0];

  const handleLanguageChange = (newLang: LanguageMode) => {
    setLanguageMode(newLang);
    const firstOfTrack = ATOMIC_LESSONS.find((l) => l.language === newLang);
    if (firstOfTrack) {
      setSelectedLessonId(firstOfTrack.id);
    }
  };

  return (
    <div
      className="min-h-screen text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] relative overflow-x-hidden select-none bg-[#070414]"
      style={{
        backgroundImage: `radial-gradient(ellipse at top, rgba(12, 6, 30, 0.82) 0%, rgba(6, 3, 16, 0.95) 100%), url(${FUSED_MASTER_DESIGN.backgroundArt})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 3-in-1 Fused Master Atmosphere (Lotus Sanctuary + Gyeongbok Palace Lanterns + Sakura Pavilion Mist) */}
      <FusedAtmosphere />

      {/* Top Navigation Bar with Fused Aesthetics */}
      <header className="sticky top-0 z-40 px-3 sm:px-8 py-3 bg-[#090518]/90 backdrop-blur-2xl border-b border-cyan-400/30 shadow-[0_4px_24px_rgba(0,0,0,0.7)] flex flex-wrap lg:flex-nowrap items-center justify-between gap-3">
        {/* Brand & 3-in-1 Fusion Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-600 to-fuchsia-500 p-0.5 shadow-[0_0_20px_rgba(0,240,255,0.6)] shrink-0">
            <div className="w-full h-full bg-[#0d0724] rounded-[14px] flex items-center justify-center">
              <span className="font-['Noto_Sans_KR'] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 text-lg">
                {languageMode === 'korean' ? '한' : '汉'}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-sm sm:text-base font-black tracking-tight text-white font-['Outfit']">
                Hangul & Hanzi Glow Academy
              </h1>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                🪷 Lotos + 🏯 Palacio + 🌸 Sakura (Fusión Maestra)
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Cátedras de Seúl & Beijing adaptadas para México • Desglose Trilingüe • 16 Ejemplos & 20 Retos
            </p>
          </div>
        </div>

        {/* Traditional Imperial Seals & Neon Calligraphy in Navigation Bar */}
        <div className="hidden xl:flex items-center gap-2">
          {FUSED_MASTER_DESIGN.seals.map((seal, i) => (
            <span
              key={i}
              className="text-[10px] font-black px-2.5 py-1 rounded-xl border backdrop-blur-md shadow-sm"
              style={{
                borderColor: seal.color,
                color: seal.color,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}
            >
              {seal.text}
            </span>
          ))}
        </div>
      </header>

      {/* Main Academy Stage */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full space-y-6 flex-1 relative z-10">
        {/* 1. Academic Faculty Profile Card */}
        <FacultyHeader
          currentLanguage={languageMode}
          onLanguageChange={handleLanguageChange}
          onOpenTextbookModal={() => setActiveSpace('textbook')}
        />

        {/* 2. Lesson Track Selector Ribbon */}
        <div className="p-4 rounded-3xl bg-slate-900/85 border border-white/10 shadow-xl space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>
                {languageMode === 'korean'
                  ? 'Plan de Cátedra Coreana (Dra. Min-ji Park):'
                  : 'Plan de Cátedra Chino Mandarín (Dra. Li Wei):'}
              </span>
            </span>
            <span className="text-[11px] text-slate-400">
              Cambia de lección para actualizar los 5 espacios temáticos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trackLessons.map((l) => {
              const isCurrent = l.id === currentLesson.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => {
                    playClickSound();
                    playChimeSound(true);
                    setSelectedLessonId(l.id);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                    isCurrent
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.35)] ring-2 ring-cyan-400/40 scale-[1.01]'
                      : 'bg-slate-900/50 border-white/10 hover:border-white/30 text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isCurrent ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {l.lessonCode}
                      </span>
                      <span className="text-xs font-bold text-white font-['Outfit']">
                        {l.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 truncate max-w-sm">
                      {l.subtitle}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isCurrent ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Dedicated Spaces Navigation Ribbon (Cada apartado en su ESPACIO ÚNICO) */}
        <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-cyan-400/40 shadow-[0_0_24px_rgba(0,240,255,0.15)] flex items-center gap-1.5 overflow-x-auto">
          {/* Space 1: Desglose Anatómico Trilingüe */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActiveSpace('anatomy');
            }}
            className={`flex-1 min-w-[145px] py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeSpace === 'anatomy'
                ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_16px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>1. Desglose Anatómico</span>
          </button>

          {/* Space 2: 16 Ejemplos Atómicos */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActiveSpace('examples');
            }}
            className={`flex-1 min-w-[145px] py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeSpace === 'examples'
                ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_16px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2. 16 Ejemplos (3 Idiomas)</span>
          </button>

          {/* Space 3: 20 Ejercicios Interactivos */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActiveSpace('exercises');
            }}
            className={`flex-1 min-w-[145px] py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeSpace === 'exercises'
                ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_16px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>3. 20 Ejercicios Prácticos</span>
          </button>

          {/* Space 4: Jergas & Modismos Regionales */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActiveSpace('slang');
            }}
            className={`flex-1 min-w-[145px] py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeSpace === 'slang'
                ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_16px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>4. Jergas & Dialectos</span>
          </button>

          {/* Space 5: Libro Oficial HSK 1 */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActiveSpace('textbook');
            }}
            className={`flex-1 min-w-[145px] py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeSpace === 'textbook'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-[0_0_16px_rgba(245,158,11,0.5)]'
                : 'text-amber-400/80 hover:text-amber-300 hover:bg-amber-950/30'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>5. Libro HSK 1 (12 Págs)</span>
          </button>

          {/* Space 6: Simulador Móvil */}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              setActiveSpace('simulator');
            }}
            className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 whitespace-nowrap ${
              activeSpace === 'simulator'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_#00f0ff]'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Probar simulador móvil enmarcado"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Simulador</span>
          </button>
        </div>

        {/* 4. Dynamic Dedicated Space Views */}
        {activeSpace === 'anatomy' && <TrilingualBreakdownSpace lesson={currentLesson} />}

        {activeSpace === 'examples' && <AtomicExamplesSpace lesson={currentLesson} />}

        {activeSpace === 'exercises' && <InteractiveExercisesSpace lesson={currentLesson} />}

        {activeSpace === 'slang' && <RegionalSlangSpace lesson={currentLesson} />}

        {activeSpace === 'textbook' && (
          <HskStudyHallSpace onPreviewImage={(url) => setFullscreenImage(url)} />
        )}

        {activeSpace === 'simulator' && (
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Simulador Móvil en Vivo
              </span>
              <h3 className="text-lg font-bold text-white font-['Outfit']">
                Interfaz de Estudio Compacta con Efectos de Vidrio Translúcido
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <KoreanAppView onOpenDesignExplorer={() => setActiveSpace('anatomy')} />
            </div>
          </div>
        )}
      </main>

      {/* Footer Ribbon with Fused Aesthetics and Dual Faculty Accreditation */}
      <footer className="mt-auto px-6 py-6 bg-[#080516]/95 border-t border-cyan-400/20 backdrop-blur-2xl text-center space-y-2 relative z-10">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {FUSED_MASTER_DESIGN.seals.map((seal, idx) => (
            <span
              key={idx}
              className="text-xs font-black px-3 py-1 rounded-xl border shadow-sm"
              style={{
                borderColor: seal.color,
                color: seal.color,
                backgroundColor: 'rgba(0,0,0,0.6)'
              }}
            >
              {seal.text}
            </span>
          ))}
          <span className="text-xs text-slate-300 font-bold font-['Outfit']">
            Hangul & Hanzi Dual Academy • Cátedras Universitarias de Seúl & Beijing para Hispanohablantes (México)
          </span>
        </div>
        <p className="text-[11px] text-slate-400">
          Diseño Fusión Integral: Santuario de Lotos (Estanque resplandeciente) + Palacio Real Gyeongbok (Faroles y celosía) + Sakura Pavilion (Niebla nocturna y luna).
        </p>
      </footer>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[92vh] flex flex-col items-center">
            <button
              type="button"
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-slate-800 border border-white/20 text-white flex items-center justify-center hover:bg-slate-700 transition-colors shadow-xl"
              title="Cerrar vista completa"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={fullscreenImage}
              alt="Vista de alta resolución"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain border border-cyan-400/50 shadow-[0_0_50px_rgba(0,240,255,0.4)]"
            />
            <p className="text-xs text-slate-400 mt-3 text-center">
              Haz clic en cualquier parte para cerrar
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
