import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Undernav from './Components/Udernav/Undernav';
import Container from './Components/Container/Container';
import Categories from './Components/Categories/Categories';
import Bigcards from './Components/BigCards/Bigcards';
import Tags from './Components/Tags/Tags';
import Cards from './Components/Cards/Cards';
import Banner from './Components/Banner/Banner';
import Brands from './Components/Brands/Brands';
import Coments from './Components/Coments/Coments';
import End from './Components/End/End';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Undernav />
      <Container />
      <Categories />
      <Bigcards />
      <Tags />
      <Cards />
      <Banner />
      <Brands />
      <Coments />
      <End />
      <Footer />
    </div>
  );
}

export default App;
