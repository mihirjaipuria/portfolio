import StarryBackground from '../components/StarryBackground';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="content-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-purple-400">Your Name</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate developer crafting beautiful digital experiences
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project One"
              description="A beautiful web application built with React and TypeScript."
              githubUrl="https://github.com"
              demoUrl="https://demo.com"
            />
            <ProjectCard
              title="Project Two"
              description="An innovative mobile app developed using React Native."
              githubUrl="https://github.com"
              demoUrl="https://demo.com"
            />
            <ProjectCard
              title="Project Three"
              description="A full-stack application with Node.js and MongoDB."
              githubUrl="https://github.com"
              demoUrl="https://demo.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;