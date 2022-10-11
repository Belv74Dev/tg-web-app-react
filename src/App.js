import { useEffect } from 'react';

import './app.css';


const tg = window.Telegram.WebApp;

const App = () => {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;