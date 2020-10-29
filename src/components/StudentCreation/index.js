import React, { Component } from 'react';

class Student extends Component {
    componentWillMount() {
        console.log('I am about to say hello');
    }

    render() {
        return <h1>Hello world</h1>;
    }
    componentDidMount() {
        console.log('component Did Mount');
    }

    componentWillUpdate() {
        console.log('component will update');
    }

    shouldComponentUpdate() {
        console.log('should Component Update');
    }

    componentWillUnmount() {
        console.log('component Will Unmount');
    }

    componentWillReceiveProps() {
        console.log('component Will ReceiveProps');
    }
    componentDidUpdate() {
        console.log('component Did Update');
    }
}
export default Student;