import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar"
import data from "./data/data.json";
import Footer from './components/Footer';
import CardList from './components/CardList';
import Filter from './components/Filter'

function App() {
  
const [type, setType] = useState()

function clothType(category){
  setType(category);
}
  return (
    <>
      <div>
        <Navbar/>
        <Filter filters={Filter} setType={clothType}/>
        <CardList/>
        <Footer/>
      </div>
    </>
  )
}

export default App
