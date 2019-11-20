import React, { Component } from 'react';
import Course from './course';

class LstCourses extends Component {

    render() {
        return (<div>
            <button className="btn btn-primary btn-sm m-3" onClick={this.props.onClearCounters}>Clear All Registered</button>
            <ul>
                <li className="course-container" style={{backgroundColor:"grey", color: "white", fontWeight:"bold"}}>
                    <span>ID</span> <span>Course Title</span> <span></span> <span></span> <span></span>
                </li>
                { this.props.courses.map(course => 
                <Course key={course.id} course={course} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} />)
                }
            </ul>
        </div>)
    }
}

export default LstCourses;