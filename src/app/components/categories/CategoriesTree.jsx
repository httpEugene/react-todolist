import React from 'react';
import Modal from 'react-modal';
import { render } from 'react-dom';
import { Link } from 'react-router'

import { AddOrUpdateCategory } from './AddOrUpdateCategory.jsx';
import { SubCategory } from './SubCategory.jsx';

export class CategoriesTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryModalActive: false
        };
        this.actions = {
            ADD: 'ADD',
            UPDATE: 'UPDATE',
            ADD_NESTED: 'ADD_NESTED'
        };
    }

    deleteCategory(id) {
        this.props.deleteCategory(id);
    }

    addNestedModal(id) {
        this.setState({
            addNestedModalActive: !this.state.addNestedModalActive,
            categoryId: id
        });
    }

    updateModal(id) {
        this.setState({
            updateModalActive: !this.state.updateModalActive,
            categoryId: id
        });
    }

    render() {
        const iconPadding = {
            paddingLeft: "5px"
        };

        return (
            <div>
                <AddOrUpdateCategory 
                    addCategory={this.props.addCategory}
                    action={this.actions.ADD}
                    updateCategory={this.props.updateCategory}
                    addNestedCategory={this.props.addNestedCategory}/>
                <div className="list-group list-group-root">
                    {this.props.categories.map((category) => 
                        <div className="root-category" key={category.id}>
                            <Link to={'/category/' + category.id} data-target={'#category' + category.id} className="list-group-item" {...category.subCategories.length ? {'data-toggle': 'collapse'} : {}}>
                                {category.subCategories.length ? (<i className="glyphicon glyphicon-chevron-right"></i>) : ''}
                                {category.name}
                                <span className="glyphicon glyphicon-edit" style={iconPadding} aria-hidden="true"
                                    onClick={() => this.updateModal(category.id)}></span>

                                <div className="pull-right">
                                    <span className="glyphicon glyphicon-trash" style={iconPadding} aria-hidden="true"
                                        onClick={() => this.deleteCategory(category.id)}></span>
                                    <span className="glyphicon glyphicon-plus" style={iconPadding} aria-hidden="true"
                                        onClick={() => this.addNestedModal(category.id)}></span>
                                </div>
                            </Link> 
                            {
                                category.subCategories.length 
                                ? (
                                    <SubCategory 
                                        categories={category.subCategories} 
                                        parentId={category.id}
                                        deleteCategory={this.deleteCategory.bind(this)}
                                        addNestedModal={this.addNestedModal.bind(this)}
                                        updateModal={this.updateModal.bind(this)}/>
                                  ) 
                                : ''}
                        </div>
                    )}
                    <Modal 
                       isOpen={this.state.addNestedModalActive}
                       onRequestClose={() => this.addNestedModal()}
                       contentLabel="add-nested-modal">
                        <AddOrUpdateCategory 
                            categories={this.props.categories}
                            addCategory={this.props.addCategory}
                            updateCategory={this.props.updateCategory}
                            addNestedCategory={this.props.addNestedCategory}
                            categoryId={this.state.categoryId}
                            action={this.actions.ADD_NESTED}/>
                    </Modal>
                    <Modal 
                       isOpen={this.state.updateModalActive}
                       onRequestClose={() => this.updateModal()}
                       contentLabel="update-modal">
                        <AddOrUpdateCategory
                            categories={this.props.categories}  
                            addCategory={this.props.addCategory}
                            updateCategory={this.props.updateCategory}
                            addNestedCategory={this.props.addNestedCategory}
                            categoryId={this.state.categoryId}
                            action={this.actions.UPDATE}/>
                    </Modal>
                </div>
            </div>
        );
    }
}