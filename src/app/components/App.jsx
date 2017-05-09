import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './header/Header.jsx';
import { CategoriesTree } from './categories/CategoriesTree.jsx';
import { TasksList } from './tasks/TasksList.jsx';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [{
                id: 1,
                name: 'Category 1',
                subCategories: [{
                    id: 11,
                    name: 'Category 1.1',
                    subCategories: []
                }]
            }, {
                id: 2,
                name: 'Category 2',
                subCategories: [{
                    id: 21,
                    name: 'Category 2.1',
                    subCategories: [{
                        id: 211,
                        name: 'Category 2.1.1',
                        subCategories: []
                    }, {
                        id: 212,
                        name: 'Category 2.1.2',
                        subCategories: []
                    }]
                }, {
                    id: 22,
                    name: 'Category 2.2',
                    subCategories: []
                }]
            }, {
                id: 3,
                name: 'Category 3',
                subCategories: []
            }]
        };
    }

    setTasksVisibility(visibilityState) {
        this.setState({
            tasksVisible: visibilityState
        })
    }

    render() {
        const tasksList = {
            visible: false,
            what: 'hey'
        };

        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <div className="row">
                        <div className="col-md-4">
                            <CategoriesTree 
                                tasksVisibility={this.setTasksVisibility.bind(this)}
                                categories={this.state.categories}
                                />
                        </div>
                        <div className="col-md-8">
                            <Route path="/category/:id" component={TasksList} categories={this.state.categories} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
