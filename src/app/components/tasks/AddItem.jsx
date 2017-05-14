import React from 'react';
import { render } from 'react-dom';

export class AddItem extends React.Component {
    addTask() {
        const task = {
            id: Math.floor(Math.random() * 10000) + '',
            text: this.refs.text.value,
            description: 'description',
            categoryId: this.props.categoryId,
            done: false
        };
        this.props.addTask(task);
        this.text = '';
    }

    render() {
        return (
            <div className="input-group pull-right col-xs-7">
                <input type="text" className="form-control" placeholder="Enter task name" ref="text"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                        onClick={() => this.addTask()}>
                            Add
                    </button>
                </span>
            </div>
        );
    }
}