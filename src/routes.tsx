import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';

import messages_en from "./configs/translations/en-US.json";
import messages_ptBR from "./configs/translations/pt-BR.json";
import messages_es from "./configs/translations/es.json";


import { IntlProvider } from 'react-intl';
import { useWebhubContext } from './context/WebhubContext';
import ModerationTools from './pages/ModerationTools';

const messages = {
  'pt-BR': messages_ptBR,
  'en': messages_en,
  'es': messages_es
} as any;

export default function AppRouter() {

  const context = useWebhubContext();

  return (
    <IntlProvider locale={context.language} defaultLocale='pt-BR' messages={messages[context.language]}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/moderation-tools" element={<ModerationTools/>}/>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}