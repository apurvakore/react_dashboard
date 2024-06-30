import './App.css';
import { Growth } from './components/Growth';
import { Middle } from './components/Middle';
import { Navbar } from './components/Navbar';
import { OrderReview } from './components/OrderReview';
import SidePanel from './components/SidePanel';



function App() {
  return (
    <>
        <div className='flex bg-[#F4F5F6]'>
          <div className="">
            <SidePanel/>
          </div>
          <div className=""> 
            <Navbar/>  
            <Growth />
          <Middle />
          <OrderReview/>
          
          </div>
        </div>
    </>
  );
}

export default App;
