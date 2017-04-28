import React from 'react';
import { render } from 'react-dom';

export class SubCategory extends React.Component {
    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div className="sub-category">
                {this.props.categories.map((category) =>  
                    <div key={category.id} className="list-group collapse" id={'item-' + this.props.parentId}>
                        <a href={'#item-' + category.id} className="list-group-item" {...category.childrens.length ? {'data-toggle': 'collapse'} : {}}>
                            {category.childrens.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''} {category.name}
                        </a>
                        {category.childrens.length ? (<SubCategory categories={category.childrens} parentId={category.id}/>) : ''}                       
                    </div>
                )}
            </div>
        );
    }
}