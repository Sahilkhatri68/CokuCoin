import './App.css';
import Body from './Components/Body';
import "./tailwind.config";
import Header from './Components/Header';
import Getstarted from './Components/Getstarted';
import Signin from './Components/Signin';
import SigninLogin from './Components/signinLogin';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Header />
       
       <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path="signin" element={<Signin/>}></Route>
        <Route path="/signlogin" element={<SigninLogin/>}></Route>
       </Routes>
 


    </div>
  );
}

