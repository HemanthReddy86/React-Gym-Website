import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx';
import Hero from './Components/Hero/Hero.jsx'
import AboutSection from './Components/AboutSection/AboutSection.jsx';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection.jsx';
import Spacer from './Components/Spacer/Spacer.jsx';
import JoinSection from './Components/JoinSection/JoinSection.jsx';
import PlansSection from './Components/PlansSection/PlansSection.jsx';
import TrainSection from './Components/TrainSection/TrainSection.jsx';
import ContactSection from './Components/ContactSection/ContactSection.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <AboutSection />
      <Spacer />
      <FeaturesSection />
      <JoinSection />
      <PlansSection />
      <TrainSection />
      <ContactSection />
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
