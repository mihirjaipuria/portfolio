import { Github, Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/mihirjaipuria"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Github size={24} />
      </a>
      <a
        href="https://x.com/mihir_jaipuria"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Twitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mihirjaipuria/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;