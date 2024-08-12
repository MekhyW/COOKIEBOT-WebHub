import { MainButton, useShowPopup, useWebApp } from '@vkruglikov/react-telegram-web-app';


export const App = () => {
  const showPopup = useShowPopup();

  const webApp = useWebApp();

  const handleClick = () =>
    showPopup({
      message: 'Hello, I am popup',
    });

  return( <MainButton text="SHOW POPUP" onClick={handleClick} />);
};