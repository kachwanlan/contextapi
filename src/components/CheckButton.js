import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const CheckButton = () => {
    const { students, removeSingleStudents, removeMarriedStudents } = useContext(StudentContext);
  return (
      <div>
          <button onClick={removeSingleStudents}>Remove Single Students</button>
          <button onClick={removeMarriedStudents} >Remove Married Students</button>
    </div>
  )
}

export default CheckButton