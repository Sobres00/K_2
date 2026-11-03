import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  Check,
  Sparkles,
  HelpCircle,
  Filter
} from 'lucide-react';
import { AtomicLesson, InteractiveExercise } from '../types';
import { speakKorean, speakMandarin, playClickSound, playChimeSound, playFanfare } from '../utils/audio';

interface InteractiveExercisesSpaceProps {
  lesson: AtomicLesson;
}

export const InteractiveExercisesSpace: React.FC<InteractiveExercisesSpaceProps> = ({ lesson }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [checkedExercises, setCheckedExercises] = useState<Record<number, boolean>>({});
  const [scoreCount, setScoreCount] = useState<number>(0);
  const [filterType, setFilterType] = useState<'all' | 'unanswered' | 'correct' | 'wrong'>('all');
  const [speakingPrompt, setSpeakingPrompt] = useState<string | null>(null);

  const isKorean = lesson.language === 'korean';

  const handleSpeak = async (text: string, id: string) => {
    setSpeakingPrompt(id);
    if (isKorean) {
      await speakKorean(text, 0.85);
    } else {
      await speakMandarin(text, 0.85);
    }
    setSpeakingPrompt(null);
  };

  const handleSelectOption = (exerciseId: number, option: string) => {
    playClickSound();
    setSelectedAnswers((prev) => ({
      ...prev,
      [exerciseId]: option
    }));
    // If it was already checked, uncheck to let user re-attempt
    if (checkedExercises[exerciseId]) {
      setCheckedExercises((prev) => {
        const copy = { ...prev };
        delete copy[exerciseId];
        return copy;
      });
    }
  };

  const handleCheckSingle = (exercise: InteractiveExercise) => {
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

  const handleCheckAll = () => {
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

  const handleReset = () => {
    playClickSound();
    setSelectedAnswers({});
    setCheckedExercises({});
    setScoreCount(0);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const totalExercises = lesson.exercises20.length;
  const progressPercent = Math.round((answeredCount / totalExercises) * 100);

  const filteredExercises = lesson.exercises20.filter((ex) => {
    const isAnswered = !!selectedAnswers[ex.id];
    const isChecked = !!checkedExercises[ex.id];
    const isCorrect = selectedAnswers[ex.id] === ex.correctAnswer;

    if (filterType === 'unanswered') return !isAnswered;
    if (filterType === 'correct') return isChecked && isCorrect;
    if (filterType === 'wrong') return isChecked && !isCorrect;
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 1. Score & Progress Dashboard */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900/90 via-[#0e0926]/90 to-slate-950/95 border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(0,240,255,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
              Espacio 3: Laboratorio de 20 Ejercicios Interactivos
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-fuchsia-950/80 border border-fuchsia-400/40 text-fuchsia-300">
              Evaluación Inmediata
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
            Entrenamiento Práctico y Comprobación en Tiempo Real
          </h2>

          <p className="text-xs text-slate-300 max-w-xl">
            Resuelve los 20 reactivos aplicando las reglas aprendidas. Cada ejercicio te revelará la explicación detallada y su justificación morfológica.
          </p>

          {/* Progress Bar */}
          <div className="w-full max-w-md pt-2 space-y-1">
            <div className="flex justify-between text-[11px] font-bold text-slate-400">
              <span>Progreso: {answeredCount} de {totalExercises} contestados</span>
              <span className="text-cyan-400">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-500 shadow-[0_0_10px_#00f0ff]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons & Score Card */}
        <div className="flex items-center gap-3 flex-wrap shrink-0">
          <div className="p-3.5 rounded-2xl bg-black/60 border border-cyan-400/40 text-center min-w-[110px] shadow-inner">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Aciertos</div>
            <div className="text-2xl font-black text-cyan-300 font-['Outfit']">
              {scoreCount} <span className="text-xs text-slate-500 font-normal">/ {totalExercises}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleCheckAll}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:opacity-95 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Comprobar Todos</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar Respuestas</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Filter Bar */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 overflow-x-auto">
        <span className="text-xs font-bold text-slate-400 px-3 flex items-center gap-1.5 shrink-0">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>Filtrar Reactivos:</span>
        </span>

        <button
          type="button"
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            filterType === 'all'
              ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_#00f0ff]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Todos ({totalExercises})
        </button>

        <button
          type="button"
          onClick={() => setFilterType('unanswered')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            filterType === 'unanswered'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Pendientes ({totalExercises - answeredCount})
        </button>

        <button
          type="button"
          onClick={() => setFilterType('correct')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            filterType === 'correct'
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Correctos ({scoreCount})
        </button>
      </div>

      {/* 3. List of 20 Interactive Exercises */}
      <div className="space-y-4">
        {filteredExercises.map((ex: InteractiveExercise, idx: number) => {
          const selected = selectedAnswers[ex.id];
          const isChecked = checkedExercises[ex.id];
          const isCorrect = selected === ex.correctAnswer;
          const isSpeaking = speakingPrompt === `prompt-${ex.id}`;

          return (
            <div
              key={ex.id}
              className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 ${
                isChecked
                  ? isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/60 shadow-[0_0_24px_rgba(16,185,129,0.2)]'
                    : 'bg-rose-950/20 border-rose-500/60 shadow-[0_0_24px_rgba(244,63,94,0.2)]'
                  : selected
                  ? 'bg-slate-900/95 border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                  : 'bg-slate-900/70 border-white/10 hover:border-white/25'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 text-cyan-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {ex.id}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                      {ex.question}
                    </h3>

                    {ex.targetWordOrPhrase && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-black/50 border border-cyan-400/30">
                        <span className="text-lg font-black text-cyan-300 font-['Noto_Sans_KR']">
                          {ex.targetWordOrPhrase}
                        </span>
                        {ex.audioPrompt && (
                          <button
                            type="button"
                            onClick={() => handleSpeak(ex.audioPrompt!, `prompt-${ex.id}`)}
                            className={`p-1 text-slate-400 hover:text-cyan-300 transition-colors ${
                              isSpeaking ? 'text-cyan-400 animate-pulse' : ''
                            }`}
                            title="Escuchar audio"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {isChecked && (
                  <span className="shrink-0 flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-full border">
                    {isCorrect ? (
                      <span className="text-emerald-300 border-emerald-500/40 bg-emerald-950/80 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>¡Correcto!</span>
                      </span>
                    ) : (
                      <span className="text-rose-300 border-rose-500/40 bg-rose-950/80 flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span>Incorrecto</span>
                      </span>
                    )}
                  </span>
                )}
              </div>

              {/* Mexican Pedagogical Hint */}
              <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">🇲🇽 Pista de Cátedra:</span>
                <span className="leading-relaxed">{ex.hintForMexicanStudents}</span>
              </div>

              {/* Interactive Glass Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ex.options.map((option) => {
                  const isOptionSelected = selected === option;
                  let optionClass =
                    'bg-slate-800/80 border-white/10 text-slate-200 hover:border-cyan-400/50 hover:bg-slate-800';

                  if (isChecked) {
                    if (option === ex.correctAnswer) {
                      optionClass = 'bg-emerald-950/80 border-emerald-400 text-emerald-100 font-bold ring-1 ring-emerald-400/50';
                    } else if (isOptionSelected && !isCorrect) {
                      optionClass = 'bg-rose-950/80 border-rose-400 text-rose-200 line-through';
                    } else {
                      optionClass = 'bg-slate-900/50 border-white/5 text-slate-500';
                    }
                  } else if (isOptionSelected) {
                    optionClass =
                      'bg-gradient-to-r from-fuchsia-600/30 to-cyan-500/30 border-cyan-400 text-white font-bold shadow-[0_0_14px_rgba(0,240,255,0.4)]';
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(ex.id, option)}
                      className={`p-3.5 rounded-2xl border text-left text-xs transition-all flex items-center justify-between gap-2 select-none ${optionClass}`}
                    >
                      <span className="font-['Noto_Sans_KR'] text-sm font-semibold">{option}</span>
                      {isOptionSelected && (
                        <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Single Check Action Button */}
              {!isChecked && selected && (
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => handleCheckSingle(ex)}
                    className="py-2 px-4 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold transition-all shadow-sm"
                  >
                    Comprobar este reactivo
                  </button>
                </div>
              )}

              {/* Feedback and Anatomical Justification */}
              {isChecked && (
                <div
                  className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                    isCorrect
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    <span>{ex.explanation}</span>
                  </div>
                  <div className="text-[11px] text-slate-300/90 leading-relaxed">
                    <strong className="text-cyan-300">Desglose Anatómico: </strong>
                    {ex.academicInsight}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
