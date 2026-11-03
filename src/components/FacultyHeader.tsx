import React, { useState } from 'react';
import { Volume2, Award, GraduationCap, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { LanguageMode, FacultyProfessor } from '../types';
import { FACULTY_PROFESSORS } from '../data/dualCurriculum';
import { speakKorean, speakMandarin, playClickSound } from '../utils/audio';

interface FacultyHeaderProps {
  currentLanguage: LanguageMode;
  onLanguageChange: (lang: LanguageMode) => void;
  onOpenTextbookModal?: () => void;
}

export const FacultyHeader: React.FC<FacultyHeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenTextbookModal
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const professor: FacultyProfessor = FACULTY_PROFESSORS[currentLanguage];

  const handlePlayGreeting = async () => {
    setIsPlayingAudio(true);
    if (currentLanguage === 'korean') {
      await speakKorean(professor.greetingAudio, 0.85);
    } else {
      await speakMandarin(professor.greetingAudio, 0.85);
    }
    setIsPlayingAudio(false);
  };

  return (
    <header className="rounded-3xl p-6 bg-gradient-to-r from-[#110a2c]/90 via-[#0d0922]/95 to-[#060414]/95 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        {/* Left: Academic Persona Profile */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-300" />
              <span>Cátedra Académica & Doctorado</span>
            </span>

            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-950/70 text-amber-300 border border-amber-500/40 flex items-center gap-1">
              <span>🇲🇽 Adaptado con Fonética y Modismos para México</span>
            </span>
          </div>

          <div className="flex items-start gap-4">
            {/* Avatar Pill */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(255,42,141,0.4)]">
                <div className="w-full h-full bg-[#0a071a] rounded-[14px] flex items-center justify-center text-2xl font-black text-white">
                  {currentLanguage === 'korean' ? '朴' : '李'}
                </div>
              </div>
              <span className="absolute -bottom-1.5 -right-1 text-xs">
                {currentLanguage === 'korean' ? '🇰🇷' : '🇨🇳'}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit'] tracking-tight">
                  {professor.name}
                </h2>
                <span className="text-sm font-semibold text-fuchsia-300/90 font-['Noto_Sans_KR']">
                  {professor.nativeName}
                </span>
              </div>

              <div className="text-xs text-cyan-300 font-medium flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>{professor.chair}</span>
              </div>

              <div className="text-[11px] text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{professor.university}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300/90 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-white/5">
            <strong className="text-cyan-300">Enfoque para México: </strong>
            {professor.mexicanAdaptationNote}
          </p>
        </div>

        {/* Right: Language Track Switcher & Quick Audio Action */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0">
          {/* Dual-Academy Language Switcher */}
          <div className="p-1 rounded-2xl bg-[#090618] border border-white/15 flex items-center gap-1 shadow-inner">
            <button
              type="button"
              onClick={() => {
                playClickSound();
                onLanguageChange('korean');
              }}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                currentLanguage === 'korean'
                  ? 'bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white shadow-[0_0_16px_rgba(255,42,141,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base">🇰🇷</span>
              <span>Cátedra Coreano</span>
            </button>

            <button
              type="button"
              onClick={() => {
                playClickSound();
                onLanguageChange('chinese');
              }}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                currentLanguage === 'chinese'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-[0_0_16px_rgba(0,240,255,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base">🇨🇳</span>
              <span>Cátedra Chino Mandarín</span>
            </button>
          </div>

          {/* Action Buttons: Audio Greeting & HSK Textbook Link */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePlayGreeting}
              disabled={isPlayingAudio}
              className="flex-1 sm:flex-initial py-2 px-3.5 rounded-xl bg-slate-900/90 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-950/60 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)] disabled:opacity-50"
              title="Escuchar bienvenida de la profesora en su idioma nativo"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-bounce text-cyan-400' : ''}`} />
              <span>{isPlayingAudio ? 'Hablando...' : 'Escuchar Bienvenida Nativa'}</span>
            </button>

            {onOpenTextbookModal && (
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onOpenTextbookModal();
                }}
                className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/50 text-amber-300 hover:text-white hover:bg-amber-950/50 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Libro HSK 1 (12 Págs)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
