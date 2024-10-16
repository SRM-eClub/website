"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { users } from "@/utils/data";
import localFont from "next/font/local";

const header_font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const about_heading_font = localFont({
  src: "../../public/KodeMono-Medium.ttf",
});

export default function Page() {
  return (
  <main>
    
  </main>
);
}
