import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Project from './components/Project/Project';
import Contact from './pages/Contact/Contact';
import MyWork from './pages/MyWork/MyWork';
import Resume from './pages/Resume/Resume';


// routing here 

function App() {
  return (
    <div className="App">
      <Router>
        <Header >
          <Nav />
        </Header>

        <Routes>
          <Route exact path='/' element={<AboutMe />}/>
          <Route exact path='/contact' element={<Contact />}/>
          <Route exact path='/resume' element={<Resume />}/>
          <Route exact path='/portfolio' element={<MyWork />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
