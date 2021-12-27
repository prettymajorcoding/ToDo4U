import React, { Component } from 'react';
import { TASKS } from '../shared/tasks';
import AddTask from './AddTask';
import TasksListComponent from './TasksListComponent';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);
        this.state = {
            tasks: TASKS
        };
    }

    render() {
        return (
            <>
                {/* <TasksListComponent tasks={this.state.tasks}/> */}
                <AddTask />
            </>
        )
    }
}

export default Home;