import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import ContactPage from './components/Contact/Contact'
import GitHubFooter from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import MyProjectsPage from './components/Projects/Projects'
import ServicePage from './components/Service/Service'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Banner/>
    <ServicePage/>
    <MyProjectsPage/>
    <ContactPage/>
    <GitHubFooter/>
    </>
  )
}

export default App
