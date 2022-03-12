import { images } from "@site/src/constants";
import { PersonCardProps } from "@site/types";
import React from "react";

export function UserCard(props: PersonCardProps) {
  const { position, fullName, image, post, linkedIn, outlook } = props;
  return (
    <div className="w-full bg-red-500 shadow-md shadow-gray-700 flex flex-col items-center p-3 space-y-3">
      <img
        className="w-[160px] h-[160px] rounded-full object-cover"
        src={image}
        alt={fullName}
      />
      <h1 className="text-2xl ">{fullName}</h1>
      <h1 className="text-xl opacity-80 ">{post}</h1>
      <div className="flex flex-row items-center justify-around py-3 w-full ">
        <a href={linkedIn} target="_blank">
          <images.linkedinLogo width={38} height={38} />
        </a>
        <a href={`mailto:${outlook}`} target="_blank">
          <images.outlookLogo width={38} height={38} />
        </a>
      </div>
    </div>
  );
}
