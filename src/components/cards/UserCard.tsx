import { images } from "@site/src/constants";
import { PersonCardProps } from "@site/types";
import React from "react";

export function UserCard(props: PersonCardProps) {
  const { position, fullName, image, post, linkedIn, outlook } = props;
  return (
    <div className="w-full shadow-md shadow-gray-700 flex flex-col items-center p-3 space-y-3">
      <img
        className="w-[180px] h-[180px] rounded-full object-cover"
        src={image}
        alt={fullName}
      />
      <h1 className="text-2xl ">{fullName}</h1>
      <h1 className="text-xl opacity-80 text-center min-h-[55px]">{post}</h1>
      <div className="flex flex-row items-center justify-around py-5 w-full ">
        {linkedIn ? (
          <a href={linkedIn} target="_blank">
            <images.linkedinLogo width={40} height={40} />
          </a>
        ) : null}
        {outlook ? (
          <a href={`mailto:${outlook}`} target="_blank">
            <images.outlookLogo width={40} height={40} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
