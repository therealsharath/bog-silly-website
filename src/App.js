import { useState } from 'react';
import FailurePage from './components/FailurePage';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [isLanding, setLanding] = useState(true)

  const onPageChange = () => setLanding(!isLanding)

  return (
    <div className="App">
      <header className="App-header">
        { isLanding ? <LandingPage onPageChange={onPageChange}/> : <FailurePage onPageChange={onPageChange}/> }
      </header>
    </div>
  );
}

export default App;
