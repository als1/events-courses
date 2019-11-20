import React, { Component } from 'react';
import Cart from './components/cart';
import LstCourses from './components/lstcourses';
import './App.css';
//import coursesStatic from './courses.json';

class App extends Component {
  state = {
    //courses: courses
    courses: []
  };

  componentDidMount() {
    //fetch("https://hills.ccsf.edu/~asary/courses.json")
    fetch("https://raw.githubusercontent.com/als1/events-courses/master/src/courses.json")
      .then(courses => courses.json())
      .then( (courses) => {
        this.setState({ courses: courses });
        //console.log("Courses read: ", courses)
      },
      (error) => {
        this.setState({ courses: [] });
        console.log("Error: Could not get courses: ", error);
      });
  }

  handleAddButton = counter => {
    const tempcourses = [...this.state.courses];
    const i = tempcourses.indexOf(counter);
    tempcourses[i] = { ...counter };
    tempcourses[i].counter++;
    this.setState({ courses: tempcourses });
  }

  handleRemoveButton = counter => {
    if (counter.counter === 0) return;
    const tempcourses = [...this.state.courses];
    const i = tempcourses.indexOf(counter);
    tempcourses[i] = { ...counter };
    tempcourses[i].counter--;
    this.setState({ courses: tempcourses });
  }

  handleDeleteButton = (courseId) => {
    const tempcourses = this.state.courses.filter(c => c.id !== courseId);
    this.setState( { courses: tempcourses });
  }

  handleClearCounters = () => {
    const tempcourses = this.state.courses.map(ct => {
        ct.counter = 0;
        return ct;
    });
    this.setState({ courses: tempcourses });
  }

  render() {
    return (
      <React.Fragment>
        <Cart totalItems={ this.state.courses.length === 0 ? 0 : this.state.courses.map(i => i.counter).reduce((prev, next) => prev + next) } />
        <main className="container">
          <LstCourses courses={this.state.courses} onClearCounters={this.handleClearCounters} onDelete={this.handleDeleteButton} onIncrement={this.handleAddButton} onDecrement={this.handleRemoveButton} />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
