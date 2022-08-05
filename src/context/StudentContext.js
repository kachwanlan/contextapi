import React, {useState,createContext} from 'react';
import { data } from '../data';

export const StudentContext = createContext(); 

const StudentContextProvider = (props) => {
    const [students, setStudents] = useState(data);
    
    const removeSingleStudents = (married) => {
    setStudents((student) => {
      return (student.filter((student) => student.married === 'true'));
    })
  }

  const removeMarriedStudents = (married) => {
    setStudents((student) => {
      return (student.filter((student) => student.married === 'false'));
    })
  }
  return (
      <StudentContext.Provider value={{students, removeSingleStudents, removeMarriedStudents}} >
          {props.children}
      </StudentContext.Provider>
  )
}

export default StudentContextProvider;