import { FormattedMessage } from 'react-intl';

export default function Indev() {
    return (
        <div className="flex flex-col text-black text-center font-bold justify-center items-center text-3xl mt-64">
            🍪 <FormattedMessage id="indev"/>
            <a href="/dashboard/home" className="mt-10 bg-gradient-to-l from-yellow-700 to-yellow-900 hover:bg-yellow-500 hover:scale-105 text-white px-4 py-2 rounded-l">
            <FormattedMessage id="mod.back"/>
            </a>
        </div>
    )
}