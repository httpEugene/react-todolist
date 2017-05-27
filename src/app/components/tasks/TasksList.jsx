import React from 'react';
import { render } from 'react-dom';

import { AddItem } from './AddItem.jsx';
import { Task } from './Task.jsx';

export class TasksList extends React.Component {
    getCategoryTasksList(nextProps) {
        return this.props.tasks.filter((task) =>  task.categoryId === this.props.routeParams.id);        
    }

    shouldComponentUpdate (nextProps) {
        console.log(nextProps);
        return true;
  }

    render() {
        return (
            <div>
                <div className="row">
                    <AddItem 
                        addTask={this.props.route.addTask}
                        categoryId={this.props.routeParams.id}/>
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