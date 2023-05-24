import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import Dropzone from './components/Dropzone';
import ViewerAndEmail from './components/ViewerAndEmail.js';

function App() {
  const [pdf, setPdf] = useState([]);
  pdf.map((data) => console.log(data.base64));
  const handleAddItem = (addItem) => {
    setPdf([...pdf, addItem]);
  };
  return (
    <div className='main'>
      <Navbar/>
      {pdf.length !== 0 ? (
        <ViewerAndEmail pdf={pdf} />
      ) : (
        <Dropzone handleAddItem={handleAddItem} />
      )} 
    </div>
  );
} 

export default App;
