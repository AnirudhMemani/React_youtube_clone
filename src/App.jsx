import './App.css';
import AddVideo from './Components/addVideos';
import Navbar from './Components/navbar';
import Home from './Components/home';
import PageNotFound from './Components/pageNotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/addVideo" element={<AddVideo />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;