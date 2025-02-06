export default function About() {
  return (
    <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 space-x-30" id="about">
      <div className="max-w-2xl">
        <h3 className="text-purple-400 text-sm font-semibold mb-2">
          Por que Athon Networks?
        </h3>
        <h2 className="text-4xl font-bold">
          Construindo juntos o{" "}
          <span className="text-gray-500 line-through">Futuro</span>{" "}
          Espetacular.
        </h2>
        <p className="text-gray-300 mt-4">
          A Athon Networks oferece soluções tecnológicas inovadoras para empresas e provedores de internet, transformando desafios em oportunidades. Fundada por especialistas em conectividade, a empresa vai além da infraestrutura, focando em redes seguras e estáveis.

          Com uma abordagem técnica e personalizada, atende desde pequenas empresas a grandes provedores, oferecendo serviços como documentação de redes, monitoramento, segurança cibernética, engenharia de roteamento, virtualização e treinamentos.

          Com uma equipe qualificada e atualizada, a Athon Networks se posiciona como parceira estratégica para garantir que a tecnologia seja uma ferramenta essencial no crescimento dos seus clientes.
        </p>
      </div>
      <div className="">
        <p className="text-center font-semibold text-3xl">Empresas Parceiras</p>
        <div>
          <img src="./Logos.png" alt="" />
        </div>
      </div>
    </section>
  );
}
