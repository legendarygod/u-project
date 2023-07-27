import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard';
import EditProject from './pages/EditProject';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ViewProject from './pages/ViewProject';
import Verification from './pages/Verification';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/register' element={<Register />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/landing' element={<Landing />}/>
          <Route exact path='/profile/:uid' element={<Profile />}/>
          <Route exact path='/dashboard' element={<Dashboard />}/>
          <Route exact path='/viewProject' element={<ViewProject />}/>
          <Route exact path='/createProject/:userid' element={<CreateProject />}/>
          <Route exact path='/editProject' element={<EditProject />}/>
          <Route exact path='/verify' element={<Verification />}/>
          <Route exact path='*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}




export default App;
