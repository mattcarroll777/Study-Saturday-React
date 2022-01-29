import React, { Component } from 'react'
import axios from 'axios'


// obj orientated component 
export default class Main extends Component {
    constructor(props){ //takes in properties that you want
        //to pass down to your components
        super(props);// super is used on child components to 
        //push props from parents to children 
        this.state = {
        //this.state = object    
            students = []
        // student = key , [] = value pair
        }
    } // everything inside constructor function gets passed into props
 // and then is used in later components

    //lifecycle hook that happens right before render 
    componentDidMount(){
        this.getStudents(); //calls the funciton below right after html is rendered 
    }

    async getStudents(){
        try { // axious.get is using express method to get what 
            //is returned when going to localhost:3000/students
            //express method/ router is getting information from database 
           const {data} = await axios.get('/student')
           this.setState({students: data}) //setState method makes this.state.students = data
            //this.state = {students =[]} -> this.state = {student:[data]}
        } catch (error) {
            console.log(error)            
        }// data holds huge array returned 
    }

    render(){ // method included in react component, specific to class components
        return (
            <div>
                <h1>Students</h1>
                <table>
                    <tbody>
                        <tr>
                            <th> Name</th>
                        </tr>
                        {this.state.students.map(student => { // map through the array inside state.students
                        //each value inside the array is a "student" instance
                            return (
                                <tr key = {student.id}>
                                    <td>{student.fullName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}







