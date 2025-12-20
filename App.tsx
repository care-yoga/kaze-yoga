import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Classes } from './components/Classes';
import { Schedule } from './components/Schedule';
import { Instructors } from './components/Instructors';
import { AccessContact } from './components/AccessContact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Concept />
        <Classes />
        <Schedule />
        <Instructors />
        <AccessContact />
      </main>
      <Footer />
    </div>
  );
};

export default App;