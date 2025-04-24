import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Home from './pages/Home';
import Privacy from './pages/Privacy';
import DashHome from './pages/DashHome';
import DashGeneral from './pages/DashGeneral';
import DashModeration from './pages/DashModeration';
import DashPosts from './pages/DashPosts'

import messages_en from "./configs/translations/en-US.json";
import messages_ptBR from "./configs/translations/pt-BR.json";
import messages_es from "./configs/translations/es.json";

import { useWebhubContext } from './context/WebhubContext';
import Indev from './pages/indev';

const messages = {
  'pt-BR': messages_ptBR,
  'en': messages_en,
  'es': messages_es,
} as any;

export default function AppRouter() {
  const { language } = useWebhubContext();

  return (
    <IntlProvider locale={language} defaultLocale='pt-BR' messages={messages[language]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dashboard/home" element={<DashHome />} />
          <Route path="/dashboard/general" element={<DashGeneral />} />
          <Route path="/dashboard/moderation" element={<DashModeration />} />
          <Route path="/dashboard/posts" element={<DashPosts />} />
          <Route path="/dashboard/events" element={<Indev />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}
