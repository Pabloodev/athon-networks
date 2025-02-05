// Data import
import faqData from "./data/faqData";
import services from "./data/services";

// UI / Components Imports
import Header from "./ui/components/Header";
import CardServices from "./ui/components/CardServices";
import Footer from "./ui/components/Footer";
import FAQItem from "./ui/components/FAQ";

// Import general
import { motion, useScroll } from "motion/react";
import { useState, useRef } from "react";

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

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <Header />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-6xl font-bold text-white glow mb-4">Athon Networks</h1>
        <p>Cloud computing, network services, technological solutions that help your company be part of the future...</p>
        <div className="flex justify-center items-center gap-12">
          {['cloud.png', 'security.png', 'support.png', 'code.png'].map((img, index) => (
            <div key={index} className="float-icon">
              <img src={`./${img}`} alt="icon" />
            </div>
          ))}
        </div>
      </motion.div>
      <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 space-x-30">
        <div className="max-w-2xl">
          <h3 className="text-purple-400 text-sm font-semibold mb-2">Por que Athon Networks?</h3>
          <h1 className="text-4xl font-bold">Construindo juntos o <span className="text-gray-500 line-through">Futuro</span> Espetacular.</h1>
          <p className="text-gray-300 mt-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12 w-full max-w-md">
          <p className="text-center font-semibold">Empresas Parceiras</p>
          <ScrollLinked />
        </div>
      </section>
      <div className="min-h-screen bg-black text-white">
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-purple-500 font-medium mb-4">Services</p>
            <h2 className="text-5xl font-bold mb-6">De onde vem tudo isso?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Uma coleção abrangente de nossos serviços e recursos.</p>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <CardServices {...service} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-medium mb-4">FAQ</p>
          <h2 className="text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Encontre as respostas para as principais dúvidas sobre nós.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-1">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
