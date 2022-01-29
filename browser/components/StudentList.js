import React from 'react';


//functional componenet 
const StudentList = (props) => {
        return (
            <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {props.students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td onClick={() => props.setSingleStudent(student)}
                  >Details</td>
                </tr>
              );
            })}
          </tbody>
        )
    }

export default StudentList