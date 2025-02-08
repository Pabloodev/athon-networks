import { motion } from "motion/react";
import CeoContainer from "../ui/components/CeoContainer";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 sm:px-0 text-center"
        id="home"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-white glow mb-4">
          Athon Networks
        </h1>

        <p className="text-sm sm:text-base max-w-md text-gray-300">
          Cloud computing, network services, technological solutions that help
          your company be part of the future...
        </p>

        <div className="grid grid-cols-2 sm:flex justify-center items-center gap-6 sm:gap-12">
          {["cloud.png", "security.png", "support.png", "code.png"].map(
            (img, index) => (
              <div key={index} className="float-icon flex justify-center">
                <img src={`./${img}`} alt="icon" className="w-12 sm:w-16" />
              </div>
            )
          )}
        </div>
        <div className="mt-10 md:mt-20">
          <CeoContainer />
        </div>
      </motion.div>
    </>
  );
}
