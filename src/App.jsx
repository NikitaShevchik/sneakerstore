import Catalog from './components/elements/Catalog/Catalog';
import Header from './components/elements/Header/Header';
import Slider from './components/elements/Slider/Slider';
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { store } from './redux'
import './App.scss';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          {/* <Routes>
            <Route path="/" element={elem...}/>
          </Routes> */}
          <Slider />
          <Catalog />
        </div>
      </Router>
    </Provider>
  )
}

export default App;
