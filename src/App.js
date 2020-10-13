import React from 'react';
import Lands from './Components/Landing/land';
import Crs from './Components/Courses/course';
import Foot from './Components/Footer/footerpath'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';

function App() {
  return (
    <div>
      <Router>
        <LandingPage path='/'></LandingPage>
        <FooterPage path='/footer'></FooterPage>
        <CoursePage path="/course"></CoursePage>
      </Router>
    </div>
  );
}
function LandingPage(){
  return <Lands></Lands>
}
function CoursePage(){
  return <Crs></Crs>
}
function FooterPage(){
  return <Foot></Foot>
}
export default App;
