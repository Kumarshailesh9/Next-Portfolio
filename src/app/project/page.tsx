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
      githubLink: "https://github.com/Kumarshailesh9/portfolio",
      liveLink: "https://kumarshailesh9.github.io/portfolio/",
    },
    {
      title: "Mini Store E-commerce App",
      description:
        "A full-featured e-commerce application built with Next.js and Redux Toolkit. Users can browse products, filter by category, search items, add products to the cart, and view total prices. The app includes real-time state management using Redux Toolkit and a responsive UI with Tailwind CSS.",
      tech: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "Fakestore API"],
      githubLink: "https://github.com/Kumarshailesh9/mini-store",
      liveLink: "https://mini-store-jgy2.vercel.app/", 
    },
    {
      title: "Blog Writing Platform",
      description:
        "A web app that allows users to write, edit, and publish blogs. Focused on clean UI, CRUD operations, and user authentication.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
      githubLink: "https://github.com/Kumarshailesh9/Blog-App",
      liveLink: "", // Add live demo URL if available
    },
    {
      title: "User Management CRUD App",
      description:
        "React-based CRUD application fetching user data from JSONPlaceholder API with features like create, update, delete, and pagination.",
      tech: ["React", "Axios", "JSONPlaceholder API"],
      githubLink: "https://github.com/Kumarshailesh9/User-Management-CRUD",
      liveLink: "", // Add live demo URL if available
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 text-slate-800">
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
