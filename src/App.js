import './App.css';
import Hero from './comps/Hero';
import Work from './comps/Work';
import About from './comps/About';
import Contact from './comps/Contact';
import Patbot from './comps/work/Patbot';
import Testimonials from './comps/Testimonials';
import { useRef } from 'react';
import { useState } from 'react';

function App() {
  const ref = useRef();
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <div
      ref={ref}
      className="App bg-gray-100"
    >
      {
        currentTab === 'home' ? (
        <div>
          <Hero
            ref={ref}
          />
          <div
            className='shadow-2xl'
          >
          <Work
            ref={ref}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          </div>
          <About
            ref={ref}
          />
          <div
            className='shadow-2xl'
          >
          <Testimonials
            ref={ref}
          />
          </div>
          <Contact
            ref={ref}
          />

        </div>
        ) : currentTab === 'Patbot' ? <Patbot setCurrentTab={setCurrentTab}/>
            : currentTab === 'PocketMenu' ? <h1>Pocket Menu</h1>
            : currentTab === 'Collaboration' ? <h1>Collaboration</h1>
            : currentTab === 'Bootcamp' ? <h1>Other Projects</h1>
            : ''
      }
    </div>
  );
}

export default App;
