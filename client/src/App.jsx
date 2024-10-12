import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import '../src/App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import WorkOutSessions from './Components/WorkOutSessions.jsx'
import Galary from './Components/Galary.jsx'
import Pricing from './Components/Pricing.jsx'
import Contacts from './Components/Contacts.jsx'
import BMICalculator from './Components/BMICalculator.jsx'
import Footer from './Components/Footer.jsx'

// C:\Users\ASUS\OneDrive\Documents\Website_design\EcoFlex Gym\client\src\App.css

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkOutSessions />
      {/* <Galary /> */}
      <Pricing />
      <Contacts />
      <BMICalculator />
      <Footer />
      <ToastContainer />
    </Router>
  )
}

export default App