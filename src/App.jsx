import Catalog from './components/elements/Catalog/Catalog';
import Header from './components/elements/Header/Header';
import Slider from './components/elements/Slider/Slider';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Slider />
      <Catalog />
    </div>
  )
}

export default App;
