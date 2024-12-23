import { Github, Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Github size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Twitter size={24} />
      </a>
      <a
        href="https://linkedin.com"
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