import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = `${0.1 + Math.random() * 0.3}rem`;
      star.style.width = size;
      star.style.height = size;
      
      // Random animation duration
      star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
      
      return star;
    };

    // Create initial stars
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    for (let i = 0; i < starCount; i++) {
      starsRef.current.appendChild(createStar());
    }

    // Cleanup
    return () => {
      if (starsRef.current) {
        starsRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={starsRef} className="stars" />;
};

export default StarryBackground;