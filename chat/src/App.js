import {BrowserRouter} from 'react-router-dom';
import Navbar from './../src/Components/Navbar';
import AppRouter from './Components/AppRouter';
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from './index';
import { useContext } from 'react';
import Loader from './Components/Loader';

function App() {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return <Loader/>
  }
  return (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
