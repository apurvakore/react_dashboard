import './App.css';
import { Dashboard } from './components/Dashboard';
import SidePanel from './components/SidePanel';

function App() {
  return (
    <div className='flex bg-[#F4F5F6]'>
      <SidePanel />
      <Dashboard/>
    </div>
  );
}

export default App;
