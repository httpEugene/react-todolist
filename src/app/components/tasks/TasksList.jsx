import React from 'react';
import { render } from 'react-dom';

import { AddItem } from './AddItem.jsx';
import { Task } from './Task.jsx';

export class TasksList extends React.Component {
    getCategoryTasksList() {
        return this.props.tasks.filter((task) =>  task.categoryId === this.props.categoryId);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddItem 
                        addTask={this.props.addTask}
                        categoryId={this.props.categoryId}/>
                </div>
                <div className="row">
                    <ul className="list-group">
                        {this.getCategoryTasksList().map((task, i) => <Task key={i} task={task}/> )}
                    </ul> 
                </div>
            </div>
        );
    }
}