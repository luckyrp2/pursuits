import React from "react";
import Image from "next/image";

export const Polaroid = ({ className, imageSrc, caption }: { className: string; imageSrc: string; caption: string }) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-2 px-2 py-4 relative bg-[#fffbef] shadow-polaroid general-border ${className}`}
    >
      <Image 
        src={imageSrc} 
        alt="Polaroid Image" 
        width={250}
        height={250}
        className="relative object-cover general-border"
      />
      <div className="relative self-stretch h-[50.39px] font-indie-flower text-xl text-black-main">
        { caption }
      </div>
    </div>
  );
};