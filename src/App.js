import logo from './logo.svg';
import './App.css';
import Header from './components/header/main-header';
import Navbar from './components/header/sub-header';
import Slider from './components/main/slider';

function App() {
  return (
    <div className='main-page'>
      <Header/>
      <Navbar/>
      <Slider/>
    </div>
  );
}

export default App;
