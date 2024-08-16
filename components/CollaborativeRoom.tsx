"use client";

import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import React, { useRef, useState } from "react";
import Loader from "./Loader";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import Header from "./Header";
import ActiveCollaborators from "./ActiveCollaborators";
import { Input } from "./ui/input";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};
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
                <Input
                  type="text"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  ref={inputRef}
                  placeholder="Enter title"
                  onKeyDown={updateTitleHandler}
                  className="document-title-input"
                  disabled={!editing}
                />
              ) : (
                <p className="document-title">{documentTitle}</p>
              )}
              {currentUserType === "editor" && !editing && (
                <Image
                  src="/assets/icons/edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                  onClick={() => setEditing(true)}
                  className="cursor-pointer"
                />
              )}

              {currentUserType !== "editor" && !editing && (
                <p className="view-only-tag">View Only</p>
              )}

              {loading && <p className="text-sm text-gray-400">Saving...</p>}
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
