import AppRouter from './routes';
import { WebhubProvider } from './context/WebhubContext';
import { AppRoot } from '@telegram-apps/telegram-ui';

export const App = () => {
  return (<>
    <WebhubProvider>
      <AppRoot>
        <AppRouter />
      </AppRoot>
    </WebhubProvider>
  </>);
};