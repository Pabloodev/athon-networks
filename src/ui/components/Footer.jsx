import { Github, Disc as Discord, Twitter, Linkedin, Globe2, Send, Timer } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="mb-12">
          <div className="flex flex-col mb-8">
            <Timer className="w-8 h-8 mb-4" />
            <h2 className="text-4xl font-bold mb-4">Gestão, segurança e conforto.</h2>
            <p className="text-gray-400 max-w-md">
            Entre em contato conosco e tire todas suas duvidas
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex gap-2 max-w-md mb-12">
            <input
              type="email"
              placeholder="email@empresa.com"
              className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-medium mb-4">Sobre</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Serviços</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal & Segurança</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Termos de serviço</a></li>
                <li><a href="#" className="hover:text-white">Politica de privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Athon Networks. Todos direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Globe2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Discord className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;