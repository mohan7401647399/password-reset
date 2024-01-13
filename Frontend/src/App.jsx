import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import Homepage from './Homepage';
import ResetPassword from './ResetPassword';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
