
import './App.scss';
import { AppRouter } from './router/AppRouter';
import store from './store';
import { Provider } from 'react-redux';
import { SocketProvider } from './Context/socketContext';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <SocketProvider >
            <AppRouter />   
          </SocketProvider>
        </Provider>

    </div>
  );
}

export default App;
