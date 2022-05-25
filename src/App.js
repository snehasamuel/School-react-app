import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Addfaculty from './components/Addfaculty';
import Searchstudent from './components/Searchstudent';
import Searchfaculty from './components/Searchfaculty';
import Viewstudent from './components/Viewstudent';
import Viewfaculty from './components/Viewfaculty';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addstudent/>}/>
      <Route path="/addfac" exact element={<Addfaculty/>}/>
      <Route path="/searchstud" exact element={<Searchstudent/>}/>
      <Route path="/searchfac" exact element={<Searchfaculty/>}/>
      <Route path="/viewstud" exact element={<Viewstudent/>}/>
      <Route path="/viewfac" exact element={<Viewfaculty/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
