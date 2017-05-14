import React from 'react';
import { render } from 'react-dom';

export class AddCategory extends React.Component {
    addCategory() {
        const category = {
            id: Math.floor(Math.random() * 10000) + '',
            name: this.refs.name.value,
            subCategories: []
        };
        this.props.addCategory(category);
        this.name = '';
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter category title" ref="name"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" 
                        onClick={() => this.addCategory()}>
                            Add
                    </button>
                </span>
            </div>
        );
    }
}