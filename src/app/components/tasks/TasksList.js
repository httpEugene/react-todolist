import React from 'react';
import { render } from 'react-dom';

import { AddItem } from './AddItem';
import { Task } from './Task';

export class TasksList extends React.Component {
    getTasksList() {
        return [{
            id: 1,
            text: 'Complete homework',
            category: 'Category 1'
        }, {
            id: 2,
            text: 'Clean house',
            category: 'Category 2'
        }, {
            id: 3,
            text: 'Buy soap',
            category: 'Category 2'
        }];
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddItem/>
                </div>
                <div className="row">
                    <ul className="list-group">
                        {this.getTasksList().map((task) => <Task task={task}/> )}
                    </ul>
                </div>
            </div>
        );
    }
}