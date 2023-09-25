import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import AboutMe from './src/pages/AboutMe/AboutMe';
import Nav from './src/components/Nav/Nav';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
// import Project from './components/Project/Project';
import Contact from './src/pages/Contact/Contact';
import MyWork from './src/pages/MyWork/MyWork';
import Resume from './src/pages/Resume/Resume';


// routing here 

function App() {
  return (
    <div className="App" class='hero is-fullheight'>
      <Router>
        <Header >
          <Nav />
        </Header>
        <Routes>
          <Route exact path='/react20' element={<AboutMe/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/resume' element={<Resume/>}/>
          <Route exact path='/portfolio' element={<MyWork/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
