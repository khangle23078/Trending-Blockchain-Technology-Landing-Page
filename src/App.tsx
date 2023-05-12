import AboutUs from './components/AboutUs';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Values from './components/Values';

function App() {
  return (
    <div className="bg-[#FAFAFA]">
      <Header />
      <Hero />
      <Clients />
      <AboutUs />
      <Interests />
      <Values />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
