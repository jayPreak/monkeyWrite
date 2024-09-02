import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getCLerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });
  console.log({ room });
  console.log("user rooms", room.usersAccesses);
  if (!room) redirect("/");

  const userIds = Object.keys(room.usersAccesses);
  const users = await getCLerkUsers({ userIds });

  const currentUserType = room.usersAccesses[
    clerkUser.emailAddresses[0].emailAddress
  ]?.includes("room:write")
    ? "editor"
    : "viewer";

  const usersData = users.map((user: User) => ({
    ...user,
    userType: room.usersAccesses[user.email]?.includes("room:write")
      ? "editor"
      : "viewer",
  }));

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
    </main>
  );
};

export default Document;
