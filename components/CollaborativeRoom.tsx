"use client";

import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import React, { useRef, useState } from "react";
import Loader from "./Loader";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import Header from "./Header";
import ActiveCollaborators from "./ActiveCollaborators";
import { Input } from "./ui/input";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div
              ref={containerRef}
              className="flex w-fit items-center justify-center gap-2"
            >
              {editing && !loading ? (
                <Input />
              ) : (
                <p className="document-title">{documentTitle}</p>
              )}
              {/* <p className="document-title">Abhijeet sex</p> */}
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
