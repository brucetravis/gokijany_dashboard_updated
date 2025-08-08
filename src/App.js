import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Tracking from './pages/employee_tracking/Tracking';
import Registration from './pages/registration/Registration';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header';
import Emission from './pages/emissions/Emission';

function App() {

  // useLocation to conditionally render the sidebar
  const location = useLocation()

  // check if the path is not the root
  const showSidebar = location.pathname !== '/'
  const showHeader = location.pathname !== '/'
  
  return (
    <div className="App">

      {showHeader && <Header />}
      
      <div className='app-components '>
        {showSidebar && <Sidebar />}

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Registration />} />
          <Route path='/employee_tracking' element={<Tracking />} />
          <Route path='/emissions' element={<Emission />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
