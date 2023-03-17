import React from "react";

type Props = {
  name: string;
  content?: string;
  img: string;
};

const ClassScroll = ({ name, content, img }: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex h-[380px] w-[450px] flex-col  items-center justify-center 
  whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-700 hover:opacity-90 `;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="font-bold text-2xl pb-4">{name}</p>
        <p className="py-2">{content}</p>
      </div>
      <img
        src={img}
        alt="Content Image"
      />
    </li>
  );
};

export default ClassScroll;
