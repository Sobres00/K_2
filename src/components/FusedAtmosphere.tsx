import React from 'react';

export const FusedAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Deep Celestial Background Aurora Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-fuchsia-600/12 rounded-full blur-[170px]" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px]" />

      {/* 2. Top Branch Overlay Silhouette (Sakura Pavilion Mist Concept 13) */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#090518]/90 via-[#0c0722]/50 to-transparent" />

      {/* 3. Bottom Lotus Estanque Glow (Santuario de Lotos Concept 15) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#04020c] via-[#09071c]/70 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-500/15 rounded-full blur-[60px]" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-fuchsia-500/15 rounded-full blur-[50px]" />
    </div>
  );
};
