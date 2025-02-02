import Header from "./ui/components/Header";
import { motion } from "motion/react";
import CardServices from "./ui/components/CardServices";
import Footer from "./ui/components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen space-y-4"
      >
        <h1 className="text-6xl font-bold text-white glow mb-4">
          Athon Networks
        </h1>
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
      <div className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-purple-500 font-medium mb-4">Services</p>
            <h2 className="text-5xl font-bold mb-6">De onde vem tudo isso?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma coleção abrangente de nossos serviços e recursos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardServices
              src={"https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&h=300"}
              title={"Docs"}
              subtitle={"Explore o Gitbook do Usual para todos os detalhes sobre o protocolo"}
              link={"#"}
              linkMessage={"Explorar Gitbook"}
            />
            <CardServices
              src={"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&h=300"}
              title={"Blog"}
              subtitle={"Descubra as últimas atualizações e planos do Usual Labs."}
              link={"#"}
              linkMessage={"Receba atualizações"}
            />
            <CardServices
              src={"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=300"}
              title={"Comunidade"}
              subtitle={"Conecte-se com mais entusiastas do Usual para saber de tudo."}
              link={"#"}
              linkMessage={"Junte-se ao Discord"}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
