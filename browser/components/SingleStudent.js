import React, { Component } from 'react';

const findAvg = (tests) => {
    return tests.map(val => val.grade)
    .reduce((accum, val) => 
    { accum = accum +val;
    return accum}, 0 )/ tests.length
}

const SingleStudent = (props) => {
    return (
        <div>
         <h1>{props.student.fullName}</h1>
         <h3>Average Score: {findAvg(props.student.tests)}%</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Grade</th>
                        <th>Subject</th>
                    </tr>
                    {
                        props.student.tests.map((test) => {
                            return (
                                <tr key = {test.id}>
                                    <td> {test.grade} </td>
                                    <td> {test.subject} </td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
             </table>
        </div>
    )
}


export default SingleStudent