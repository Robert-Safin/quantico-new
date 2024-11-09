import { FC } from "react";

type Props = {
  text: String;
  col: "black" | "white";
};

const SquareButton: FC<Props> = (props) => {
  if (props.col === "black") {
    return (
      <button className="w-fit group relative overflow-hidden">
        <p className="text text-center text-black border-[1px] border-black px-[8px] py-[3px] tablet:px-[12px] tablet:py-[6px] desktop:px-[16px] desktop:py-[8px] group-hover:text-gold transition-all duration-700 z-10 relative">
          {props.text}
        </p>
        <div className="w-full h-full absolute bg-black top-0 -right-full group-hover:right-0 transition-all duration-700 z-0" />
      </button>
    );
  }

  if (props.col === "white") {
    return (
      <button className="w-fit group relative overflow-hidden">
        <p className="text text-center text-text-white-on-black border-[1px] border-text-white-on-black px-[8px] py-[3px] tablet:px-[12px] tablet:py-[6px] desktop:px-[16px] desktop:py-[8px] group-hover:text-black transition-all duration-700 z-10 relative">
          {props.text}
        </p>
        <div className="w-full h-full absolute bg-text-white-on-black top-0 -right-full group-hover:right-0 transition-all duration-700 z-0" />
      </button>
    );
  }
};

export default SquareButton;
