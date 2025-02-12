import { Github, Disc as Discord, Twitter, Linkedin, Globe2, Send, Timer } from 'lucide-react';
import Form from './Form';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          <div className="w-full md:w-1/2">
            <div className="flex flex-col mb-8 text-center md:text-left">
              <Timer className="w-8 h-8 mb-4 mx-auto md:mx-0" />
              <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Gestão, segurança e conforto.
              </h2>
              <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                Entre em contato conosco e tire todas suas dúvidas.
              </p>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0 mb-12">
              <input
                type="email"
                placeholder="email@empresa.com"
                className="bg-gray-900 rounded px-4 py-2 text-sm w-full sm:flex-grow"
              />
              <button className="cursor-pointer bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors w-full sm:w-auto">
                Subscribe
              </button>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left mb-12">
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
                  <li><a href="#" className="hover:text-white">Política de privacidade</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div id="contact" className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <Form />
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
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
