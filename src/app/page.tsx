import AboutPage from "./about/page";
import Hero from "./component/Hero";
import Contact from "./contact/page";
import ProjectPage from "./project/page";
import SkillPage from "./skill/page";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <Contact />
    </main>
  );
}
