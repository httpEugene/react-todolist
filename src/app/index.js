import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/header/Header';
import { CategoriesTree } from './components/categories/CategoriesTree';
import { TasksList } from './components/tasks/TasksList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasksVisible: false
        };
    }

    setTasksVisibility(visibilityState) {
        this.setState({
            tasksVisible: visibilityState
        })
    }

    render() {
        const tasksList = {
            visible: false,
            what: 'hey'
        };

        return (
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col-md-4">
                        <CategoriesTree tasksVisibility={this.setTasksVisibility.bind(this)}/>
                    </div>
                    <div className="col-md-8">
                        { this.state.tasksVisible && <TasksList/>}
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));