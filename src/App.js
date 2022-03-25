import { Provider } from 'react-redux';
import './App.css';
import MainNav from './MainNav';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <MainNav/>
      </Provider>
    </div>
  );
}

export default App;
