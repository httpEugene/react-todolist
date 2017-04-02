import React from 'react';
import { render } from 'react-dom';

export class Task extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="checkbox">
                    <label>
                        <input type="checkbox"/> {this.props.task.text}
                    </label>
                    <span className="pull-right glyphicon glyphicon-edit" aria-hidden="true"></span>
                </div>
            </li>
        );
    }
}