'use client';

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gray-50">
      {/* Left side content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
          Hello! I&apos;m Shailesh Kumar
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4">
          I am a{" "}
          <span className="text-indigo-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Freelancer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Backend Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("MERN Developer")
                  .pauseFor(2000)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        <p className="text-slate-700 mb-6 text-lg md:text-xl">
          MERN Stack Developer | Building modern and responsive web applications
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/Shailesh_Kumar_Resume.pdf"
            download="Shailesh_Kumar_Resume.pdf"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>

          <Link
            href="/contact"
            className="bg-gray-200 text-slate-800 px-6 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right side image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/Profile.jpeg"
          alt="Shailesh Kumar"
          width={400}
          height={400}
          priority
          className="rounded-full mt-22 object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
