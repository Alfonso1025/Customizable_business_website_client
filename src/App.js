import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/HomePage';
import Trayectory from './Pages/Trayectory/Trayectory';
import PracticeAreas from './Pages/PracticeAreas/PracticeAreas';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/Navbars/MainNavbar';
import { AuthContext, AuthContextProvider } from './Context/AuthContext';
import {BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Outlet} from 'react-router-dom'
import { useContext } from 'react';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  //global variables
  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext.isAuthenticated
  
 console.log('isauthenticated is: ', isAuthenticated)
  const ProtectedRoute = ({ isAuth, redirectPath}) => {
    
    if (!isAuth) {
      console.log('is auth is', isAuth)
      return <Navigate to={redirectPath} replace />;

    }
    console.log('is auth is', isAuth)
    return <Outlet />;
  };

  return (
   <AuthContextProvider>
    <div data-testid='App-div-wrapper'className="App">
      <MainNavbar/>
      <Routes>
         <Route index element={<Home/>} />
         <Route path="/trayectoria" element={<Trayectory/>} />
         <Route path="/contacto" element={<Contact/>} />
         <Route path="/practica" element={<PracticeAreas/>} />
         <Route path="/agendarcita" element={<Appointment/>} />
         


        
         <Route element={<ProtectedRoute isAuth={isAuthenticated} redirectPath={'agendarcita'} />}>
           <Route path="/dashboard" element={<Dashboard/>} />
         </Route>
         <Route path="*" element={<p>There's nothing here: 404!</p>} />
         
      </Routes>
      <Footer/>
    </div>
    </AuthContextProvider>
  );
}

export default App;
