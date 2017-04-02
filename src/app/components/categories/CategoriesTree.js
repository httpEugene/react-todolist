import React from 'react';
import { render } from 'react-dom';

import { AddCategory } from './AddCategory';

export class CategoriesTree extends React.Component {
    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div>
                <AddCategory/>
                <div className="list-group list-group-root">
                    <a href="#item-1" className="list-group-item" data-toggle="collapse">
                        <i className="glyphicon glyphicon-chevron-right"></i>
                        Category 1
                        <span className="glyphicon glyphicon-edit" style={iconPadding} aria-hidden="true"></span>

                        <div className="pull-right">
                            <span className="glyphicon glyphicon-trash" style={iconPadding} aria-hidden="true"></span>
                            <span className="glyphicon glyphicon-plus" style={iconPadding} aria-hidden="true"></span>
                        </div>
                    </a>
                    <div className="list-group collapse" id="item-1">
                        <a href="#item-1-1" className="list-group-item" data-toggle="collapse">
                            <i className="glyphicon glyphicon-chevron-right"></i>Category 1.1
                        </a>
                        <div className="list-group collapse" id="item-1-1">
                            <a href="#" className="list-group-item">Category 1.1.1</a>
                            <a href="#" className="list-group-item">Category 1.1.2</a>
                            <a href="#" className="list-group-item">Category 1.1.3</a>
                        </div>
                        
                        <a href="#item-1-2" className="list-group-item" data-toggle="collapse">
                            <i className="glyphicon glyphicon-chevron-right"></i>Category 1.2
                        </a>
                        <div className="list-group collapse" id="item-1-2">
                            <a href="#" className="list-group-item">Category 1.2.1</a>
                            <a href="#" className="list-group-item">Category 1.2.2</a>
                            <a href="#" className="list-group-item">Category 1.2.3</a>
                        </div>                        
                    </div>
                    
                    <a href="#item-2" className="list-group-item" data-toggle="collapse">
                        <i className="glyphicon glyphicon-chevron-right"></i>Category 2
                    </a>
                    <div className="list-group collapse" id="item-2"> 
                        <a href="#item-2-1" className="list-group-item" data-toggle="collapse">
                            <i className="glyphicon glyphicon-chevron-right"></i>Category 2.1
                        </a>
                        <div className="list-group collapse" id="item-2-1">
                            <a href="#" className="list-group-item">Category 2.1.1</a>
                            <a href="#" className="list-group-item">Category 2.1.2</a>
                            <a href="#" className="list-group-item">Category 2.1.3</a>
                        </div>

                        <a href="#item-2-2" className="list-group-item" data-toggle="collapse">
                            <i className="glyphicon glyphicon-chevron-right"></i>Category 2.2
                        </a>
                        <div className="list-group collapse" id="item-2-2">
                            <a href="#" className="list-group-item">Category 2.2.1</a>
                            <a href="#" className="list-group-item">Category 2.2.2</a>
                            <a href="#" className="list-group-item">Category 2.2.3</a>
                        </div>
                    </div>
                    
                    <a href="#item-3" className="list-group-item" data-toggle="collapse">
                        <i className="glyphicon glyphicon-chevron-right"></i>Category 3
                    </a>
                    <div className="list-group collapse" id="item-3"> 
                        <a href="#item-3-1" className="list-group-item" data-toggle="collapse">
                            <i className="glyphicon glyphicon-chevron-right"></i>Category 3.1
                        </a>
                        <div className="list-group collapse" id="item-3-1">
                            <a href="#" className="list-group-item">Category 3.1.1</a>
                            <a href="#" className="list-group-item">Category 3.1.2</a>
                            <a href="#" className="list-group-item">Category 3.1.3</a>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}