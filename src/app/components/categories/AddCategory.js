import React from 'react';
import { render } from 'react-dom';

export class AddCategory extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter category title"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Add</button>
                </span>
            </div>
        );
    }
}