import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Firstpage from './components/Firstpage';
import Places from './components/Places';
import Participants from './components/Participants';
import Schedule from './components/Schedule';
import Games from './components/Games';
import Campfire from './components/Campfire';

function App() {
  return (
    <div>
        <Header/>
        <Firstpage/>
        <Places/>
        <Participants/>
        <Schedule/>
        <Games/>
        <Campfire/>
    </div>
  );
}

export default App;
