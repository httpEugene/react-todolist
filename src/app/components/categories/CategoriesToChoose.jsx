import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'

import { SubCategoriesToChoose } from './SubCategoriesToChoose.jsx';

export class CategoriesToChoose extends React.Component {
    constructor() {
        super();
        this.state = {
            chosenCategoryId: null
        };
    }

    isCategoryChosen(id) {
        return this.state.chosenCategoryId === id;
    }

    categoryChosen(id) {
        this.setState({
            chosenCategoryId: id
        });
        this.props.categoryChosen(id);
    }

    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div className="list-group list-group-root">
                {this.props.categories.map((category) => 
                    <div className="root-category" key={category.id}>
                        <div data-target={'#category' + category.id} className={this.isCategoryChosen(category.id) ? 'list-group-item-chosen' : 'list-group-item '}
                           {...this.isCategoryChosen(category.id) ? {'className': 'list-group-item-chosen'} : {}}
                           onClick={() => this.categoryChosen(category.id)}>
                            {category.subCategories.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''}
                            {category.name}

                            <div className="pull-right">
                                <span className="glyphicon glyphicon-share-alt rotated-glyphicon"></span>
                            </div>
                        </div> 
                        { 
                            category.subCategories.length 
                                ? (
                                    <SubCategoriesToChoose 
                                        categories={category.subCategories} 
                                        parentId={category.id}
                                        categoryChosen={this.categoryChosen.bind(this)}
                                        isCategoryChosen={this.isCategoryChosen.bind(this)}/>
                                  ) 
                                : ''
                        }
                    </div>
                )}
            </div>
        );
    }
}