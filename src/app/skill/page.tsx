import SkillCard from "../component/SkillCard";
import {
  NodejsOriginal,
  NextjsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  MongodbOriginal,
  MysqlOriginal,
  ExpressOriginal,
  SocketioOriginal,
  SequelizeOriginal,
  MongooseOriginal,
  PrismaOriginal,
  GitOriginal,
  GithubOriginal,
  PostmanOriginal,
  BootstrapOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  TypescriptOriginal,
  CplusplusOriginal,
  VercelOriginal,
  NetlifyOriginal,
  VscodeOriginal,
} from "devicons-react";

export default function SkillPage() {
  const categorizedSkills = {
    Frontend: [
      { skill: "HTML5", icon: <Html5Original size={96} /> },
      { skill: "CSS3", icon: <Css3Original size={96} /> },
      { skill: "JavaScript", icon: <JavascriptOriginal size={96} /> },
      { skill: "TypeScript", icon: <TypescriptOriginal size={96} /> },
      { skill: "React.js", icon: <ReactOriginal size={96} /> },
      { skill: "Next.js", icon: <NextjsOriginal size={96} /> },
      { skill: "Tailwind CSS", icon: <TailwindcssOriginal size={96} /> },
      { skill: "Bootstrap", icon: <BootstrapOriginal size={96} /> },
    ],
    Backend: [
      { skill: "Node.js", icon: <NodejsOriginal size={96} /> },
      { skill: "Express.js", icon: <ExpressOriginal size={96} /> },
      { skill: "Socket.io", icon: <SocketioOriginal size={96} /> },
    ],
    Database: [
      { skill: "MongoDB", icon: <MongodbOriginal size={96} /> },
      { skill: "Mongoose", icon: <MongooseOriginal size={96} /> },
      { skill: "MySQL", icon: <MysqlOriginal size={96} /> },
      { skill: "Sequelize", icon: <SequelizeOriginal size={96} /> },
      { skill: "Prisma", icon: <PrismaOriginal size={96} /> },
    ],
    Tools: [
      { skill: "Git", icon: <GitOriginal size={96} /> },
      { skill: "GitHub", icon: <GithubOriginal size={96} /> },
      { skill: "Postman", icon: <PostmanOriginal size={96} /> },
      { skill: "VS Code", icon: <VscodeOriginal size={96} /> },
      { skill: "Vercel", icon: <VercelOriginal size={96} /> },
      { skill: "Netlify", icon: <NetlifyOriginal size={96} /> },
    ],
    Others: [{ skill: "C++", icon: <CplusplusOriginal size={96} /> }],
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 text-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-600">
          My Skills
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-14">
          Here are the technologies and tools I work with to build efficient,
          scalable, and modern full-stack web applications.
        </p>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-500">
              {category}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skills.map(({ skill, icon }) => (
                <SkillCard key={skill} skill={skill} icon={icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
