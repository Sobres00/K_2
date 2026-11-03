import React from 'react';
import { Layers, Sparkles, HelpCircle, ArrowRight, Award, BookOpen, Volume2 } from 'lucide-react';
import { AtomicLesson } from '../types';
import { GrammarChip } from './GrammarChip';
import { speakKorean, speakMandarin, playChimeSound } from '../utils/audio';

interface TrilingualBreakdownSpaceProps {
  lesson: AtomicLesson;
}

export const TrilingualBreakdownSpace: React.FC<TrilingualBreakdownSpaceProps> = ({ lesson }) => {
  const isKorean = lesson.language === 'korean';

  const handleSpeak = (text: string, lang: 'ko' | 'zh') => {
    playChimeSound(true);
    if (lang === 'ko') {
      speakKorean(text, 0.85);
    } else {
      speakMandarin(text, 0.85);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Banner of the Space */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#140b30]/90 via-[#0d0822]/95 to-[#070414]/95 border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(0,240,255,0.2)] relative overflow-hidden">
        {/* Holographic Watermark Badge */}
        <div className="absolute -top-6 -right-6 w-36 h-36 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
              Espacio 1: Desglose Anatómico & Estructural
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-fuchsia-950/80 border border-fuchsia-400/40 text-fuchsia-300">
              Trilingüe: Coreano 🇰🇷 • Chino Mandarín 🇨🇳 • Español Mexicano 🇲🇽
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] tracking-tight">
            Anatomía de la Frase: Componentes, Trazos, Etiquetas y Raíces
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Aprende como si no supieras absolutamente nada desde cero. Cada palabra se desglosa en sus piezas
            geométricas elementales con código de color unificado para que nunca te confundas.
          </p>
        </div>
      </div>

      {/* 2. Color-Coded Grammatical Legend */}
      <div className="rounded-2xl p-5 bg-slate-900/80 border border-white/10 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Código de Color Universal para Identificar Cada Componente:</span>
          </h3>
          <span className="text-[11px] text-slate-400">Estándar pedagógico de la cátedra</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-400/60 shadow-[0_0_10px_rgba(0,240,255,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
            <div className="text-[11px] font-bold text-cyan-300 leading-tight">
              Sujeto / Persona
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-fuchsia-950/70 border border-fuchsia-400/60 shadow-[0_0_10px_rgba(255,42,141,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-fuchsia-400 shrink-0" />
            <div className="text-[11px] font-bold text-fuchsia-300 leading-tight">
              Etiqueta / Partícula
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-400/60 shadow-[0_0_10px_rgba(16,185,129,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
            <div className="text-[11px] font-bold text-emerald-300 leading-tight">
              Objeto / Sustantivo
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-amber-950/70 border border-amber-400/60 shadow-[0_0_10px_rgba(245,158,11,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
            <div className="text-[11px] font-bold text-amber-300 leading-tight">
              Verbo / Cópula
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-400/60 shadow-[0_0_10px_rgba(168,85,247,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-400 shrink-0" />
            <div className="text-[11px] font-bold text-purple-300 leading-tight">
              Piso / Tono Sandhi
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-950/70 border border-rose-400/60 shadow-[0_0_10px_rgba(244,63,94,0.2)] flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 shrink-0" />
            <div className="text-[11px] font-bold text-rose-300 leading-tight">
              Lo que se Quita
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Morphological Dissection Matrix (¿Qué se quita? ¿De dónde? ¿Por qué? ¿Cuándo? ¿Qué se pega?) */}
      <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-r from-[#0e0826] via-[#120a2e] to-[#080516] border border-cyan-400/40 shadow-xl space-y-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white font-['Outfit']">
              Matriz Morfológica Atómica: {lesson.foundationRule.anatomyBreakdown.title}
            </h3>
            <p className="text-xs text-slate-400">
              Desglose de cada alteración gramatical para entender su origen fonético y no memorizar a ciegas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>1. ¿Qué se quita?</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {lesson.foundationRule.anatomyBreakdown.whatToRemove}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>2. ¿De dónde se quita?</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {lesson.foundationRule.anatomyBreakdown.whereFrom}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>3. ¿Por qué se quita?</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {lesson.foundationRule.anatomyBreakdown.whyRemove}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>4. ¿Cuándo se quita?</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {lesson.foundationRule.anatomyBreakdown.whenRemove}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>5. ¿Qué pegamento se añade?</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {lesson.foundationRule.anatomyBreakdown.whatToGlue}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/25 border border-cyan-500/40 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>6. ¿Por qué este pegamento?</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {lesson.foundationRule.anatomyBreakdown.whyGlue}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Comparative Trilingual Structural Architecture (Coreano vs Chino vs Español) */}
      <div className="rounded-3xl p-6 sm:p-7 bg-slate-900/90 border border-fuchsia-500/40 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-fuchsia-400" />
            <h3 className="text-base font-extrabold text-white font-['Outfit']">
              Comparativa de Ensamblaje Trilingüe en Vivo
            </h3>
          </div>
          <span className="text-xs text-fuchsia-300 font-mono">Fórmula: [Sujeto] + [Pegamento] + [Objeto] + [Verbo]</span>
        </div>

        <p className="text-xs text-slate-300">
          Observa cómo el orden y las etiquetas se transforman entre el coreano, el chino y el español mexicano:
        </p>

        {/* Trilingual Comparative Cards */}
        <div className="space-y-3">
          {/* Card 1: Coreano (SOV: Sujeto + Objeto + Verbo) */}
          <div className="p-4 rounded-2xl bg-[#110926] border border-cyan-400/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-base">🇰🇷</span>
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                  Estructura Coreana (Sujeto + Objeto + Verbo)
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                <GrammarChip component={{ type: 'subject', label: 'Persona', text: '저 (Yo)', phonetic: 'cho' }} size="sm" />
                <span className="text-slate-500 font-bold">+</span>
                <GrammarChip component={{ type: 'particle', label: 'Pegamento Sin Piso', text: '는 (Tema)', phonetic: 'nún' }} size="sm" />
                <span className="text-slate-500 font-bold">+</span>
                <GrammarChip component={{ type: 'object', label: 'Sustantivo Con Piso', text: '학생 (Estudiante)', phonetic: 'jak-seng' }} size="sm" />
                <span className="text-slate-500 font-bold">+</span>
                <GrammarChip component={{ type: 'verb', label: 'Verbo Ser Final', text: '이에요 (Soy)', phonetic: 'i-e-yo' }} size="sm" />
                <span className="text-cyan-400 font-bold text-sm">→</span>
                <span className="text-base font-black text-white font-['Noto_Sans_KR']">
                  저는 학생이에요
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSpeak('저는 학생이에요', 'ko')}
              className="px-3.5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-400/50 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold text-cyan-300 flex items-center gap-1.5 transition-all shrink-0"
            >
              <Volume2 className="w-4 h-4" />
              <span>Escuchar Coreano</span>
            </button>
          </div>

          {/* Card 2: Chino Mandarín (SVO: Sujeto + Verbo Cópula + Objeto) */}
          <div className="p-4 rounded-2xl bg-[#110926] border border-fuchsia-400/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-base">🇨🇳</span>
                <span className="text-xs font-black text-fuchsia-300 uppercase tracking-wider">
                  Estructura Chino Mandarín (Sujeto + Verbo Cópula + Objeto)
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                <GrammarChip component={{ type: 'subject', label: 'Pronombre', text: '我 (Yo)', phonetic: 'wǒ' }} size="sm" />
                <span className="text-slate-500 font-bold">+</span>
                <GrammarChip component={{ type: 'verb', label: 'Cópula Ser Invariable', text: '是 (Soy)', phonetic: 'shì' }} size="sm" />
                <span className="text-slate-500 font-bold">+</span>
                <GrammarChip component={{ type: 'object', label: 'Sustantivo Objeto', text: '学生 (Estudiante)', phonetic: 'xuésheng' }} size="sm" />
                <span className="text-fuchsia-400 font-bold text-sm">→</span>
                <span className="text-base font-black text-white font-['Noto_Sans_SC']">
                  我是学生
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSpeak('我是学生', 'zh')}
              className="px-3.5 py-2 rounded-xl bg-fuchsia-950/80 border border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-white text-xs font-bold text-fuchsia-300 flex items-center gap-1.5 transition-all shrink-0"
            >
              <Volume2 className="w-4 h-4" />
              <span>Escuchar Mandarín</span>
            </button>
          </div>

          {/* Card 3: Español de México (SVO: Sujeto + Verbo Conjugado + Complemento) */}
          <div className="p-4 rounded-2xl bg-[#0e0922] border border-amber-500/40 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-base">🇲🇽</span>
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  Equivalente en Español Mexicano
                </span>
              </div>
              <p className="text-sm text-slate-200 font-medium">
                "Yo soy estudiante" / <em>"En cuanto a mí, pues yo mero soy estudiante"</em>
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-amber-950/70 text-amber-300 text-[10px] font-bold border border-amber-500/30">
              Mismo significado, 3 arquitecturas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
