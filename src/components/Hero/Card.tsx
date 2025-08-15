import type React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: Props) => {
  return (
    <div
      className="
      w-full
      flex justify-center
    "
    >
      <div
        className="
        flex flex-col
        md:w-full
        md:max-w-80
        pt-5 pb-10 md:pb-20 px-8 rounded-lg
        bg-white
        shadow-sm
        shadow-black/30
        text-center
        hover:scale-110
        transition-transform
      "
      >
        <h1
          className="
            text-2xl
            text-zinc-800
            font-bold
            mb-3
        "
        >
          {title}
        </h1>
        <p
          className="
            text-lg
            text-zinc-600
            font-medium
          "
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Card;
