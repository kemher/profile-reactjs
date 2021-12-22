
// import {Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';


// pages
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';



function App() {


  return (
  	<Router>
  		<Routes>
  			<Route exact path='/' element={<Landing/>}/>
  			<Route exact path='/about' element={<About/>}/>

  		</Routes>
  		<Footer fixed="bottom"/>
  	</Router>


  );
}

export default App;
