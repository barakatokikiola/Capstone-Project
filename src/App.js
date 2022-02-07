// import Header from './components/Header';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Landing from "./components/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
   <div className='App'>
   <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Sidebar />} />
        <Route path="/welcome" element={<Welcome />} />
    </Routes>
   </div>
  </Router>
  );
}

export default App;
