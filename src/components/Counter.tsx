import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center justify-center border-2 rounded px:0 py-0 md:px-5 md:py-0 hover:text-white hover:bg-[#B8860B] border-black">
      <button
        className="text-sm sm:px-1 sm:text-xs md:text-lg font-bold px-2"
        onClick={() => setCount(count > 1 ? count - 1 : 1)}
      >
        -
      </button>
      <span className=" text-sm  mx-2 sm:mx-1 sm:text-xs md:text-lg">
        {count}
      </span>
      <button
        className="text-sm sm:text-xs sm:px-1 md:text-lg font-bold px-2"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
