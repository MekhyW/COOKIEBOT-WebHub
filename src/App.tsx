import { MainButton, useShowPopup} from '@vkruglikov/react-telegram-web-app';


export const App = () => {
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: 'Hello, I am popup',
    });

  return( <MainButton text="SHOW POPUP" onClick={handleClick} />);
};