import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import ManageData from './Component/ManageData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/manage-data" element={<ManageData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
