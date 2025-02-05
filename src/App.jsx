import Header from "./ui/components/Header";
import CardServices from "./ui/components/CardServices";
import Footer from "./ui/components/Footer";
import { motion, useMotionValue, useSpring, useScroll } from "motion/react";
import FAQItem from "./ui/components/FAQ";
import { useState } from "react";
import faqData from "./data/faqData";
import { useRef } from "react";

export function ScrollLinked() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })

  return (
    <div id="example">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li style={{ background: "#ff0088" }}></li>
        <li style={{ background: "#dd00ee" }}></li>
        <li style={{ background: "#9911ff" }}></li>
        <li style={{ background: "#0d63f8" }}></li>
        <li style={{ background: "#0cdcf7" }}></li>
        <li style={{ background: "#4ff0b7" }}></li>
      </ul>
      <StyleSheet />
    </div>
  )
}

/**
* ==============   Styles   ================
*/

function StyleSheet() {
  return (
    <style>{`
          #example {
            width: 100vw;
            max-width: 400px;
            position: relative;
          }

          #example #progress {
              position: absolute;
              top: -65px;
              left: -15px;
              transform: rotate(-90deg);
          }

          #example .bg {
              stroke: var(--layer);
          }

          #example #progress circle {
              stroke-dashoffset: 0;
              stroke-width: 10%;
              fill: none;
          }

          #progress .indicator {
              stroke: var(--accent);
          }

          #example ul {
              display: flex;
              list-style: none;
              height: 220px;
              overflow-x: scroll;
              padding: 20px 0;
              flex: 0 0 600px;
              margin: 0 auto;
              gap: 20px;
          }

          #example ::-webkit-scrollbar {
              height: 5px;
              width: 5px;
              background: #fff3;
              -webkit-border-radius: 1ex;
          }

          #example ::-webkit-scrollbar-thumb {
              background: var(--accent);
              -webkit-border-radius: 1ex;
          }

          #example ::-webkit-scrollbar-corner {
              background: #fff3;
          }

          #example li {
              flex: 0 0 200px;
              background: var(--accent);
          }

  `}</style>
  )
}

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <Header />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
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

        <div>
          <img className="absolute top-20 z-40 left-20 opacity-50" src="./3.png" alt="" />
          <img className="absolute top-20 z-30 right-20 opacity-50" src="./4.png" alt="" />
          <img className="absolute top-100 z-20 left-20 opacity-50" src="./5.png" alt="" />
          <img className="absolute top-5 z-10 right-150 opacity-50" src="./6.png" alt="" />
          <img className="absolute top-100 z-0 right-10 opacity-50" src="./7.png" alt="" />
        </div>
      </motion.div>
      <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 space-x-30">
        <div className="max-w-2xl">
          <h3 className="text-purple-400 text-sm font-semibold mb-2">
            Por que Athon Networks?
          </h3>
          <h1 className="text-4xl font-bold">
            Construindo juntos o{" "}
            <span className="text-gray-500 line-through">Futuro</span> Espetacular.
          </h1>
          <p className="text-gray-300 mt-4">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries
          </p>
          <p className="text-gray-300 mt-4">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
          <p className="text-gray-300 mt-4">
            By giving users ownership of the protocol, Usual ensures value
            circulates within the community, not just among a few. Every dollar
            in the system builds real, shared rewards, with 90% of value going
            back to users.
            <span className="text-gray-300">
              {" "}
              Usual turns users into owners, creating a new, equitable approach
              to stablecoins and token-based finance.
            </span>
          </p>
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
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma coleção abrangente de nossos serviços e recursos.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CardServices
                src={
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={"Athon Docs"}
                subtitle={
                  "Explore o Gitbook do Usual para todos os detalhes sobre o protocolo"
                }
                link={"#"}
                linkMessage={"Explorar Gitbook"}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CardServices
                src={
                  "https://plus.unsplash.com/premium_photo-1663040454423-30ce7ed209ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={"Athon EYE"}
                subtitle={
                  "Explore o Gitbook do Usual para todos os detalhes sobre o protocolo"
                }
                link={"#"}
                linkMessage={"Explorar Gitbook"}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CardServices
                src={
                  "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={"Athon Supervisor"}
                subtitle={
                  "Explore o Gitbook do Usual para todos os detalhes sobre o protocolo"
                }
                link={"#"}
                linkMessage={"Explorar Gitbook"}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CardServices
                src={
                  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&h=300"
                }
                title={"Athon engineering"}
                subtitle={
                  "Explore o Gitbook do Usual para todos os detalhes sobre o protocolo"
                }
                link={"#"}
                linkMessage={"Explorar Gitbook"}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CardServices
                src={
                  "https://plus.unsplash.com/premium_photo-1682145177356-33efa0ee06f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={"Athon Cloud"}
                subtitle={
                  "Descubra as últimas atualizações e planos do Usual Labs."
                }
                link={"#"}
                linkMessage={"Receba atualizações"}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <CardServices
                src={
                  "https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={"Athon CiberSec"}
                subtitle={
                  "Conecte-se com mais entusiastas do Usual para saber de tudo."
                }
                link={"#"}
                linkMessage={"Junte-se ao Discord"}
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-medium mb-4">FAQ</p>
          <h2 className="text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Encontre as respostas para as principais duvidas sobre nós.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-1">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
