import React from 'react';
import { Sparkles, Check, Eye } from 'lucide-react';
import { VisualTheme, VisualThemeId } from '../types';
import { VISUAL_THEMES } from '../data/dualCurriculum';
import { playClickSound, playChimeSound } from '../utils/audio';

interface ThemeSelectorProps {
  currentThemeId: VisualThemeId;
  onSelectTheme: (themeId: VisualThemeId) => void;
  onPreviewImage: (imageUrl: string) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentThemeId,
  onSelectTheme,
  onPreviewImage
}) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-0.5 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#0c081e] rounded-[6px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white font-['Outfit'] tracking-tight">
              Tus 3 Conceptos Visuales Seleccionados
            </h3>
            <p className="text-xs text-slate-400">
              Alterna libremente entre los tres mundos estéticos que elegiste. Toda la interfaz se adapta al instante.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VISUAL_THEMES.map((theme: VisualTheme) => {
          const isSelected = theme.id === currentThemeId;
          return (
            <div
              key={theme.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900/90 border-2 border-cyan-400 shadow-[0_0_24px_rgba(0,240,255,0.45)] scale-[1.01]'
                  : 'bg-slate-900/60 border border-white/10 hover:border-fuchsia-500/50 hover:shadow-[0_0_16px_rgba(255,42,141,0.2)]'
              }`}
              onClick={() => {
                playClickSound();
                playChimeSound(true);
                onSelectTheme(theme.id);
              }}
            >
              {/* Header Badge */}
              <div className="p-3.5 pb-2 flex items-center justify-between border-b border-white/5">
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-black shadow-sm'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {theme.tag}
                </span>

                <div className="flex items-center gap-1.5">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded border"
                    style={{ borderColor: theme.sealColor, color: theme.sealColor }}
                  >
                    {theme.sealText}
                  </span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
              </div>

              {/* Mockup Preview Thumbnail */}
              <div className="relative mx-3.5 mt-2 rounded-xl overflow-hidden aspect-[16/9] border border-white/15 bg-black">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPreviewImage(theme.image);
                  }}
                  className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/75 hover:bg-black text-[10px] font-semibold text-cyan-300 backdrop-blur-md border border-white/20 flex items-center gap-1"
                  title="Ver en pantalla completa"
                >
                  <Eye className="w-3 h-3" />
                  <span>Ampliar</span>
                </button>
              </div>

              {/* Text Description */}
              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                    {theme.name}
                  </h4>
                  <p className="text-[11px] text-slate-300/80 leading-relaxed mt-1 line-clamp-2">
                    {theme.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 italic truncate max-w-[80%]">"{theme.quote}"</span>
                  <span
                    className={`font-bold uppercase tracking-wider ${
                      isSelected ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    {isSelected ? 'Activo' : 'Activar'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
