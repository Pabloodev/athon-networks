import { motion } from "motion/react";
import CardServices from "../ui/components/CardServices";
import services from "../data/services";

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white" id="services">
      <section className="container mx-auto px-6 sm:px-4 py-12 sm:py-24">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-purple-500 font-medium mb-2 sm:mb-4">Services</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            De onde vem tudo isso?
          </h2>
          <p className="text-gray-400 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
            Uma coleção abrangente de nossos serviços e recursos.
          </p>
        </div>

        {/* Grid de serviços responsivo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.8 }}
            >
              <CardServices {...service} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
