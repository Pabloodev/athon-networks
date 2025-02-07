import { motion } from "motion/react";
import CeoContainer from "../ui/components/CeoContainer";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center h-screen space-y-4"
        id="home"
      >
        <h1 className="text-6xl font-bold text-white glow mb-4">
          Athon Networks
        </h1>
        <p>
          Cloud computing, network services, technological solutions that help
          your company be part of the future...
        </p>
        <div className="flex justify-center items-center gap-12">
          {["cloud.png", "security.png", "support.png", "code.png"].map(
            (img, index) => (
              <div key={index} className="float-icon">
                <img src={`./${img}`} alt="icon" />
              </div>
            )
          )}
        </div>
        <CeoContainer />
      </motion.div>
    </>
  );
}
