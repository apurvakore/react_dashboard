import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BillingTab } from './components/billing/BillingTab'; import Credits from './components/utlis/Credits';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/utlis/Navbar';
import SidePanel from './components/utlis/SidePanel';
import TablesTab from './components/tables/TablesTab';
import { Profile } from './components/profile/Profile';
import { SignUp } from './components/signup/SignUp';
import { SignIn } from './components/signIn/SignIn';
import MobileSidePanel from './components/utlis/MobileSidePanel';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';  // Prevent body scroll
    } else {
      document.body.style.overflow = 'auto';  // Allow body scroll
    }

    return () => {
      document.body.style.overflow = 'auto';  // Cleanup on unmount
    };
  }, [isSidebarOpen]);
  return (
    <Router>
      <div className='flex bg-[#F4F5F6]'>
          <div className=""><MobileSidePanel isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/></div>
          <div className=""><SidePanel /></div>
          <div className={`md:flex-1 md:ml-[20%] 2xl:ml-[18%] px-5 2xl:px-8 overflow-x-hidden afterthis flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen && 'overflow-hidden md:overflow-visible'}`}> 
            {/* flex flex-col min-h-screen transition-all duration-300 ease-in-out ${isSidebarOpen && 'overflow-hidden md:overflow-visible'} */}
            <Navbar toggleSidebar={toggleSidebar}  />
            <div className="routes">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/billing" element={<BillingTab />} /> 
                <Route path="/tables" element={<TablesTab />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn/>} />
              </Routes>
              <Credits/>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
