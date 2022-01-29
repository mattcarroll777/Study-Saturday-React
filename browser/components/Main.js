import React, { Component } from 'react';
import axios from 'axios';
import StudentList from "./StudentList"
import SingleStudent from './SingleStudent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      singleStudent: {}
    };
    this.setSingleStudent = this.setSingleStudent.bind(this)
  }// need to bound if using function elsewhere 
  //if you dont the computer wont know where its from 
  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  setSingleStudent(data){
    return this.setState({singleStudent: data})
  }
  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <StudentList students = {this.state.students}
          setSingleStudent = {this.setSingleStudent}/>
        </table>
        {
          this.state.singleStudent.id ? //if singleStudent has an id prop--> is truthy
          <SingleStudent student= {this.state.singleStudent} /> : null // run SingleStudent, if not null or dont do anything
        }
      </div>
    );
  }
}
//ternary = shortened down if/else statment