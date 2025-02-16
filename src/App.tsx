import AppRouter from './routes';
import { WebhubProvider } from './context/WebhubContext';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (<>
    <WebhubProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoot>
          <AppRouter />
        </AppRoot>
      </QueryClientProvider>
    </WebhubProvider>
  </>);
};