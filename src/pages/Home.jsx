import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cloud, Shield, Headset, Code } from "lucide-react";
import CeoContainer from "../ui/components/CeoContainer";

const slides = [
  {
    title: "Athon Networks",
    description:
      "Cloud computing, network services, soluções que ajudem sua empresa a fazer parte do furuto...",
    icon: Cloud,
  },
  {
    title: "Cloud Computing",
    description:
      "Transform your business with scalable cloud solutions that drive innovation and growth",
    icon: Cloud,
  },
  {
    title: "Network Security",
    description:
      "Protect your digital assets with enterprise-grade security solutions and monitoring",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock technical support to ensure your systems run smoothly",
    icon: Headset,
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored development services to meet your unique business needs",
    icon: Code,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 sm:px-0 text-center"
        id="home"
      >
        <div className="relative w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white glow mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-sm sm:text-base max-w-md mx-auto text-gray-300">
                {slides[currentSlide].description}
              </p>
              <div className="mt-8 flex justify-center float-icon">
                {React.createElement(slides[currentSlide].icon, {
                  className: "w-16 h-16 text-blue-400",
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 md:mt-20">
          <CeoContainer />
        </div>
      </motion.div>
    </>
  );
}
