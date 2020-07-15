import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

import Main from './components/main'

function App() {

  const [data, setData] = useState('')

  useEffect(() => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=yhjNUlVK4ZmYaZjeTN4xM3T3WH9Zr32lH6iXXUOS`)
  
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    
  }, [])

  return (
    <div className="App">

      {
        <Main data = {data}/>
      }

    </div>
  );

}

export default App;
