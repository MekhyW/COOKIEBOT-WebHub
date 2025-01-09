import { FormattedMessage } from "react-intl";

export default function DashGeneral() {
    return (
        <main className="bg-[url('./assets/home_background.png')] min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <div className="justify-between items-center p-2">
                <div className='text-left'>
                    <a href='/dashboard/home' className='text-black font-bold'>⬅️ Voltar</a>
                </div>
            </div>
            <div className="relative text-center">
                <div className="space-y-4">
                    <div className="mt-5">
                        <label className="block text-sm font-semibold text-black mb-1">
                            <FormattedMessage id="general.welcome"/>
                        </label>
                        <textarea className="w-full p-3 border border-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" rows={2} placeholder='<FormattedMessage id="general.welcomeLabel"/>'>
                        </textarea>
                    </div>
                    <div className="mt-5">
                        <label className="block text-sm font-semibold text-black mb-1">
                        <FormattedMessage id="general.chatrules"/>
                        </label>
                        <textarea className="w-full p-3 border border-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" rows={2} placeholder='<FormattedMessage id="general.chatrulesLabel"/>'>
                        </textarea>
                    </div>

                    <div className='mt-6 space-y-4'>
                        <div className="flex items-center justify-between">
                            <label className='text-sm font-medium text-black'>
                                Evitar Comandos Conflitantes com outros Bots Furry
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-black">
                                Bloquear Conteúdo "Not Safe For Work"
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-black">
                                Função de Entretenimento
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-black">
                                Funções de utilidade
                            </label>
                            <input type="checkbox" className="w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"></input>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full flex items-center justify-center bg-amber-500 text-black py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition">
                            <span className="mr-2">↩</span> Redefinir Configurações ao Padrão
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}