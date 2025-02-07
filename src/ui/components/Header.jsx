import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react"; // Ícones do menu

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 4000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ scale: 2 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
      <header className="flex justify-between items-center px-6 sm:px-20 lg:px-40 mt-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className={`letter ${isAnimating ? "animate" : ""}`}>A</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>T</span>
          <span className={`letter ${isAnimating ? "animate" : ""}`}>H</span>
          <img width={30} src="./athonfav.png" alt="Logo" className={`logo ${isAnimating ? "animate" : ""}`} />
          <span className={`letter ${isAnimating ? "animate" : ""}`}>N</span>
        </div>

        {/* Menu Mobile Toggle */}
        <button
          className="sm:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegação */}
        <nav className={`${menuOpen ? "block" : "hidden"} sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-4 sm:p-0 shadow-lg sm:shadow-none rounded sm:rounded-none`}>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-gray-300">
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

        {/* Botão "Contact Us" */}
        <a href="services" className="hidden sm:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </a>
      </header>
    </motion.div>
  );
}
