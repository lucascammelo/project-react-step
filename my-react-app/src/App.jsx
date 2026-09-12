
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/aula10/Home';
// import About from './components/aula10/About';
// import Contact from './components/aula10/Contact';
// import Navbar from './components/aula10/Navbar';
// import Navbar2 from './components/aula10/Navbar2';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/aula10/deverDeCasa/Blog";
import Post from "./components/aula10/deverDeCasa/Post";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Navbar2 />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>


    <BrowserRouter>

        <Routes>
            <Route path="/" element={<Blog />}/>
            <Route path="/post/:id" element={<Post />}/>
        </Routes>

    </BrowserRouter>

    
  );
};

export default App;
          