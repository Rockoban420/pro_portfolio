import './App.css';
import Hero from './comps/Hero';
import Work from './comps/Work';
import About from './comps/About';
import Contact from './comps/Contact';
import { useRef } from 'react';

function App() {
  const ref = useRef();
  return (
    <div
      ref={ref}
      className="App"
    >
      <Hero
        ref={ref}
      />
      <Work
        ref={ref}
      />
      <About
        ref={ref}
      />
      <Contact
        ref={ref}
      />
    </div>
  );
}

export default App;
