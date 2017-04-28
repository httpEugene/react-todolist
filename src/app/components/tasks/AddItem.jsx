import React from 'react';
import { render } from 'react-dom';

export class AddItem extends React.Component {
    render() {
        return (
            <div className="input-group pull-right col-xs-7">
                <input type="text" className="form-control" placeholder="Enter task name"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Add</button>
                </span>
            </div>
        );
    }
}