import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

import { AddCategory } from './AddCategory.jsx';
import { SubCategory } from './SubCategory.jsx';

export class CategoriesTree extends React.Component {
    constructor() {
        super();
    }

    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div>
                <AddCategory/>
                <div className="list-group list-group-root">
                    {this.props.categories.map((category) => 
                        <div className="root-category" key={category.id}>
                            <Link to={'/category/' + category.id} data-target={'#category' + category.id} className="list-group-item" {...category.subCategories.length ? {'data-toggle': 'collapse'} : {}}>
                                {category.subCategories.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''}
                                {category.name}
                                <span className="glyphicon glyphicon-edit" style={iconPadding} aria-hidden="true"></span>

                                <div className="pull-right">
                                    <span className="glyphicon glyphicon-trash" style={iconPadding} aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-plus" style={iconPadding} aria-hidden="true"></span>
                                </div>
                            </Link> 
                            {category.subCategories.length ? (<SubCategory categories={category.subCategories} parentId={category.id}/>) : ''}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}