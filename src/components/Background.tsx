"use client";

import * as React from "react";
import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="backgroundImage">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            alt="person typing on laptop; sthetoscope visible"
            src="/photos/bg.jpg"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </>
  );
}
