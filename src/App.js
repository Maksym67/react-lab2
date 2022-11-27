import logo from './logo.svg';
import './App.css';
import Header from './components/header/main-header';
import MainNavbar from './components/header/navbar';
import RedCarousel from './components/main/carousel';
import MainPart from './components/main/main-content';
import Footer from './components/footer';

function App() {
  return (
    <div className='main-page'>
      <Header/>
      <MainNavbar/>
      <RedCarousel/>
      <MainPart/>
      <Footer/>
    </div>
  );
}

export default App;
