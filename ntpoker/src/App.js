import Sidebar from "./components/Sidebar"
import Contents from "./components/Content/Contents"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Location from "./components/Location"
import Question from "./components/Question/Question"
import Login from "./components/Login/Login"
import Breadcrumbs from "./components/Breadcrumbs"
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <div>
          <Sidebar />
        </div>

        <div>
          <div>
            <Routes>
              <Route path='/' element={<Home />}/> 
              <Route path='/index.html' element={<Home />}/> 
              <Route path='/content/*' element={<Contents/>} />
              <Route path='/question/*' element={<Question/>} />
              <Route path='/login/*' element={<Login/>} />
            </Routes>
            </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;


