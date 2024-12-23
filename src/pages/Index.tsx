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
              Hi, I'm <span className="text-purple-400">mihir</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'm an undergraduate pursuing a dual degree in Mathematics and Electronics at BITS Pilani. I'm passionate about AI and ML, always staying updated with the latest research. I love exploring where AI, Machine Learning, and Electronics collide. Always down for a chat about the latest breakthroughs, no matter how wild they get!
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
            {/* First Project Card - AI-Driven Survey Tool */}
            <ProjectCard
              title="AI-Driven Survey Tool"
              description="Developed an AI-driven survey tool by tuning a Large Language Model (LLM), integrating OpenAI’s API, and utilizing Hugging Face models. Implemented dynamic question logic and optimized NLP performance."
              
              
            />
            
            {/* Second Project Card */}
            <ProjectCard
              title="Course Drop Rate Predictor"
              description="A machine learning tool that predicts student course completion likelihood based on engagement and demographic features."
              githubUrl="https://github.com/mihirjaipuria/Course-Drop-Prediction"
              demoUrl="https://course-drop-prediction.streamlit.app/"
            />
            
            {/* Third Project Card */}
            <ProjectCard
              title="Advanced Stock Analysis and Portfolio Optimization"
              description="This project is a toolkit for stock analysis and portfolio optimization, using machine learning, simulations, and financial metrics. It offers insights into stock trends and helps build balanced portfolios for smarter investment decisions."
              githubUrl="https://github.com/mihirjaipuria/Stock-Forecasting-Portfolio-Optimization-LSTM"
            />
            
            {/* Fourth Project Card */}
            <ProjectCard
              title="ResNet50V2-Modified"
              description="Modified architecture of ResNet50V2 with a 2-step training process."
              githubUrl="https://github.com/mihirjaipuria/ResNet50V2-Modified"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
