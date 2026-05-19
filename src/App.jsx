import Cover from './components/Cover.jsx';
import Greeting from './components/Greeting.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import Account from './components/Account.jsx';
import { weddingData } from './data/weddingData.js';

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[480px] bg-paper shadow-soft">
      <Cover data={weddingData.cover} />
      <Greeting data={weddingData.greeting} contacts={weddingData.contacts} />
      <Gallery images={weddingData.gallery} />
      <Location data={weddingData.location} />
      <Account accounts={weddingData.accounts} />
      <footer className="px-8 py-12 text-center">
        <p className="font-serif text-lg text-stoneText">Thank you</p>
        <p className="mt-3 text-xs tracking-[0.22em] text-mutedText">MINJUN & SEOYEON</p>
      </footer>
    </main>
  );
}

export default App;
