import React from "react";
import { events } from "@/utils/data";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type Event = {
  title: string;
  description: string;
  time: string;
  image: string;
  registration: string;
  venue: string;
  link: string;
};

const EventCard = async (event: Event) => {
  return (
    <div
      className={
        poppins.className +
        " grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-2"
      }
    >
      <div className="h-full w-full grid place-items-center shrink p-2 bg-slate-500/20 backdrop-blur-xl rounded-2xl hover:backdrop-blur-3xl duration-500">
        <Image
          src={event.image}
          width={400}
          height={400}
          alt={event.title}
          className="rounded-2xl"
          priority
        />
      </div>
      <div className="h-full w-full bg-slate-500/20 backdrop-blur-2xl rounded-2xl grid place-items-center">
        <div className="grid place-items-center h-fit w-full p-4 grid-cols-1 gap-1">
          <h1 className="text-3xl lg:text-6xl text-center w-full p-4 rounded-lg bg-slate-500/30 backdrop-blur-xl">
            {event.title}
          </h1>
          <p className="text-center p-4 rounded-lg bg-slate-500/30 backdrop-blur-xl">
            {event.description}
          </p>
          <div className="grid gap-1 w-full">
            <div className="w-full h-full bg-slate-500/30 backdrop-blur-xl grid place-items-center rounded-lg p-4">
              <h1 className="text-2xl lg:text-4xl">Date</h1>
              <p className="text-xs lg:text-sm">{event.time}</p>
            </div>
            <div className="w-full h-full bg-slate-500/30 backdrop-blur-xl grid place-items-center rounded-lg p-4">
              <h1 className="text-2xl lg:text-4xl">Venue</h1>
              <p className="text-xs lg:text-sm">{event.venue}</p>
            </div>
            <Link className="w-full h-full bg-slate-500/30 backdrop-blur-xl grid place-items-center rounded-lg p-4 hover:bg-slate-400/50 duration-500" href={event.link} target="_blank">
              <h1 className="text-2xl lg:text-4xl">Registration</h1>
              <p className="text-xs lg:text-sm">{event.registration}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function Events({ font }: { font: string }) {
  return (
    <div className="py-16 w-full pe-8 ps-8">
      <div className="w-full h-full">
        <h1 className={font + " text-center text-3xl lg:text-6xl w-full p-4"}>
          Arduino Day
        </h1>
        <div className="h-screen grid place-items-center w-full bg-[url('/background.webp')] bg-cover rounded-3xl gap-2 p-2 carousel ">
          {events.map((event, index) => (
            <div className="carousel-item" key={index}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
