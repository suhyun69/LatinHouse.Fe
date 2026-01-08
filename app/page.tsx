import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LessonList from './components/LessonList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-page">
      <Header />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <LessonList />
      </main>
      <Footer />
    </div>
  );
}
