import logo from './logo.svg';
import './App.css';
import RocketPage from './Components/RocketPage';
import NavBar from './Components/NavBar';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <NavBar/>
      </Provider>
    </div>
  );
}

export default App;
