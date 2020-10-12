import React from 'react';
import Lands from './Components/Landing/land';
import Crs from './Components/Courses/course';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';

function App() {
  return (
    <div>
      <Router>
        <LandingPage path='/'></LandingPage>

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
export default App;
