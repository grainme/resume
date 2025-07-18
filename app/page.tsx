import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen xl:px-[20rem] px-[3rem] py-[3rem] text-white flex flex-col">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}
