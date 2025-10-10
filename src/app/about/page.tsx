export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-600">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
          Hello! I'm <span className="font-semibold text-gray-600">Shailesh Kumar</span>,  
          a passionate <span className="font-medium">MERN Stack Developer</span> from Noida, India.  
          I love building dynamic, user-friendly web applications using modern technologies like  
          <span className="font-medium"> React, Node.js, Express,</span> and <span className="font-medium">MongoDB</span>.
        </p>

        {/* Journey */}
        <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
          I completed my B.Tech in Computer Science & Engineering from  
          <span className="font-medium"> Awadh University, Ayodhya</span> in 2022.  
          During my training at <span className="font-medium">Sharpener</span>, I learned full-stack web development 
          and built several real-world projects, including an Expense Tracker App and a Portfolio Website.
        </p>

        {/* Goal */}
        <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-10">
          My goal is to create impactful digital products that solve real-world problems.  
          I’m particularly interested in backend architecture, API integration, and scalable systems.  
          When I’m not coding, I enjoy playing games, writing tech blogs, and traveling.
        </p>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "Bootstrap",
              "AWS",
              "Git & GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
