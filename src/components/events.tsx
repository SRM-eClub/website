"use client";
import React, { useRef, useEffect } from "react";
import { events } from "@/utils/data";

type Event = {
  title: string;
  description: string;
  time: string;
  venue: string;
  model: string;
  registration: string;
};

const EventCard = (event: Event) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-2">
      <div className="h-full w-full bg-slate-500/20 backdrop-blur-2xl place-items-center hidden lg:block rounded-2xl">
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
      <div className="h-full w-full bg-slate-500/20 backdrop-blur-2xl rounded-2xl">
        <div className="grid place-items-center h-full w-full p-4 grid-cols-1 gap-1">
          <h1 className="text-3xl lg:text-4xl text-center w-full p-2 rounded-lg bg-slate-500/30 backdrop-blur-xl">
            {event.title}
          </h1>
          <p className="text-center p-4 rounded-lg bg-slate-500/30 backdrop-blur-xl">
            {event.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
            <div className="w-full h-full bg-slate-500/30 backdrop-blur-xl grid place-items-center rounded-lg p-4">
              <h1 className="text-2xl lg:text-4xl">Time</h1>
              <p className="text-xs lg:text-sm">{event.time}</p>
            </div>
            <div className="w-full h-full bg-slate-500/30 backdrop-blur-xl grid place-items-center rounded-lg p-4">
            <h1 className="text-2xl lg:text-4xl">Venue</h1>
              <p className="text-xs lg:text-sm">{event.venue}</p>
            </div>
            <div className="w-full h-full bg-slate-500/30 backdrop-blur-xl grid place-items-center rounded-lg p-4 col-span-1 lg:col-span-2">
              <h1 className="text-2xl lg:text-4xl">Registration</h1>
              <p className="text-xs lg:text-sm">{event.registration}</p>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Events({ font }: { font: string }) {
  return (
    <div className="py-16 w-full pe-8 ps-8">
      <div className="w-full h-full">
        <h1 className={font + " text-center text-3xl lg:text-6xl w-full p-4"}>
          Arduino Day
        </h1>
        <div className="h- grid place-items-center w-full bg-[url('/background.webp')] bg-cover rounded-3xl gap-2 p-2 carousel ">
          {events.map((event, index) => (
            <div className="carousel-item">
              <EventCard key={index} {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
