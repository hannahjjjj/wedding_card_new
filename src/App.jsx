import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Cover from './components/Cover.jsx';
import Greeting from './components/Greeting.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import Account from './components/Account.jsx';
import IntroSplash from './components/IntroSplash.jsx';
import { weddingData } from './data/weddingData.js';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 3600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroSplash key="intro" data={weddingData.cover} />
      ) : (
        <motion.main
          key="invitation"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto min-h-screen w-full max-w-[480px] bg-paper shadow-soft"
        >
          <Cover data={weddingData.cover} />
          <Greeting data={weddingData.greeting} contacts={weddingData.contacts} />
          <Gallery images={weddingData.gallery} />
          <Location data={weddingData.location} />
          <Account accounts={weddingData.accounts} />
          <footer className="px-8 py-12 text-center">
            <p className="font-serif text-lg text-stoneText">Thank you</p>
            <p className="mt-3 text-xs tracking-[0.22em] text-mutedText">JONGYUN & DASOM</p>
          </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default App;
