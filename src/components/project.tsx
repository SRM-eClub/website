"use client";

export default function Project({ font }: { font: string }) {
  return (
    <div className="py-16 w-full pe-8 ps-8">
      <div className="w-full h-full">
        <h1 className={font + " text-center text-xl lg:text-6xl w-full p-4"}>
          Project
        </h1>
      </div>
    </div>
  );
}
