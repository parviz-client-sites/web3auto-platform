import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
      <Hero />
      <Features />
      <Pricing />
      
      <footer className="py-12 text-center border-t border-slate-800 mt-20">
        <p className="text-gray-500 text-sm">© 2026 Web3Auto Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}