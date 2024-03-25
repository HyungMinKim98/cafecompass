import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer';

const Layout = () => {
  return(
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='about' element= {<AboutPage />} />
    

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
