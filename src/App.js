import logo from './logo.svg';
import './App.css';
import CourseList from './CourseList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseSave from './CourseSave';

function App() {

  let [courseSate, setCourseState] = useState({
    courses: [{
      id: 1,
      code: 'AA',
      name: 'AAA Name'
    }, {
      id: 1,
      code: 'B',
      name: 'BBB Name'
    }]
  });

  let [courseSaveState, setCourseSaveState] = useState({
    name: '', code: ''
  });
  
  function nameChangedEvent(event){
    setCourseSaveState({...courseSaveState, name: event.target.value})
  }

  function saveCourse() {
    console.log(courseSaveState);
    console.log("Course saved.");
  }

  useEffect(() => {
    axios.get('http://localhost:8080/courses')
      .then(res => {
        console.log(res)
        setCourseState({ courses: res.data })
      }).catch(err => {
        console.log(err)
      })
  }, []);



  return (< div className="App" >
    {
      courseSate.courses.map(item => {
        return <CourseList courseName={item.name}
          courseCode={item.code}
        />
      })
    }
    <CourseSave onClickFn= {saveCourse} 
    nameChangedEvent = {(event)=> {nameChangedEvent(event)}}
    courseSaveName = {courseSaveState.name}
     />
     
  </div >
  );
}

export default App;