import React from 'react';
import { render } from 'react-dom';

import { AddItem } from './AddItem.jsx';
import { Task } from './Task.jsx';

export class TasksList extends React.Component {
    getCategoryTasksList() {
        const tasks = [{
            id: 1,
            text: 'Complete homework',
            categoryId: '1'
        }, {
            id: 11,
            text: 'Read book',
            categoryId: '1'
        }, {
            id: 2,
            text: 'Clean house',
            categoryId: '2'
        }, {
            id: 3,
            text: 'Buy soap',
            categoryId: '3'
        }, {
            id: 4,
            text: 'Pay bills',
            categoryId: '11'
        }, {
            id: 5,
            text: 'Finish react course',
            categoryId: '21'
        }, {
            id: 6,
            text: 'Change bank',
            categoryId: '212'
        }];

        return tasks.filter((task) =>  task.categoryId === this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddItem/>
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