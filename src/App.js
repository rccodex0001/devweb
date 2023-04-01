import './App.css';
import Navbar from './components/Navbar';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Foooter from './components/Foooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header1 />
        {/* <Footer />
        <Foooter /> */}
      </header>
    </div>
  );
}

export default App;
