import React from 'react';
import { render } from 'react-dom';
import update from 'immutability-helper';

export class AddOrUpdateCategory extends React.Component {
    constructor(props) {
        super(props);
        this.actions = {
            ADD: 'ADD',
            UPDATE: 'UPDATE',
            ADD_NESTED: 'ADD_NESTED'
        };
        this.state = {
            category: {}
        };
        if (this.props.categoryId && this.props.action === this.actions.UPDATE) {
            this.props.categories.some((category) => this.getCategoryById(category, this.props.categoryId));
        }
    }

    getCategoryById(category, searchingCategoryId) {
        if (category.id === searchingCategoryId) {
            return this.state.category =  category;
        }
        if (category.subCategories.length) {
            return category.subCategories.some((category) => this.getCategoryById(category, searchingCategoryId));
        }
    }

    addCategory() {
        const category = this.generateNewCategory();
        this.props.addCategory(category);
        this.name = '';
    }

    onCategoryNameChange() {
        this.setState((prevState) => update(prevState, {
            category: {
                name: {$set: this.refs.name.value}
            }
        }));
    }

    updateCategory() {
        this.props.updateCategory(this.state.category.id, this.state.category.name);
    }

    addNestedCategory() {
        const category = this.generateNewCategory();
        this.props.addNestedCategory(this.props.categoryId, category);
    }

    processClick() {
        if (this.props.action === this.actions.ADD){
            this.addCategory();
        } else if (this.props.action === this.actions.UPDATE) {
            this.updateCategory();
        } else if (this.props.action === this.actions.ADD_NESTED) {
            this.addNestedCategory();
        }
    }

    generateNewCategory() {
        return {
            id: Math.floor(Math.random() * 10000) + '',
            name: this.refs.name.value,
            subCategories: []
        };
    }

    render() {
        return (
            <div className={`input-group ${this.props.action === this.actions.ADD ? 'position-inherit' : ''}`}>
                <input type="text" className={`form-control ${this.props.action === this.actions.ADD ? 'position-inherit' : ''}`} 
                    placeholder="Enter category title" 
                    value={this.state.category.name} 
                    ref="name"
                    onChange={this.onCategoryNameChange.bind(this)}/>
                <span className={`input-group-btn ${this.props.action === this.actions.ADD ? 'position-inherit' : ''}`}>
                    <button className={`btn btn-default ${this.props.action === this.actions.ADD ? 'position-inherit' : ''}`} type="button" 
                        onClick={() => this.processClick()}>
                            {
                                this.props.action === this.actions.UPDATE ? 'UPDATE' : 'ADD'
                            }
                    </button>
                </span>
            </div>
        );
    }
}