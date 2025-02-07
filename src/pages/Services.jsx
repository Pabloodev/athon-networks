import { motion } from "motion/react";
import CardServices from "../ui/components/CardServices";
import services from "../data/services";

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white" id="services">
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
