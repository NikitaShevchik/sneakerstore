import Catalog from './components/elements/Catalog/Catalog';
import Header from './components/elements/Header/Header';
import Slider from './components/elements/Slider/Slider';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { store } from './redux'
import './App.scss';
import { Provider } from 'react-redux';
import HomePage from './pages/homepage/HomePage';
import Favorites from './pages/favorites/Favorites';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
