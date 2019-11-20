import React, { Component } from 'react';

class Course extends Component {

    render() {
        const { id, name, counter } = this.props.course;

        return (
        <li className="course-container">
            <span>{id}.</span> <span>{name}</span>
            <span className={this.setBadgeClasses()}>{counter}</span>
            <span><button onClick={ () => this.props.onIncrement(this.props.course) } className="btn btn-primary btn-sm m-3">Add Student</button></span>
            <span><button onClick={ () => this.props.onDecrement(this.props.course) } className="btn btn-primary btn-sm m-3">Remove Student</button></span>
            <button onClick={ () => this.props.onDelete(this.props.course.id) } className="btn btn-warning btn-sm m-3">Cancel Event</button>
        </li>
        );
    };

    setBadgeClasses() {
        let badgeclasses = "badge m-3 badge-pill ";
        badgeclasses += (this.props.course.counter === 0) ? "badge-danger" : "badge-info";
        return badgeclasses;
    };
}

export default Course;