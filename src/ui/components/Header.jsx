import { useEffect, useState } from "react";

export default function Header() {

  const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 4000);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <header className="flex justify-between items-center px-40 mt-5">
      <div className="flex items-center gap-2">
        <span className={`letter ${isAnimating ? 'animate' : ''}`}>A</span>
        <span className={`letter ${isAnimating ? 'animate' : ''}`}>T</span>
        <span className={`letter ${isAnimating ? 'animate' : ''}`}>H</span>
        <img width={30} src="./athonfav.png" alt="" className={`logo ${isAnimating ? 'animate' : ''}`} />
        <span className={`letter ${isAnimating ? 'animate' : ''}`}>N</span>
      </div>

      <nav>
        <ul className="flex gap-6 items-center text-gray-300">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <a href="services">
        <button>Services</button>
      </a>
    </header>
  );
}
