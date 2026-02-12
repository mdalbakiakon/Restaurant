import React from "react";

const CircleDish = ({ rotation }) => {
  return (
    <div className="relative h-350 aspect-square bg-[conic-gradient(#D6D6D6,#ff9ec450,#D6D6D6,#ffe27a50,#D6D6D6,#6fd3c150,#D6D6D6,#b799ff50,#D6D6D6,#ffb26b50,#D6D6D6)] rounded-full transition-transform duration-750 ease" style={{ transform: `rotate(${rotation}deg)` }}>
      
      {/* inner circle */}
      <div className="absolute w-250 aspect-square left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-(--primary-bg) rounded-full z-10">
      </div>

      <div className="absolute w-90 aspect-square rounded-full bg-[url('/beef.png')] bg-center bg-cover bg-no-repeat -bottom-20 left-1/2 -translate-x-1/2 drop-shadow-[0_10px_30px_var(--shadow)] z-20"></div>

      <div className="absolute w-100 aspect-square rounded-full bg-[url('/momos.png')] bg-center bg-cover bg-no-repeat -top-25 left-1/2 -translate-x-1/2 drop-shadow-[0_10px_30px_var(--shadow)] z-20"></div>

      <div className="absolute w-90 aspect-square rounded-full bg-[url('/butterChick.png')] bg-center bg-cover bg-no-repeat -right-20 top-1/2 -translate-y-1/2 drop-shadow-[0_20px_30px_var(--shadow)] z-20"></div>

      <div className="absolute w-100 aspect-square rounded-full bg-[url('/macNcheez.png')] bg-center bg-cover bg-no-repeat -left-25 top-1/2 -translate-y-1/2 drop-shadow-[0_20px_30px_var(--shadow)] z-20"></div>
    </div>
  );
};

export default CircleDish;
