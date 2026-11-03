import { useState } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  Volume2,
  Sparkles,
  Music,
  Boxes,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  BarChart2,
  Trophy,
  Settings,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { KOREAN_LESSONS } from '../data/koreanLessons';
import { PracticeItem, ExampleItem } from '../types';
import { playClickSound, playChimeSound, playFanfare, speakKorean } from '../utils/audio';


interface KoreanAppViewProps {
  onOpenDesignExplorer?: () => void;
  backgroundVariant?: 'pagoda' | 'abstract' | 'aurora';
}

export function KoreanAppView({ onOpenDesignExplorer }: KoreanAppViewProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const lesson = KOREAN_LESSONS[currentLessonIndex];

  // Accordion state
  const [isPurposeOpen, setIsPurposeOpen] = useState(true);

  // Practice state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [speakingItem, setSpeakingItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'learn' | 'home' | 'progress' | 'challenges' | 'settings'>('learn');

  const handleSelectOption = (questionId: string, option: string) => {
    playClickSound();
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
    if (checked) {
      setChecked(false);
      setScore(null);
    }
  };

  const handleSpeak = async (text: string, id: string) => {
    setSpeakingItem(id);
    await speakKorean(text);
    setSpeakingItem(null);
  };

  const handleCheck = () => {
    let correctCount = 0;
    lesson.practice.forEach((item: PracticeItem) => {
      if (userAnswers[item.id] === item.correctParticle) {
        correctCount += 1;
      }
    });

    setChecked(true);
    setScore(correctCount);

    if (correctCount === lesson.practice.length) {
      playFanfare();
    } else if (correctCount > 0) {
      playChimeSound(true);
    } else {
      playChimeSound(false);
    }
  };

  const handleReset = () => {
    playClickSound();
    setUserAnswers({});
    setChecked(false);
    setScore(null);
  };

  const handleNextLesson = () => {
    playClickSound();
    setCurrentLessonIndex((prev) => (prev + 1) % KOREAN_LESSONS.length);
    setUserAnswers({});
    setChecked(false);
    setScore(null);
  };

  const allAnswered = lesson.practice.every((item: PracticeItem) => !!userAnswers[item.id]);


  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col min-h-screen text-slate-100 pb-24 select-none">
      {/* Glow aura ambient lights behind container */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-24 left-1/4 w-60 h-60 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

      {/* Top Navigation Bar (Mobile pattern following reference) */}
      <header className="sticky top-0 z-30 px-4 pt-3 pb-2 backdrop-blur-xl bg-[#090717]/70 border-b border-fuchsia-500/20 flex items-center justify-between gap-3">
        {/* Back Button */}
        <button
          onClick={() => {
            playClickSound();
            setCurrentLessonIndex((prev) => (prev === 0 ? KOREAN_LESSONS.length - 1 : prev - 1));
          }}
          aria-label="Lección anterior"
          className="w-10 h-10 rounded-xl bg-purple-950/60 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-300 hover:text-white hover:border-fuchsia-400 hover:bg-purple-900/60 transition-all active:scale-95 shadow-[0_0_12px_rgba(255,42,141,0.2)]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Center Title & Flag Pill */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-cyan-400/50 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(0,240,255,0.35)]">
            <span className="text-base" role="img" aria-label="Bandera de Corea del Sur">
              🇰🇷
            </span>
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold tracking-wider text-slate-200">Coreano</div>
            <div className="text-[11px] text-fuchsia-300 font-medium">{lesson.number}</div>
          </div>
        </div>

        {/* Lesson Progress Indicator */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-[11px] font-semibold tracking-wider text-slate-400">
            {currentLessonIndex + 1} / {KOREAN_LESSONS.length}
          </span>
          <div className="w-20 h-1.5 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-fuchsia-500/30 shadow-[0_0_8px_rgba(255,42,141,0.2)]">
            <div
              className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_6px_#ff2a8d]"
              style={{ width: `${((currentLessonIndex + 1) / KOREAN_LESSONS.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="px-4 pt-3 space-y-3.5">
        {/* Card 1: Main Title Banner */}
        <div className="relative rounded-2xl p-4 overflow-hidden bg-gradient-to-br from-purple-950/70 via-[#100a26]/85 to-[#070515]/95 border border-fuchsia-500/40 shadow-[0_8px_28px_rgba(0,0,0,0.6),0_0_20px_rgba(255,42,141,0.18)]">
          {/* Subtle Cyber Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-fuchsia-500 opacity-80" />
          
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-fuchsia-500 rounded-full shadow-[0_0_8px_#00f0ff]" />
            <h1 className="text-base font-bold text-slate-100 tracking-wide">
              {lesson.title}
            </h1>
          </div>

          {/* Central Holographic Glyphs */}
          <div className="my-2 py-1 flex items-center justify-center gap-3">
            <button
              onClick={() => handleSpeak(lesson.leftRule.particle, 'left-glyph')}
              className="group relative px-4 py-1.5 rounded-xl bg-fuchsia-950/40 border border-fuchsia-500/50 hover:border-fuchsia-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,42,141,0.4)]"
            >
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-fuchsia-200 to-fuchsia-400 font-['Noto_Sans_KR'] drop-shadow-[0_0_10px_rgba(255,42,141,0.8)]">
                {lesson.leftRule.particle}
              </span>
              <Volume2 className="w-3.5 h-3.5 text-fuchsia-300 absolute -bottom-1 -right-1 opacity-70 group-hover:opacity-100" />
            </button>

            <span className="text-2xl font-light text-slate-500 select-none">/</span>

            <button
              onClick={() => handleSpeak(lesson.rightRule.particle, 'right-glyph')}
              className="group relative px-4 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-400/50 hover:border-cyan-300 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-300 font-['Noto_Sans_KR'] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                {lesson.rightRule.particle}
              </span>
              <Volume2 className="w-3.5 h-3.5 text-cyan-300 absolute -bottom-1 -right-1 opacity-70 group-hover:opacity-100" />
            </button>
          </div>

          <p className="text-center text-xs text-slate-300/90 font-medium leading-relaxed">
            Sirven para marcar quién es el{' '}
            <span className="text-fuchsia-400 font-semibold drop-shadow-[0_0_6px_rgba(255,42,141,0.6)]">
              protagonista
            </span>{' '}
            de la frase.
          </p>
        </div>

        {/* Card 2: Collapsible Purpose Accordion */}
        <div className="rounded-xl overflow-hidden bg-[#100c24]/80 backdrop-blur-md border border-fuchsia-500/25 shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
          <button
            onClick={() => {
              playClickSound();
              setIsPurposeOpen(!isPurposeOpen);
            }}
            className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-fuchsia-500/20 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300 shadow-[0_0_8px_rgba(255,42,141,0.3)]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold text-slate-200">¿Para qué sirven?</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                isPurposeOpen ? 'rotate-180 text-fuchsia-400' : ''
              }`}
            />
          </button>

          {isPurposeOpen && (
            <div className="px-3.5 pb-3 pt-0">
              <div className="p-2.5 rounded-lg bg-gradient-to-r from-purple-950/50 to-indigo-950/40 border border-fuchsia-500/20 text-xs text-slate-300 leading-relaxed">
                Marcan el{' '}
                <span className="text-fuchsia-400 font-semibold">tema de la oración</span>, es
                decir,{' '}
                <span className="text-cyan-300 font-medium">de quién o de qué</span> vas a hablar o
                destacar.
              </div>
            </div>
          )}
        </div>

        {/* Card 3: The "Regla: la última letra" Rule Cards */}
        <div className="rounded-2xl p-3.5 bg-[#0e0a22]/85 backdrop-blur-md border border-indigo-500/30 shadow-[0_6px_22px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-[0_0_8px_rgba(99,102,241,0.3)]">
              <HelpCircle className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-200 tracking-wide">
              {lesson.ruleDescription}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Left Rule: Sin Piso (Termina en Vocal) */}
            <div className="rounded-xl p-3 bg-gradient-to-b from-fuchsia-950/30 via-[#180a22]/70 to-[#0c0514]/90 border border-fuchsia-500/40 flex flex-col items-center text-center shadow-[0_0_18px_rgba(255,42,141,0.15)] relative overflow-hidden group">
              <div className="w-7 h-7 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300 mb-1.5 shadow-[0_0_10px_rgba(255,42,141,0.4)]">
                <Music className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-fuchsia-300">
                {lesson.leftRule.title}
              </div>
              <div className="text-[9.5px] text-slate-400 mt-0.5">
                ({lesson.leftRule.condition})
              </div>

              {/* Big Glow Symbol */}
              <div className="my-2">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-fuchsia-400 font-['Noto_Sans_KR'] drop-shadow-[0_0_8px_rgba(255,42,141,0.7)]">
                  {lesson.leftRule.particle}
                </span>
                <div className="text-[10px] text-slate-500 -mt-0.5">↓</div>
              </div>

              <div className="w-full py-1 px-2 rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/40 text-[10px] font-semibold text-fuchsia-200 shadow-[0_0_10px_rgba(255,42,141,0.3)]">
                Se usa {lesson.leftRule.particle}
              </div>
            </div>

            {/* Right Rule: Con Piso (Termina en Consonante) */}
            <div className="rounded-xl p-3 bg-gradient-to-b from-cyan-950/30 via-[#071724]/70 to-[#040d16]/90 border border-cyan-400/40 flex flex-col items-center text-center shadow-[0_0_18px_rgba(0,240,255,0.15)] relative overflow-hidden group">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-1.5 shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                <Boxes className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-bold text-cyan-300">
                {lesson.rightRule.title}
              </div>
              <div className="text-[9.5px] text-slate-400 mt-0.5">
                ({lesson.rightRule.condition})
              </div>

              {/* Big Glow Symbol */}
              <div className="my-2">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-300 font-['Noto_Sans_KR'] drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
                  {lesson.rightRule.particle}
                </span>
                <div className="text-[10px] text-slate-500 -mt-0.5">↓</div>
              </div>

              <div className="w-full py-1 px-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-semibold text-cyan-200 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                Se usa {lesson.rightRule.particle}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Ejemplos Interactivos con Audio */}
        <div className="rounded-xl p-3.5 bg-[#0d0920]/80 backdrop-blur-md border border-indigo-400/20 shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_6px_rgba(245,158,11,0.3)]">
              <Lightbulb className="w-3 h-3" />
            </div>
            <span className="text-xs font-bold text-slate-200">Ejemplos con pronunciación</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {lesson.examples.slice(0, 2).map((eg: ExampleItem, idx: number) => (
              <button

                key={idx}
                onClick={() => handleSpeak(eg.combined, `eg-${idx}`)}
                className={`p-2.5 rounded-lg border text-left transition-all active:scale-95 group relative ${
                  idx === 0
                    ? 'bg-fuchsia-950/25 border-fuchsia-500/30 hover:border-fuchsia-400 shadow-[0_0_12px_rgba(255,42,141,0.12)]'
                    : 'bg-cyan-950/25 border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.12)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-200">
                    {eg.subject}
                    <span className="text-[10px] text-slate-400 font-normal">({eg.subjectMeaning})</span> +{' '}
                    <span className={idx === 0 ? 'text-fuchsia-400 font-bold' : 'text-cyan-400 font-bold'}>
                      {eg.particle}
                    </span>{' '}
                    →{' '}
                    <span
                      className={`font-bold font-['Noto_Sans_KR'] ${
                        idx === 0
                          ? 'text-fuchsia-300 drop-shadow-[0_0_6px_rgba(255,42,141,0.5)]'
                          : 'text-cyan-300 drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]'
                      }`}
                    >
                      {eg.combined}
                    </span>
                  </div>
                  <Volume2
                    className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                      speakingItem === `eg-${idx}`
                        ? 'text-amber-300 animate-pulse'
                        : idx === 0
                        ? 'text-fuchsia-400/70'
                        : 'text-cyan-400/70'
                    }`}
                  />
                </div>
                <div className="text-[9.5px] text-slate-400 mt-1 italic">{eg.pronunciation}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Card 5: Tu Práctica (Interactive Practice Quiz) */}
        <div className="rounded-2xl p-4 bg-gradient-to-b from-[#130d2e]/90 via-[#0c081e]/95 to-[#070514] border border-cyan-400/35 shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(0,240,255,0.15)] relative">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-xs font-bold text-slate-100 tracking-wide">Tu práctica</h2>
            </div>
            {checked && score !== null && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 shadow-[0_0_8px_rgba(0,240,255,0.3)]">
                {score} / {lesson.practice.length} correctas
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-300/80 mb-3 ml-8">
            Añade la etiqueta correcta a cada palabra:
          </p>

          {/* Exercise Items List */}
          <div className="space-y-2.5">
            {lesson.practice.map((item: PracticeItem, index: number) => {

              const selected = userAnswers[item.id];
              const isCorrect = checked && selected === item.correctParticle;
              const isWrong = checked && selected && selected !== item.correctParticle;

              return (
                <div
                  key={item.id}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isCorrect
                      ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                      : isWrong
                      ? 'bg-rose-950/30 border-rose-500/50 shadow-[0_0_12px_rgba(244,63,94,0.2)]'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    {/* Number badge and word */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40 text-[10px] font-bold text-fuchsia-300 flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <button
                        onClick={() => handleSpeak(item.korean, item.id)}
                        className="flex items-center gap-1.5 text-left group"
                        title="Haz clic para escuchar"
                      >
                        <span className="text-sm font-bold text-slate-100 font-['Noto_Sans_KR'] tracking-wide group-hover:text-cyan-300 transition-colors">
                          {item.korean}
                        </span>
                        <span className="text-[10px] text-slate-400">({item.spanish})</span>
                        <Volume2 className="w-3 h-3 text-slate-500 group-hover:text-cyan-300 opacity-60 group-hover:opacity-100" />
                      </button>
                    </div>

                    <span className="text-slate-500 text-xs">→</span>

                    {/* Interactive Selection Options (Pills from reference) */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.options.map((opt: string) => {
                        const isChosen = selected === opt;
                        return (
                          <button
                            key={opt}
                            disabled={checked}
                            onClick={() => handleSelectOption(item.id, opt)}
                            className={`min-w-[44px] h-8 px-2.5 rounded-lg text-xs font-bold transition-all font-['Noto_Sans_KR'] ${
                              isChosen
                                ? opt === '는' || opt === '가'
                                  ? 'bg-fuchsia-500 text-white shadow-[0_0_12px_rgba(255,42,141,0.6)] border border-fuchsia-300 scale-105'
                                  : 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.6)] border border-cyan-200 scale-105'
                                : 'bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feedback explanation if checked */}
                  {checked && (
                    <div className="mt-2 pt-2 border-t border-white/5 flex items-start gap-1.5 text-[10.5px]">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-emerald-300">{item.explanation}</span>
                        </>
                      ) : isWrong ? (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span className="text-rose-300">
                            Respuesta: <strong className="font-bold underline">{item.correctParticle}</strong>. {item.explanation}
                          </span>
                        </>
                      ) : (
                        <span className="text-amber-300">No respondida. La correcta es: {item.correctParticle}</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Floating Gaegu-Style Sticky Note & Korean Sticker (referencing image 2!) */}
          <div className="mt-4 relative p-3 rounded-xl bg-gradient-to-br from-indigo-950/70 to-purple-950/80 border border-fuchsia-500/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{lesson.tipNote.title}</span>
                </div>
                <div className="space-y-0.5 text-[11px] text-slate-300">
                  {lesson.tipNote.content.map((line: string, i: number) => (
                    <div key={i}>• {line}</div>
                  ))}
                </div>
              </div>


              {/* Glowing Calligraphy Sticker */}
              <div
                onClick={() => {
                  playFanfare();
                  speakKorean('화이팅');
                }}
                className="cursor-pointer group relative px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-600/30 to-purple-600/30 border border-pink-400/50 shadow-[0_0_15px_rgba(255,42,141,0.35)] -rotate-3 hover:rotate-0 hover:scale-110 transition-all select-none shrink-0"
                title="Toca para escuchar ánimo"
              >
                <span className="font-['Gaegu'] text-lg font-bold text-pink-300 tracking-wide drop-shadow-[0_0_8px_rgba(255,42,141,0.8)]">
                  {lesson.tipNote.stickerText}
                </span>
                <span className="absolute -top-1.5 -right-1 text-xs animate-bounce">✨</span>
              </div>
            </div>
          </div>

          {/* Bottom Action CTA: Comprobar / Siguiente */}
          <div className="mt-4 flex gap-2">
            {!checked ? (
              <button
                disabled={!allAnswered}
                onClick={handleCheck}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  allAnswered
                    ? 'bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 text-white shadow-[0_0_24px_rgba(255,42,141,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-slate-800/60 text-slate-500 border border-slate-700/50 cursor-not-allowed'
                }`}
              >
                <span>Comprobar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-full flex gap-2">
                <button
                  onClick={handleReset}
                  className="py-3 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reintentar</span>
                </button>
                <button
                  onClick={handleNextLesson}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Siguiente Lección</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Quick Shortcut to Design Explorer */}
        {onOpenDesignExplorer && (
          <div className="pt-1">
            <button
              onClick={() => {
                playClickSound();
                onOpenDesignExplorer();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-950/60 via-purple-900/40 to-slate-900/60 border border-cyan-400/40 hover:border-cyan-300 text-xs font-semibold text-cyan-200 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_22px_rgba(0,240,255,0.35)] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Ver Biblioteca de Diseños, Stickers y Gráficos Abstractos</span>
            </button>
          </div>
        )}
      </main>

      {/* Bottom Nav Bar with glowing Lotus flower emblem (as seen in photo 2) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto px-4 py-2 bg-[#090616]/90 backdrop-blur-xl border-t border-fuchsia-500/30 flex items-center justify-between text-slate-400">
        <button
          onClick={() => {
            playClickSound();
            setActiveTab('home');
          }}
          className={`flex flex-col items-center gap-1 min-w-[50px] transition-colors ${
            activeTab === 'home' ? 'text-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-medium">Inicio</span>
        </button>

        <button
          onClick={() => {
            playClickSound();
            setActiveTab('progress');
          }}
          className={`flex flex-col items-center gap-1 min-w-[50px] transition-colors ${
            activeTab === 'progress' ? 'text-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span className="text-[10px] font-medium">Progreso</span>
        </button>

        {/* Center Glowing Lotus Emblem */}
        <button
          onClick={() => {
            playFanfare();
            setActiveTab('learn');
          }}
          className="relative -top-3 w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-500 p-0.5 shadow-[0_0_20px_rgba(255,42,141,0.6)] hover:scale-105 active:scale-95 transition-transform flex items-center justify-center group"
          title="Modo Aprendizaje"
        >
          <div className="w-full h-full rounded-full bg-[#0d0920] flex items-center justify-center">
            {/* Korean Dancheong Lotus SVG */}
            <svg
              className="w-6 h-6 text-fuchsia-300 group-hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(255,42,141,0.8)] transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C12 2 7 8 7 13C7 16.5 9.5 19 12 19C14.5 19 17 16.5 17 13C17 8 12 2 12 2Z" />
              <path d="M7 13C7 13 3 14 3 17C3 19 5 21 8 21C10.5 21 12 19.5 12 19" />
              <path d="M17 13C17 13 21 14 21 17C21 19 19 21 16 21C13.5 21 12 19.5 12 19" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => {
            playClickSound();
            setActiveTab('challenges');
          }}
          className={`flex flex-col items-center gap-1 min-w-[50px] transition-colors ${
            activeTab === 'challenges' ? 'text-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span className="text-[10px] font-medium">Retos</span>
        </button>

        <button
          onClick={() => {
            playClickSound();
            setActiveTab('settings');
          }}
          className={`flex flex-col items-center gap-1 min-w-[50px] transition-colors ${
            activeTab === 'settings' ? 'text-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span className="text-[10px] font-medium">Ajustes</span>
        </button>
      </nav>
    </div>
  );
}
