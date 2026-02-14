import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { GetInvolved } from './components/GetInvolved';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programs />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
