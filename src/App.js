import './App.css';
import { Growth } from './components/Growth';
import { Middle } from './components/Middle';
import SidePanel from './components/SidePanel';



function App() {
  return (
    <>
        <div className='bg-[#EFF0F1] pb-10 flex'>
        <div className="">
          <SidePanel/>
        </div>
        <div className="">        
          <Growth />
          <Middle/>
        </div>
        </div>
    </>
  );
}

export default App;
