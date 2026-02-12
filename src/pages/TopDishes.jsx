import React from "react";
import CircleDish from "../components/CircleDish";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const TopDishes = () => {
  const [rotation, setRotation] = useState(225);

  return (
    <div className="w-full h-dvh bg-(--primary-bg) text-(--primary-text) flex justify-center items-center relative overflow-hidden px-5 py-10">
      {/* rotation div */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <CircleDish rotation={rotation} />
      </div>

      <div className="absolute top-0 left-0 p-5 ">
        <div className="flex flex-col justify-center items-start font-supertalls">
          <p className="p-2 bg-(--primary-text) text-(--primary-bg) rounded-2xl text-3xl text-left">
            top
          </p>
          <p className="text-[120px] text-(--primary-text) font-extrabold leading-32.5">
            Cuisine
          </p>
        </div>
      </div>

      {/* rotation button */}
      <div className="flex justify-center items-center gap-5">
        <div
          onClick={() => setRotation((prev) => prev - 90)}
          className="bg-(--primary-text) rounded-full p-2.5 flex justify-center items-center cursor-pointer"
        >
          <ChevronLeft className="w-10 h-10 text-white" />
        </div>
        <div
          onClick={() => setRotation((prev) => prev + 90)}
          className="bg-(--primary-text) rounded-full p-2.5 flex justify-center items-center cursor-pointer"
        >
          <ChevronRight className="w-10 h-10 text-white" />
        </div>
      </div>
    </div>
  );
};

export default TopDishes;
