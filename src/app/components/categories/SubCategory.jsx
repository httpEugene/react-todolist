import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'

export class SubCategory extends React.Component {
    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div className="sub-category"> 
                <div className="list-group collapse" id={'category' + this.props.parentId}>
                    {this.props.categories.map((category) => 
                        <div className="list-of-subcategories" key={category.id}>
                            <Link to={'/category/' + category.id} data-target={'#category' + category.id} className="list-group-item" {...category.subCategories.length ? {'data-toggle': 'collapse'} : {}}>
                                {category.subCategories.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''} {category.name}
                            </Link>
                            {category.subCategories.length ? (<SubCategory categories={category.subCategories} parentId={category.id}/>) : ''}                       
                        </div>
                    )}
                </div>
            </div>
        );
    }
}