"use client";
import React, { useRef, useEffect } from "react";

export default function Events({ font }: { font: string }) {
  return (
    <div className="py-16 w-full pe-8 ps-8">
      <div className="w-full h-full">
        <h1 className={font + " text-center text-3xl lg:text-6xl w-full p-4"}>
          Events
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full bg-[url('/background.webp')] bg-cover rounded-3xl gap-2 p-2">
          <div className="w-full bg-gray-200/20 p-2 lg:p-4 rounded-3xl backdrop-blur-md hidden lg:block">
            <model-viewer
              src="/events/arduino_uno.gltf"
              alt="Arduino"
              iosSrc="../../public/events/arduino_uno.usdz"
              camera-controls
              auto-rotate
              // @ts-ignore
              style={{ width: "100%", height: "100%" }}
              touchAction="pan-y"
              ar
              ar-modes="webxr scene-viewer quick-look"
            ></model-viewer>
          </div>
          <div className="w-full bg-gray-200/20 p-2 lg:p-4 rounded-3xl backdrop-blur-md">
            <h1
              className={font + " text-center text-xl lg:text-6xl p-1 lg:p-4"}
            >
              Arduino Day
            </h1>
            <div className="p-3 bg-gray-500/40 rounded-2xl">
              <p className=" p-1 p:4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                vitae quod laudantium dolorem labore laboriosam eum fugiat
                necessitatibus placeat fuga voluptas, at officiis debitis
                quisquam, totam adipisci doloremque exercitationem? Eaque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Itaque vitae
                quod laudantium dolorem labore laboriosam eum fugiat
                nexercitationem? Eaque!
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-2 gap-2">
              <div className="p-3 bg-gray-300/40 rounded-2xl grid place-items-center">
                <div>
                  <h1 className="text-lg font-bold lg:text-3xl text-center">
                    Time
                  </h1>
                  <p className="text-center">value</p>
                </div>
              </div>
              <div className="p-3 bg-gray-300/40 rounded-2xl grid place-items-center">
                <div>
                  <h1 className="text-lg font-bold lg:text-3xl text-center">
                    Heading
                  </h1>
                  <p className="text-center">value</p>
                </div>
              </div>
              <div className="p-3 bg-gray-300/40 rounded-2xl grid place-items-center col-span-1 lg:col-span-2">
                <div>
                  <h1 className="text-lg font-bold lg:text-3xl text-center">
                    Venue
                  </h1>
                  <p className="text-center">value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
