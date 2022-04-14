import { members } from "@site/src/constants";
import { CreatorCardType } from "@site/types";
import React from "react";

export function CreatorCard(props: CreatorCardType) {
  const { id } = props;
  const creator = members.find((member) => member.id === id);
  return (
    <div className="flex ml-3 relative flex-row items-start">
      <img
        src={creator.image}
        alt={creator.fullName}
        className="rounded-full h-14 w-14 mr-3"
      />
      <div
        className="h-full
        flex flex-col justify-between 
        "
      >
        <a
          href={creator.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-md text-left "
        >
          {creator.fullName}
        </a>
        <p className="text-sm text-left">{creator.post}</p>
      </div>
    </div>
  );
}
