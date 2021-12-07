import logo from './logo.svg';
import './App.css';

import CourseList from './CourseList';
import { useEffect, useState } from 'react';

import axios from 'axios';
import CourseSave from './CourseSave';

function App() {

  let [courseState, setCourseState] = useState({
    courses: [
      { id: 1, code: 'xx', name: 'x' },
      { id: 2, code: 'xx', name: 'x' }
    ]
  });

  let [courseSaveState, setCourseSaveState] = useState({
    name: '',
    code: ''
  })

  function saveCourse() {
    // send request
    console.log(courseSaveState);
    console.log('course saved.')
  }

  function nameChangedEvent(event) {
    setCourseSaveState({ ...courseSaveState, name: event.target.value })
  }


  useEffect(() => {
    axios.get('http://localhost:8080/courses')
      .then(res => {
        setCourseState({ courses: res.data })
      })
  }, [])

  return (
    <div className="App">

      {
        courseState.courses.map((item) => {
          return <CourseList
            courseCode={item.code}
            courseName={item.name} />
        })
      }

      <CourseSave onClickFn={saveCourse}
        nameChangedEvent={(event) => { nameChangedEvent(event) }}
        // courseSaveName={courseSaveState.name}
      />

    </div>
  );
}

export default App;
