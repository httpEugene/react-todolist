import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

export class SubCategoriesToChoose extends React.Component {
    categoryChosen(id) {
        this.props.categoryChosen(id);
    }

    isCategoryChosen(id) {
        return this.props.isCategoryChosen(id);
    }

    render() {
        return (

                            //    className={this.isCategoryChosen(category.id) ? 'list-group-item-chosen' : 'list-group-item '}
            <div className="sub-category"> 
                <div className="list-group" id={'category' + this.props.parentId}>
                    {this.props.categories.map((category) => 
                        <div className="list-of-subcategories" key={category.id}>
                            <div className="list-group-item" 
                               className={this.isCategoryChosen(category.id) ? 'list-group-item-chosen' : 'list-group-item '}
                               onClick={() => this.categoryChosen(category.id)}>
                                {category.subCategories.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''} {category.name}

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
                                            isCategoryChosen={this.props.isCategoryChosen}/>
                                       ) 
                                    : ''
                            }                       
                        </div>
                    )}
                </div>
            </div>
        );
    }
}