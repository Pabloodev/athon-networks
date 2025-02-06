import { useRef } from "react";
import { useScroll } from "motion/react";
import { motion } from "motion/react";

const companyPic = [
  {src: '1.png'},
  {src: '2.png'},
  {src: '3.png'}
]

function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div id="example">
      <svg id="progress" width="80" height="70" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle cx="50" cy="50" r="30" className="indicator" style={{ pathLength: scrollXProgress }} />
      </svg>
      <ul ref={ref} className="scroll-container">
        {companyPic.map((company, index) => (
          <li key={index}>
            <img src={company.src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollLinked