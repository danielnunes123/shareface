import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import Navbar from './Components/layout/Navbar';
import Menul from './Components/layout/Menul';
import Menur from './Components/layout/Menur';
import Container from './Components/layout/Container';

function App() {
  return (
   <Router>
    <Navbar/>
    <div className='w-[100%] flex justify-between'>
    <Menul/>
    <Container>
    <Routes>
     
      <Route exact path='/' element={<Home/>} />
     
    </Routes>
    </Container>
    <Menur/>
    </div>
   </Router>
  );
}

export default App;
