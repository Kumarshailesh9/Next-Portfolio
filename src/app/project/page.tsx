import ProjectCard from "../component/ProjectCard";

export default function ProjectPage() {
  const projects = [
    {
      title: "Expense Tracker App",
      description:
        "A full-stack MERN application that helps users track daily expenses, upgrade to premium plans via Razorpay, and manage their spending efficiently.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay API"],
      githubLink: "https://github.com/Kumarshailesh9/Expense-Tracker",
      liveLink: "", // Add live demo URL if available
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React showcasing my projects, blogs, and skills with responsive UI and smooth navigation.",
      tech: ["React", "Tailwind CSS", "GitHub Pages"],
      githubLink: "https://github.com/Kumarshailesh9/Next-Portfolio.git",
      liveLink: "https://shaileshkumar.vercel.app/",
    },
    // {
    //   title: "Mini Store E-commerce App",
    //   description:
    //     "A full-featured e-commerce application built with Next.js and Redux Toolkit. Users can browse products, filter by category, search items, add products to the cart, and view total prices. The app includes real-time state management using Redux Toolkit and a responsive UI with Tailwind CSS.",
    //   tech: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "Fakestore API"],
    //   githubLink: "https://github.com/Kumarshailesh9/mini-store",
    //   liveLink: "https://mini-store-jgy2.vercel.app/",
    // },
    {
      title: "Event Booking App",
      description:
        "A full-stack event management platform connecting customers and vendors in one place. Customers can book various types of events seamlessly, while vendors can manage and track all bookings with dates and details. Built using the MERN stack, Next.js, TypeScript, and Tailwind CSS for a scalable and responsive experience.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT Auth",
        "Full Stack",
      ],
      githubLink: "https://github.com/Kumarshailesh9/Book-Event.git",
      liveLink: "",
    },
    {
      title: "Real-Time Chat App",
      description:
        "A full-stack real-time chat application built using Next.js, Node.js, Express, Prisma, and Socket.IO. It supports user authentication, friend management, and real-time messaging with emojis — all managed within a Turborepo monorepo setup.",
      tech: [
        "Next.js 15",
        "React 19",
        "Node.js",
        "Express.js",
        "Prisma",
        "Socket.IO",
        "MongoDB",
        "Turborepo",
        "JWT Auth",
        "Tailwind CSS"
      ],
      githubLink: "https://github.com/Kumarshailesh9/real-time-chat.git",
      liveLink: "",
    },
    {
      title: "Blog Writing Platform",
      description:
        "A web app that allows users to write, edit, and publish blogs. Focused on clean UI, CRUD operations, and user authentication.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
      githubLink: "https://github.com/Kumarshailesh9/Blog-App",
      liveLink: "",
    },
    {
      title: "User Management CRUD App",
      description:
        "React-based CRUD application fetching user data from JSONPlaceholder API with features like create, update, delete, and pagination.",
      tech: ["React", "Axios", "JSONPlaceholder API"],
      githubLink: "https://github.com/Kumarshailesh9/User-Management-CRUD",
      liveLink: "",
    },
    {
      title: "Star Furniture & Electronics",
      description:
        "A professional business website developed for a real client to showcase furniture and electronic products. Built using Next.js and Tailwind CSS, it features a fully responsive layout, modern design, and smooth navigation for an engaging user experience.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Hostinger Hosting",
        "Responsive UI"
      ],
      githubLink: "https://github.com/Kumarshailesh9/Star_Furnitur_Gkp.git",
      liveLink: "https://starfurnitureandelectronics.in/",
    },
    {
      title: "Radient Hospital Website",
      description:
        "A responsive and SEO-friendly hospital website built for a real client to showcase healthcare services, departments, and contact information. Developed using Next.js and Tailwind CSS with a clean, accessible, and user-friendly design.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Hosting",
        "Responsive UI"
      ],
      githubLink: "https://github.com/Kumarshailesh9/Radient-Hospital.git",
      liveLink: "https://www.radianthospitalgkp.com/",
    }


  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 mt-10 text-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-600">
          My Projects
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-14">
          Here are some of the projects I’ve developed using the MERN stack and
          modern web technologies. Each project helped me strengthen my
          problem-solving and full-stack development skills.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
