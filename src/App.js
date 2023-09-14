import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe/AboutMe';
import Nav from './components/Nav/Nav'
// routing here 

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<AboutMe />} />
          {/* <Route exact path='/contact' element={< />}/> */}
          {/* <Route exact path='/resume' element={< />}/> */}
          {/* <Route exact path='/portfolio' element={< />}/> */}
        </Routes>
        {/* footer comp here */}
      </Router>
    </div>
  );
}

export default App;
