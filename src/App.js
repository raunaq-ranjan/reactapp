import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {  
  /*
  async componentDidMount () {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //.then(res => console.log(res.data));

    this.setState({ users: res.data, loading: false });
  }
  */

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home/>} />

                <Route exact path='/about' element={<About/>}/>

                <Route exact path='/user/:login' element={<User/>} />

                <Route exact path='*' element={<NotFound/>} />
              </Routes>              
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
