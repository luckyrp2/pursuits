import React from "react";

export const Card = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col w-[271px] items-start gap-[9.99px] pt-[9.99px] pb-[19.97px] px-[9.99px] relative bg-[#fffbef] border-[0.62px] border-solid border-[#332300] shadow-[0px_4.99px_4.99px_#332300] ${className}`}
    >
      <img className="relative w-[249.67px] h-[249.67px] object-cover" alt="Image" src="image.png" />
      <div className="relative self-stretch h-[50.39px] font-body-caption font-[number:var(--body-caption-font-weight)] text-[#001e40] text-[length:var(--body-caption-font-size)] tracking-[var(--body-caption-letter-spacing)] leading-[var(--body-caption-line-height)] [font-style:var(--body-caption-font-style)]">
        Loren Ipsum Sere Vana!
      </div>
    </div>
  );
};