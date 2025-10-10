'use client';

import Typewriter from 'typewriter-effect';

export default function HeroTyping() {
  return (
    <h1 className="text-2xl md:text-4xl font-bold">
      I am a{' '}
      <span className="inline-block text-indigo-600">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('freelancer')
              .pauseFor(2000)
              .deleteAll()
              .typeString('frontend developer')
              .pauseFor(2000)
              .deleteAll()
              .typeString('backend developer')
              .pauseFor(2000)
              .deleteAll()
              .typeString('MERN developer')
              .pauseFor(2000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </h1>
  );
}
