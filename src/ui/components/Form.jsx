import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6hpsgir', 'template_iwa6edx', form.current, {
                publicKey: 'gayrgao3vXM1sLtnl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 max-w-md mb-12">
            
            <label htmlFor="name" className="text-sm text-gray-400">
                Nome representante
            </label>
            <input
                name="name"  // ✅ Corrigido
                id="name"
                type="text"
                placeholder="Digite seu nome"
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />

            <label htmlFor="user_phone" className="text-sm text-gray-400">
                Telefone
            </label>
            <input
                name="user_phone"  // ✅ Corrigido
                id="user_phone"
                type="tel"
                placeholder="(99) 9 9999-9999"
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />

            <label htmlFor="user_email" className="text-sm text-gray-400">
                Email Corporativo
            </label>
            <input
                name="user_email"  // ✅ Corrigido
                id="user_email"
                type="email"
                placeholder="email@empresa.com"
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />

            <label htmlFor="message" className="text-sm text-gray-400">
                Mensagem
            </label>
            <textarea
                name="message"  // ✅ Corrigido
                id="message"
                placeholder="Digite sua mensagem..."
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />

            <button type="submit" className="cursor-pointer bg-gray-900 text-white px-6 py-2 text-sm rounded hover:bg-gray-800 transition-colors mt-3">
                Contact
            </button>
        </form>
    );
}
