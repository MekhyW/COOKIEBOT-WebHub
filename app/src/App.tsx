import AppRouter from './routes';
import { WebhubContext } from './context/WebhubContext';

import messages_en from "./configs/translations/en-US.json";
import messages_ptBR from "./configs/translations/pt-BR.json";
import messages_es from "./configs/translations/es.json";


import { IntlProvider } from 'react-intl';

const messages = {
  'pt-BR': messages_ptBR,
  'en': messages_en,
  'es': messages_es
} as any;


export const App = () => {

  const language = navigator.language;

  console.log(messages[language]);

  return (<>
    <WebhubContext.Provider value={{
      language: language,
      groups: [],
      userId: ""
    }}>

      <IntlProvider locale={navigator.language} defaultLocale='pt-BR' messages={messages[language]}>
        <AppRouter />
      </IntlProvider >
    </WebhubContext.Provider>
  </>);
};