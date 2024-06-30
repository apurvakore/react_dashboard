import './App.css';
import ActiveUser from './components/ActiveUser';
import { Growth } from './components/Growth';
import { Middle } from './components/Middle';
import { Navbar } from './components/Navbar';
import { OrderReview } from './components/OrderReview';
import { Projects } from './components/Projects';
import SalesOverview from './components/SalesOverview';
import SidePanel from './components/SidePanel';

function App() {
  return (
    <div className='flex bg-[#F4F5F6]'>
      <SidePanel />
      <div className="flex-1 ml-[20%] px-5 2xl:px-8 overflow-x-hidden"> 
        <Navbar/>  
        <Growth />
        <Middle />
        <div className="flex mt-4">
          <div className="w-[40%]">
            <ActiveUser/>
          </div>
          <div className="w-[60%]">
            <SalesOverview/>
          </div>
        </div>
        <div className='flex '>
          <div className='w-[65%]'><Projects/></div>
          <div className="w-[35%]"><OrderReview /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
