import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import MarriedStudents from './MarriedStudents';

const MarriedList = () => {
    const { students } = useContext(StudentContext);
    console.log(students)
  return (
      <div>
          <ul>
              {students.map((student) => (<MarriedStudents key={student.id} {...student} />))}
          </ul>
      </div>
  )
}

export default MarriedList