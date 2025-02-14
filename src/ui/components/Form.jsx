export default function Form() {
    return (
        <form className="flex flex-col gap-2 max-w-md mb-12">

            <label htmlFor="name" className="text-sm text-gray-400">
                Nome representante
            </label>
            <input
                id="name"
                type="name"
                placeholder="Digite seu nome"
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />
            <label htmlFor="name" className="text-sm text-gray-400">
                Telefone
            </label>
            <input
                id="tel"
                type="tel"
                placeholder="(99) 9 9999-9999"
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />

            <label htmlFor="email" className="text-sm text-gray-400">
                Email Corporativo
            </label>
            <input
                id="email"
                type="email"
                placeholder="email@empresa.com"
                className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm"
            />
            <textarea className="bg-gray-900 rounded px-4 py-2 flex-grow text-sm" name="text" id="text"></textarea>
            <button className="cursor-pointer bg-gray-900 text-white px-6 py-2 text-sm rounded hover:bg-gray-800 transition-colors mt-3">
                Contact
            </button>
        </form>
    )
}