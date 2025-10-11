import React from "react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Freelance Full Stack Developer (Remote)",
    company: "",
    duration: "Sep 2024 – Present",
    description: [
      "Built and deployed custom MERN & Next.js applications for clients.",
      "Developed responsive UIs using React.js & Tailwind CSS, integrated backend APIs with MongoDB.",
      "Managed full development cycles, from requirement gathering to deployment and maintenance.",
      "Worked freelance due to a health break but now fully fit and back to work."
    ],
  },
  {
    role: "Trainee Engineer",
    company: "RM Software India Pvt. Ltd., Noida",
    duration: "Apr 2024 – Oct 2024",
    description: [
      "Assisted in ML model training using GIS & mapping data.",
      "Performed data preprocessing, labeling, and model evaluation.",
    ],
  },
  {
    role: "MERN Stack Developer (Training Program)",
    company: "Sharpener, Bangalore",
    duration: "Dec 2022 – Nov 2023",
    description: [
      "Built full-stack applications with authentication, REST APIs, and payment integration.",
      "Deployed multiple apps on Vercel & GitHub Pages using Agile methodologies.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-24 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">My Experience</h1>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 w-1 bg-blue-500 h-full hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-10 relative md:pl-16 pl-8`}
          >
            {/* Circle */}
            <div className="absolute left-0 md:left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            
            <h2 className="text-2xl font-semibold">{exp.role}</h2>
            {exp.company && <p className="text-gray-600">{exp.company}</p>}
            <p className="text-gray-500 italic">{exp.duration}</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
