
import './App.scss';
import { AppRouter } from './router/AppRouter';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />   
      </Provider>
    </div>
  );
}

export default App;
