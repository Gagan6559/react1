import React, {useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Navcard from './components/navcard'
import Content1 from './components/content1'
import Servicesweoffer from './components/servicesweoffer'
import Content2 from './components/content2'
import Content3 from './components/content3'
import Content4 from './components/content4'
import Content5 from './components/content5'
import Content6 from './components/content6'
import Content7 from './components/content7'
import Footer from './components/footer'

function App() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
      fetch('/api/getData').then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])

  return (
    <div>
      <Navbar />
      <Navcard />
      <Content1 />
      <Servicesweoffer />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content7 />
      <Content6 />
      <Footer />
    </div>
    
  );
}

export default App;
