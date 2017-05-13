import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

export class Task extends React.Component {

    checkboxToggle() {
        this.props.task.done = !this.props.task.done;
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" checked={this.props.task.done} onChange={this.checkboxToggle}/> {this.props.task.text}
                    </label>
                    <Link to={"/task/edit/" + this.props.task.id}>
                        <span className="pull-right glyphicon glyphicon-edit" aria-hidden="true"></span>
                    </Link>
                </div>
            </li>
        );
    }
}