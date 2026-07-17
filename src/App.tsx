
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { FeatureSection } from './components/FeatureSection';
import { PricingSection } from './components/PricingSection';
import { ConversionSection } from './components/ConversionSection';

function App() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-cyan/30 relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeatureSection />
      <PricingSection />
      <ConversionSection />
    </main>
  );
}

export default App;
