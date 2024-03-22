"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import localFont from "next/font/local";
// import Project from "../components/project";
import Events from "@/components/events";

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
      <Navbar />
      <section
        id=""
        className="bg-[url('/background.webp')] bg-cover bg-no-repeat"
      >
        <div
          className={
            header_font.className +
            " grid place-items-center h-screen text-center bg-black/10 p-16"
          }
        >
          <motion.div
            initial={{ opacity: 0, y: "25%" }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-2xl bg-white/10 p-16 rounded-3xl"
          >
            <p className="text-xs lg:text-2xl">
              SRM UNIVERSITY OF SCIENCE AND TEHNOLOGY
            </p>
            <h1 className={" text-2xl font-bold lg:text-8xl"}>
              The Electronics Club
            </h1>
          </motion.div>
        </div>
      </section>
      <section
        id="about"
        className="grid place-items-center p-2 bg-gradient-to-bl from-black lg:p-8 to-black"
      >
        <motion.div
          className={header_font.className + " p-2 text-center lg:p-16"}
          initial={{ opacity: 0, y: "25%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={
              about_heading_font.className + " text-4xl lg:text-8xl p-10"
            }
          >
            Charge up your creativity, join the circuit.
          </motion.h1>
          <div className="text-sm p-1 lg:text-lg grid place-items-center grid-cols-1 gap-2">
            <motion.div
              className="bg-gray-800 p-4 rounded-2xl w-full"
              initial={{ opacity: 0, y: "25%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>
                The SRMIST Electronics Club is a vibrant community of students
                passionate about electronics, engineering, and technology. We
                provide a platform for members to:
              </p>
            </motion.div>
            <div className="w-full grid grid-col-1 lg:grid-cols-2 gap-2">
              <motion.div
                className="bg-gray-800 rounded-2xl p-4"
                initial={{ opacity: 0, y: "25%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold text-md lg:text-xl p-2">
                  Develop their skills
                </h1>
                <p>
                  Through workshops, guest lectures, and hands-on projects,
                  you&apos;ll gain valuable knowledge and practical experience
                  in various areas of electronics.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-2xl p-4"
                initial={{ opacity: 0, y: "25%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold text-md lg:text-xl p-2">
                  Turn ideas into reality
                </h1>
                <p>
                  Access our makerspace and resources to bring your innovative
                  concepts to life.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-2xl p-4"
                initial={{ opacity: 0, y: "25%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold text-md lg:text-xl p-2">
                  Network with industry professionals
                </h1>
                <p>
                  Connect with experts in the field, gain insights into career
                  opportunities, and expand your professional network.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-2xl p-4"
                initial={{ opacity: 0, y: "25%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold text-md lg:text-xl p-2">
                  Collaborate with like-minded individuals
                </h1>
                <p>
                  Work on exciting projects, participate in competitions, and
                  learn from each other in a supportive environment.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* <section
        id="projects"
        className="h-screen bg-gradient-to-br from-black to-gray-800 p-2"
      >
        <Project font={about_heading_font.className}/>
      </section> */}
      <section
        id="events"
        className="bg-gradient-to-tl from-gray-800 to-black"
      >
        <Events font={about_heading_font.className}/>
      </section>
      <section
        id="team"
        className="h-screen bg-gradient-to-bl from-gray-800 to-black"
      ></section>
    </main>
  );
}
/*
The [College Name] Electronics Club is a vibrant community of students passionate about electronics, engineering, and technology. We provide a platform for members to:

Develop their skills: Through workshops, guest lectures, and hands-on projects, you'll gain valuable knowledge and practical experience in various areas of electronics.
Collaborate with like-minded individuals: Work on exciting projects, participate in competitions, and learn from each other in a supportive environment.
Turn ideas into reality: Access our makerspace and resources to bring your innovative concepts to life.
Network with industry professionals: Connect with experts in the field, gain insights into career opportunities, and expand your professional network.
Have fun! Explore the world of electronics in a fun and interactive way, meet new people, and share your passion with others.
Whether you're a beginner or a seasoned enthusiast, we welcome you to join our club! We offer opportunities for everyone to learn, grow, and contribute to the world of technology.

Join us and:

Spark your curiosity.
Build your skills.
Shape the future.
*/
