import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/components/Avatar"

export default function Home() {
  return (
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

      <div className="absolute bottom-0 flex items-center gap-10 p-4">
  <div>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
  <div>
    <p className="text-white">Oseias Cruz</p>
    <span className="font-bold">CEO of Athon Networks</span>
    <p>"Conectando pessoas, impulsionando negócios. Esse é o futuro que estamos construindo."</p>
  </div>
</div>
    </motion.div>
  )
}