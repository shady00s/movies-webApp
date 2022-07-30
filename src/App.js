
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <HomePage/>
    </Provider>

  );
}

export default App;
