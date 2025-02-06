import { useRef } from "react";
import { useScroll } from "motion/react";
import { motion } from "motion/react";

function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div id="example">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle cx="50" cy="50" r="30" className="indicator" style={{ pathLength: scrollXProgress }} />
      </svg>
      <ul ref={ref} className="scroll-container">
        {['#ff0088', '#dd00ee', '#9911ff', '#0d63f8', '#0cdcf7', '#4ff0b7'].map((color, index) => (
          <li key={index} style={{ background: color }}></li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollLinked