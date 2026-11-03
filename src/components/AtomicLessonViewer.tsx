import React, { useState } from 'react';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Layers,
  Award,
  BookOpen,
  RotateCcw,
  Flame,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Check
} from 'lucide-react';
import { AtomicLesson, DetailedExample, InteractiveExercise, RegionalSlangItem } from '../types';
import { speakKorean, speakMandarin, playClickSound, playChimeSound, playFanfare } from '../utils/audio';

interface AtomicLessonViewerProps {
  lesson: AtomicLesson;
  onOpenHskModal?: () => void;
  accentBorderClass?: string;
}

export const AtomicLessonViewer: React.FC<AtomicLessonViewerProps> = ({
  lesson,
  onOpenHskModal,
  accentBorderClass = 'border-cyan-400/40'
}) => {
  // Navigation tabs within the lesson
  const [activeTab, setActiveTab] = useState<'rules' | 'examples' | 'exercises' | 'slang'>('rules');

  // Audio playing state
  const [activeAudioItem, setActiveAudioItem] = useState<string | null>(null);

  // Example expansion state
  const [expandedExampleId, setExpandedExampleId] = useState<number | null>(1);

  // Exercise state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [checkedExercises, setCheckedExercises] = useState<Record<number, boolean>>({});
  const [scoreCount, setScoreCount] = useState<number>(0);
  const [exerciseFilter, setExerciseFilter] = useState<'all' | 'unanswered' | 'completed'>('all');

  const isKorean = lesson.language === 'korean';

  const handleSpeak = async (text: string, identifier: string) => {
    setActiveAudioItem(identifier);
    if (isKorean) {
      await speakKorean(text, 0.85);
    } else {
      await speakMandarin(text, 0.85);
    }
    setActiveAudioItem(null);
  };

  const handleSelectOption = (exerciseId: number, option: string) => {
    playClickSound();
    setSelectedAnswers((prev) => ({
      ...prev,
      [exerciseId]: option
    }));
    // If it was already checked, uncheck to let user re-verify
    if (checkedExercises[exerciseId]) {
      setCheckedExercises((prev) => {
        const copy = { ...prev };
        delete copy[exerciseId];
        return copy;
      });
    }
  };

  const handleCheckSingleExercise = (exercise: InteractiveExercise) => {
    const userAnswer = selectedAnswers[exercise.id];
    if (!userAnswer) return;

    const isCorrect = userAnswer === exercise.correctAnswer;
    setCheckedExercises((prev) => ({
      ...prev,
      [exercise.id]: true
    }));

    if (isCorrect) {
      playChimeSound(true);
      setScoreCount((prev) => prev + 1);
    } else {
      playChimeSound(false);
    }
  };

  const handleCheckAllExercises = () => {
    let correct = 0;
    const newChecked: Record<number, boolean> = {};

    lesson.exercises20.forEach((ex) => {
      newChecked[ex.id] = true;
      if (selectedAnswers[ex.id] === ex.correctAnswer) {
        correct += 1;
      }
    });

    setCheckedExercises(newChecked);
    setScoreCount(correct);

    if (correct === lesson.exercises20.length) {
      playFanfare();
    } else if (correct > 0) {
      playChimeSound(true);
    } else {
      playChimeSound(false);
    }
  };

  const handleResetExercises = () => {
    playClickSound();
    setSelectedAnswers({});
    setCheckedExercises({});
    setScoreCount(0);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const totalExercises = lesson.exercises20.length;

  return (
    <div className="space-y-6">
      {/* Lesson Header Ribbon */}
      <div className="rounded-3xl p-6 bg-gradient-to-r from-slate-900/90 via-[#0e0926]/90 to-slate-950/95 border border-white/10 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                {lesson.lessonCode}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-fuchsia-950/80 border border-fuchsia-400/40 text-fuchsia-300">
                {lesson.levelBadge}
              </span>
              {lesson.relatedHskPages && onOpenHskModal && (
                <button
                  type="button"
                  onClick={onOpenHskModal}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-950/80 border border-amber-400/50 text-amber-300 hover:bg-amber-900 flex items-center gap-1 transition-colors"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>Ver en Libro HSK 1</span>
                </button>
              )}
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                {lesson.title}
              </h2>
              <span className="text-base sm:text-lg font-bold text-fuchsia-400 font-['Noto_Sans_KR']">
                {lesson.nativeTitle}
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-2xl">{lesson.subtitle}</p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/40 border border-white/10 shrink-0">
            <div className="text-center px-2">
              <div className="text-xs font-bold text-slate-400">Ejemplos</div>
              <div className="text-lg font-black text-cyan-400">16 Atómicos</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center px-2">
              <div className="text-xs font-bold text-slate-400">Práctica</div>
              <div className="text-lg font-black text-fuchsia-400">20 Retos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 overflow-x-auto">
        <button
          type="button"
          onClick={() => {
            playClickSound();
            setActiveTab('rules');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'rules'
              ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Reglas & Anatomía</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playClickSound();
            setActiveTab('examples');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'examples'
              ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>16 Ejemplos Atómicos</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playClickSound();
            setActiveTab('exercises');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'exercises'
              ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>20 Ejercicios ({answeredCount}/20)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playClickSound();
            setActiveTab('slang');
          }}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === 'slang'
              ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>Jergas & Dialectos Regionales</span>
        </button>
      </div>

      {/* ================= TAB 1: RULES & ANATOMY ================= */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          {/* Professor Intro Card */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900/60 border border-purple-400/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
              <MessageCircle className="w-4 h-4 text-purple-400" />
              <span>Cátedra Magistral: {lesson.professorIntro.professorName}</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              "{lesson.professorIntro.academicMessage}"
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20 text-xs text-amber-300 flex items-start gap-2">
              <span className="text-base">🇲🇽</span>
              <div>
                <strong>Anclaje Cultural para México: </strong>
                {lesson.professorIntro.mexicanLearningTip}
              </div>
            </div>
          </div>

          {/* The Two Complementary Rules */}
          <div className="space-y-3">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-black text-white font-['Outfit']">
                {lesson.foundationRule.headline}
              </h3>
              <p className="text-xs text-slate-400">{lesson.foundationRule.subheadline}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Rule Card */}
              <div className="glass-panel p-5 rounded-2xl border border-fuchsia-400/40 bg-fuchsia-950/20 shadow-[0_0_24px_rgba(255,42,141,0.2)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-fuchsia-300 uppercase tracking-wider">
                    {lesson.foundationRule.ruleLeft.label}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-fuchsia-900/80 text-fuchsia-200 border border-fuchsia-400/30 font-bold">
                    Regla A
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-fuchsia-500/30 text-center">
                  <div className="text-xl sm:text-2xl font-black text-fuchsia-300 font-['Noto_Sans_KR']">
                    {lesson.foundationRule.ruleLeft.sample}
                  </div>
                </div>

                <div className="text-xs space-y-1 text-slate-300">
                  <div>
                    <strong className="text-fuchsia-300">Condición: </strong>
                    {lesson.foundationRule.ruleLeft.condition}
                  </div>
                  <div>
                    <strong className="text-fuchsia-300">Fórmula: </strong>
                    {lesson.foundationRule.ruleLeft.indicator}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1">
                    {lesson.foundationRule.ruleLeft.why}
                  </div>
                </div>
              </div>

              {/* Right Rule Card */}
              <div className="glass-panel p-5 rounded-2xl border border-cyan-400/40 bg-cyan-950/20 shadow-[0_0_24px_rgba(0,240,255,0.2)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider">
                    {lesson.foundationRule.ruleRight.label}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-900/80 text-cyan-200 border border-cyan-400/30 font-bold">
                    Regla B
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-cyan-500/30 text-center">
                  <div className="text-xl sm:text-2xl font-black text-cyan-300 font-['Noto_Sans_KR']">
                    {lesson.foundationRule.ruleRight.sample}
                  </div>
                </div>

                <div className="text-xs space-y-1 text-slate-300">
                  <div>
                    <strong className="text-cyan-300">Condición: </strong>
                    {lesson.foundationRule.ruleRight.condition}
                  </div>
                  <div>
                    <strong className="text-cyan-300">Fórmula: </strong>
                    {lesson.foundationRule.ruleRight.indicator}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1">
                    {lesson.foundationRule.ruleRight.why}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Morphological Breakdown (Qué se quita, de dónde, por qué, cuándo, qué se pega) */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-[#0d0922] via-[#100b2a] to-[#070514] border border-cyan-400/40 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h4 className="text-base font-extrabold text-white font-['Outfit']">
                {lesson.foundationRule.anatomyBreakdown.title}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  1. ¿Qué se quita?
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {lesson.foundationRule.anatomyBreakdown.whatToRemove}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  2. ¿De dónde se quita?
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {lesson.foundationRule.anatomyBreakdown.whereFrom}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-rose-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  3. ¿Por qué se quita?
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {lesson.foundationRule.anatomyBreakdown.whyRemove}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  4. ¿Cuándo se quita?
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {lesson.foundationRule.anatomyBreakdown.whenRemove}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  5. ¿Qué pegamento se añade?
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {lesson.foundationRule.anatomyBreakdown.whatToGlue}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  6. ¿Por qué este pegamento?
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {lesson.foundationRule.anatomyBreakdown.whyGlue}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: 16 ATOMIC EXAMPLES ================= */}
      {activeTab === 'examples' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-black text-white font-['Outfit'] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Colección Completa de 16 Ejemplos Atómicos</span>
              </h3>
              <p className="text-xs text-slate-400">
                Cada ejemplo desglosado elemento por elemento: [Sujeto/Persona] + [Pegamento] + [Objeto] + [Acción], con pronunciación para México.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.examples16.map((ex: DetailedExample) => {
              const isExpanded = expandedExampleId === ex.id;
              const isSpeaking = activeAudioItem === `ex-${ex.id}`;

              return (
                <div
                  key={ex.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-slate-900/95 border-cyan-400/60 shadow-[0_0_24px_rgba(0,240,255,0.25)]'
                      : 'bg-slate-900/60 border-white/10 hover:border-white/25'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => {
                      playClickSound();
                      setExpandedExampleId(isExpanded ? null : ex.id);
                    }}
                    className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-black flex items-center justify-center shrink-0">
                        {ex.id}
                      </span>
                      <div>
                        <div className="text-lg font-black text-white font-['Noto_Sans_KR']">
                          {ex.original}
                        </div>
                        <div className="text-xs text-cyan-300 font-semibold">{ex.naturalSpanish}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(ex.audioText, `ex-${ex.id}`);
                        }}
                        className={`w-8 h-8 rounded-xl bg-slate-800 border border-white/10 hover:border-cyan-400 text-cyan-300 flex items-center justify-center transition-all ${
                          isSpeaking ? 'animate-pulse text-cyan-400 ring-2 ring-cyan-400/50' : ''
                        }`}
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/10">
                      {/* Mexican Phonetic Anchor */}
                      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-amber-300">
                          <span>🇲🇽 Fonética para Mexicanos:</span>
                        </div>
                        <p className="text-slate-200 font-mono text-[11px]">{ex.phoneticGuide}</p>
                      </div>

                      {/* Literal Assembly Pieces */}
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                          Ensamblaje Anatómico:
                        </span>
                        <div className="text-xs text-slate-200 font-medium">
                          {ex.literalBreakdown}
                        </div>
                      </div>

                      {/* Deconstruction Details Grid */}
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                          <span className="text-slate-400 font-semibold block">Sujeto / Palabra:</span>
                          <span className="text-white font-bold">{ex.deconstruction.subjectOrPerson}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                          <span className="text-slate-400 font-semibold block">Pegamento / Etiqueta:</span>
                          <span className="text-fuchsia-300 font-bold">{ex.deconstruction.glueParticleOrLabel}</span>
                        </div>
                      </div>

                      {/* Professor Insight */}
                      <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-slate-300 leading-relaxed">
                        <strong className="text-purple-300">Cátedra: </strong>
                        {ex.academicNote}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 3: 20 INTERACTIVE EXERCISES ================= */}
      {activeTab === 'exercises' && (
        <div className="space-y-6">
          {/* Header Score & Action Bar */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-cyan-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-extrabold text-white font-['Outfit']">
                  Laboratorio de 20 Ejercicios Interactivos
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Selecciona la respuesta correcta en cada reactivo. Pulsa "Comprobar Todos" o verifica uno por uno.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                <span>Aciertos:</span>
                <span className="text-cyan-400 font-black text-sm">
                  {scoreCount} / {totalExercises}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckAllExercises}
                className="py-2 px-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:opacity-90 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Comprobar Todos</span>
              </button>

              <button
                type="button"
                onClick={handleResetExercises}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Reiniciar respuestas"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Exercises List (All 20) */}
          <div className="space-y-4">
            {lesson.exercises20.map((ex: InteractiveExercise, index: number) => {
              const selected = selectedAnswers[ex.id];
              const isChecked = checkedExercises[ex.id];
              const isCorrect = selected === ex.correctAnswer;
              const isSpeaking = activeAudioItem === `ex-prompt-${ex.id}`;

              return (
                <div
                  key={ex.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 space-y-4 ${
                    isChecked
                      ? isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                        : 'bg-rose-950/20 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                      : selected
                      ? 'bg-slate-900/90 border-cyan-400/40'
                      : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-slate-800 border border-white/10 text-cyan-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white font-['Outfit']">{ex.question}</h4>
                        {ex.targetWordOrPhrase && (
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">
                            <span className="text-base font-black text-cyan-300 font-['Noto_Sans_KR']">
                              {ex.targetWordOrPhrase}
                            </span>
                            {ex.audioPrompt && (
                              <button
                                type="button"
                                onClick={() => handleSpeak(ex.audioPrompt!, `ex-prompt-${ex.id}`)}
                                className={`text-slate-400 hover:text-cyan-300 transition-colors ${
                                  isSpeaking ? 'text-cyan-400 animate-pulse' : ''
                                }`}
                                title="Escuchar audio"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {isChecked && (
                      <span className="shrink-0 flex items-center gap-1 text-xs font-black">
                        {isCorrect ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Correcto</span>
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            <span>Incorrecto</span>
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Mexican Pedagogical Hint */}
                  <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold shrink-0">🇲🇽 Pista:</span>
                    <span>{ex.hintForMexicanStudents}</span>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ex.options.map((option) => {
                      const isOptionSelected = selected === option;
                      let optionStyle =
                        'bg-slate-800/80 border-white/10 text-slate-200 hover:border-cyan-400/50 hover:bg-slate-800';

                      if (isChecked) {
                        if (option === ex.correctAnswer) {
                          optionStyle = 'bg-emerald-950/70 border-emerald-400 text-emerald-200 font-bold';
                        } else if (isOptionSelected && !isCorrect) {
                          optionStyle = 'bg-rose-950/70 border-rose-400 text-rose-200 line-through';
                        } else {
                          optionStyle = 'bg-slate-900/50 border-white/5 text-slate-500';
                        }
                      } else if (isOptionSelected) {
                        optionStyle =
                          'bg-gradient-to-r from-fuchsia-600/30 to-cyan-500/30 border-cyan-400 text-white font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]';
                      }

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelectOption(ex.id, option)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-2 select-none ${optionStyle}`}
                        >
                          <span className="font-['Noto_Sans_KR'] text-sm">{option}</span>
                          {isOptionSelected && (
                            <span className="w-4 h-4 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Individual Check Button (if not checked yet) */}
                  {!isChecked && selected && (
                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => handleCheckSingleExercise(ex)}
                        className="py-1.5 px-3 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold transition-all"
                      >
                        Comprobar este reactivo
                      </button>
                    </div>
                  )}

                  {/* Feedback Explanation (Visible after checking) */}
                  {isChecked && (
                    <div
                      className={`p-3 rounded-xl border text-xs space-y-1 ${
                        isCorrect
                          ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                          : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                      }`}
                    >
                      <div className="font-bold">{ex.explanation}</div>
                      <div className="text-[11px] text-slate-300 opacity-90">{ex.academicInsight}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 4: REGIONAL SLANG & MODISMS ================= */}
      {activeTab === 'slang' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/60 to-fuchsia-950/50 border border-fuchsia-400/40 space-y-1">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-base font-extrabold text-white font-['Outfit']">
                Jergas Juveniles, Redes Sociales y Modismos Regionales
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              Palabras que únicamente utilizan los nativos en la calle, en series, en KakaoTalk, WeChat y Douyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.regionalSlang.map((slang: RegionalSlangItem, idx: number) => {
              const isSpeaking = activeAudioItem === `slang-${idx}`;

              return (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-slate-900/80 border border-white/10 hover:border-fuchsia-500/40 transition-all space-y-3 relative overflow-hidden group shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-950 border border-fuchsia-400/40 text-fuchsia-300 uppercase tracking-wider">
                        {slang.regionOrContext}
                      </span>
                      <h4 className="text-xl font-black text-white font-['Noto_Sans_KR'] mt-1">
                        {slang.term}
                      </h4>
                      <div className="text-xs text-cyan-300 font-mono">{slang.phonetic}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSpeak(slang.term.split(' ')[0], `slang-${idx}`)}
                      className={`w-9 h-9 rounded-xl bg-slate-800 border border-white/10 text-cyan-300 flex items-center justify-center hover:border-cyan-400 transition-all ${
                        isSpeaking ? 'animate-pulse ring-2 ring-cyan-400' : ''
                      }`}
                      title="Escuchar pronunciación nativa"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      <strong className="text-slate-400">Significado: </strong>
                      {slang.meaning}
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-300 font-semibold text-[11px]">
                      🇲🇽 {slang.mexicanEquivalent}
                    </div>
                  </div>

                  {/* Example Dialogue */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 text-xs">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Ejemplo en Diálogo Real:
                    </span>
                    <div className="font-['Noto_Sans_KR'] text-slate-200 font-semibold">
                      {slang.exampleDialogue.dialogue}
                    </div>
                    <div className="text-[11px] text-cyan-300 italic">
                      "{slang.exampleDialogue.spanish}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
