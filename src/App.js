import logo from './logo.svg';
import './App.css';
import Button from './Button.js'
import CardCyberpunk from './components/CardCyberpunk.js'
import CardSense4fit from './components/CardSense4fit.js'
import CardUtrust from './components/CardUtrust.js'
import NavbarMultiversx from './components/NavbarMultiversx.js'
import NavbarPortalx from './components/NavbarPortalx.js'
import NavbarExchangex from './components/NavbarExchangex.js'
import NavbarExchangexRound from './components/NavbarExchangexRound.js'
import NavbarSpotlightx from './components/NavbarSpotlightx.js'
import NavbarLaunchpadx from './components/NavbarLaunchpadx.js'
import NavbarMultiversxDocs from './components/NavbarMultiversxDocs.js'

function App() {
  return (
    <div className="p-10 bg-[#000]">
      <div className="my-10">
        <Button />
      </div>

      <div className="my-10">
        <NavbarMultiversx />
        <br/>
        <NavbarPortalx />
        <br/>
        <NavbarExchangex />
        <br/>
        <NavbarSpotlightx />
        <br/>
        <NavbarLaunchpadx />
        <br/>
        <NavbarMultiversxDocs />
        <br/>
        <NavbarExchangexRound />
      </div>
      
      <div className='flex gap-4'>
        <CardCyberpunk />
        <CardSense4fit />
        <CardUtrust />
      </div>

    </div>
  );
}

export default App;
