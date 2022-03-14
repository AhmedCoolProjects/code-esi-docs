import React from "react";

type Props = {
  images: string[];
  alts: string[];
  size: number;
};

export function LogosGrid(props: Props) {
  const { images, alts, size } = props;
  return (
    <div className="w-full items-center flex flex-row justify-around my-3">
      <img
        src={images[0]}
        alt={alts[0]}
        width={size}
        height={size}
        className="object-cover rounded-full"
      />
      <img
        src={images[1]}
        alt={alts[1]}
        width={size}
        height={size}
        className="object-cover rounded-full"
      />
      <img />
    </div>
  );
}
