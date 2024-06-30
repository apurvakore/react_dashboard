import './App.css';
import { Growth } from './components/Growth';
import { Middle } from './components/Middle';
import { Navbar } from './components/Navbar';
import SidePanel from './components/SidePanel';



function App() {
  return (
    <>
        <div className='flex'>
          <div className="w-[20%] z-10">
            <SidePanel/>
          </div>
          <div className="w-[80%] pb-10"> 
            <Navbar/>  
            <Growth />
            <Middle/>
          </div>
        </div>
    </>
  );
}

export default App;
