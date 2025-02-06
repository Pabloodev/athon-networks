import ScrollLinked from "../ui/components/ScrollRightContainer";

export default function About() {
  return (
    <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 space-x-30">
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
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s...
        </p>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12 w-full max-w-md">
        <p className="text-center font-semibold">Empresas Parceiras</p>
        <ScrollLinked />
      </div>
    </section>
  );
}
