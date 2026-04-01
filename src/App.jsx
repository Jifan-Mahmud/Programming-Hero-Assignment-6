
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import MainSection from './components/MainSection';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Stats/>
      <MainSection/>
    </div>
  );
}

export default App;
