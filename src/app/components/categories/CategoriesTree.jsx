import React from 'react';
import { render } from 'react-dom';

import { AddCategory } from './AddCategory.jsx';
import { SubCategory } from './SubCategory.jsx';

export class CategoriesTree extends React.Component {
    constructor() {
        super();
        this.state = {
            tasksVisible: false,
            categories: [{
                id: 1,
                name: 'Category 1',
                childrens: [{
                    id: 11,
                    name: 'Category 1.1',
                    childrens: []
                }]
            }, {
                id: 2,
                name: 'Category 2',
                childrens: [{
                    id: 21,
                    name: 'Category 2.1',
                    childrens: [{
                        id: 21,
                        name: 'Category 2.1.1',
                        childrens: []
                    }, {
                        id: 22,
                        name: 'Category 2.1.2',
                        childrens: []
                    }]
                }]
            }, {
                id: 3,
                name: 'Category 3',
                childrens: []
            }]
        };
    }
    showTasksList() {
        this.props.tasksVisibility(true);
    }

    hideTasksList() {
        this.props.tasksVisibility(false);
    }

    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div>
                <AddCategory/>
                <div className="list-group list-group-root">
                    {this.state.categories.map((category) => 
                        <div className="root-category" key={category.id}>
                            <a href={'#item-' + category.id} className="list-group-item" {...category.childrens.length ? {'data-toggle': 'collapse'} : {}}>
                                {category.childrens.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''}
                                {category.name}
                                <span className="glyphicon glyphicon-edit" style={iconPadding} aria-hidden="true"></span>

                                <div className="pull-right">
                                    <span className="glyphicon glyphicon-trash" style={iconPadding} aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-plus" style={iconPadding} aria-hidden="true"></span>
                                </div>
                            </a> 
                            {category.childrens.length ? (<SubCategory categories={category.childrens} parentId={category.id}/>) : ''}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}