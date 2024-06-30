import './App.css';
import { Growth } from './components/Growth';
import { Middle } from './components/Middle';
import { Navbar } from './components/Navbar';
import { OrderReview } from './components/OrderReview';
import SidePanel from './components/SidePanel';

function App() {
  return (
    <div className='flex bg-[#F4F5F6]'>
      <SidePanel />
      <div className="flex-1 ml-[20%] px-5 2xl:px-8 overflow-x-hidden"> 
        <Navbar/>  
        <Growth />
        <Middle />
        <OrderReview/>
      </div>
    </div>
  );
}

export default App;
