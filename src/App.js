import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Tracking from './pages/employee_tracking/Tracking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee_tracking' element={<Tracking />} />
      </Routes>
    </div>
  );
}

export default App;
