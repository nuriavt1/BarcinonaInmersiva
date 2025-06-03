import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pagines/home'
import Mapa from './pagines/app/mapa'
import OnBoarding from './pagines/onBoarding'
import Video from './pagines/app/video'
import Biblioteca from './pagines/app/biblioteca'
import Juga from './pagines/app/juga'
import Nivells from './pagines/app/nivells'
function App() {
  return (
    <div className="App">
      {/*Diferents rutes per navegar per l'aplicació*/}
      
      <Router>
        <Routes>
          {/*Pàgina de Benvinguda*/}
          <Route path="/" element={<Home />} ></Route>
          <Route path="onBoarding" element={<OnBoarding />} ></Route>
          <Route path="mapa" element={<Mapa />} ></Route>
          <Route path="video" element={<Video />} ></Route>
          <Route path="biblioteca" element={<Biblioteca />} ></Route>
          <Route path="juga" element={<Juga />} ></Route>
          <Route path="nivells" element={<Nivells />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
