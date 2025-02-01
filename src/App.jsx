import Header from "./ui/components/Header";
import { motion } from "motion/react"

export default function App() {
  return (
    <div>
      <Header />

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}  transition={{ duration: 1 }} className="flex flex-col items-center justify-center h-screen space-y-4">
        
        <h1 className="text-6xl font-bold text-white glow mb-4">Athon Networks</h1>
        <p>
          Cloud computing, network services, technological solutions that
          together helping your company be part of the future...{" "}
        </p>
      
        <div className="flex justify-center items-center gap-12">
        <div className="float-icon">
          <img src="./cloud.png" alt="" />
        </div>
        <div className="float-icon">
        <img src="./security.png" alt="" />
        </div>
        <div className="float-icon">
        <img src="./support.png" alt="" />

        </div>
        <div className="float-icon">
        <img src="./code.png" alt="" />

        </div>
      </div>
      </motion.div>
      <div id="services" className="h-screen">
      </div>
    </div>
  );
}
