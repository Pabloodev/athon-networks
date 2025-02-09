import { useState } from "react";
import CardServices from "../ui/components/CardServices";
import services from "../data/services";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-black text-white" id="services">
      <section className="container mx-auto px-6 sm:px-4 py-12 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-purple-500 font-medium mb-2 sm:mb-4">Services</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            De onde vem tudo isso?
          </h2>
          <p className="text-gray-400 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
            Uma coleção abrangente de nossos serviços e recursos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <button onClick={() => handleClick(index)}>
                <CardServices {...service} />
              </button>

              {activeModal === index && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                  <div className="bg-zinc-900 p-6 rounded-lg max-w-md relative">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-2">{service.description}</p>
                    <button
                      onClick={closeModal}
                      className="mt-4 bg-white text-black px-4 py-2 rounded"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
