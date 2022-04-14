import { members } from "@site/src/constants";
import React from "react";
import { UserCard } from "../cards";

type membersIdsProps = {
  ids: string[];
};

export function UsersGrid(props: membersIdsProps) {
  const { ids } = props;
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 py-5 w-full container">
      {members
        .sort((a, b) => a.position - b.position)
        .map((member) => {
          if (ids.includes(member.id)) {
            return <UserCard key={member.id} {...member} />;
          }
        })}
    </div>
  );
}
