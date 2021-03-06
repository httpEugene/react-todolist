import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import update from 'immutability-helper';

import { Header } from './header/Header.jsx';
import { CategoriesTree } from './categories/CategoriesTree.jsx';
import { TasksList } from './tasks/TasksList.jsx';
import { TaskEdit } from './tasks/TaskEdit.jsx';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.history = createHistory();
        this.state = {
            categoriesVisible: true,
            categories: [{
                id: '1',
                name: 'Category 1',
                subCategories: [{
                    id: '11',
                    name: 'Category 1.1',
                    subCategories: []
                }]
            }, {
                id: '2',
                name: 'Category 2',
                subCategories: [{
                    id: '21',
                    name: 'Category 2.1',
                    subCategories: [{
                        id: '211',
                        name: 'Category 2.1.1',
                        subCategories: []
                    }, {
                        id: '212',
                        name: 'Category 2.1.2',
                        subCategories: []
                    }]
                }, {
                    id: '22',
                    name: 'Category 2.2',
                    subCategories: []
                }]
            }, {
                id: '3',
                name: 'Category 3',
                subCategories: []
            }],
            tasks: [{
                id: '1',
                text: 'Complete homework',
                description: 'description',
                categoryId: '1',
                done: false
            }, {
                id: '11',
                text: 'Read book',
                description: 'description',
                categoryId: '1',
                done: false
            }, {
                id: '2',
                text: 'Clean house',
                description: 'description',
                categoryId: '2',
                done: true
            }, {
                id: '3',
                text: 'Buy soap',
                description: 'description',
                categoryId: '3',
                done: false
            }, {
                id: '4',
                text: 'Pay bills',
                description: 'description',
                categoryId: '11',
                done: true
            }, {
                id: '5',
                text: 'Finish react course',
                description: 'description',
                categoryId: '21',
                done: false
            }, {
                id: '6',
                text: 'Change bank',
                description: 'description',
                categoryId: '212',
                done: true
            }]
        };
    }

    updateTask(task) {
        this.setState((state) => ({
            tasks: state.tasks.map((_task) => {
                if (_task.id === task.id) {
                    return task;
                }
                return _task;
            })
        }));
        this.history.goBack();
    }

    addTask(task) {
        this.setState((prevState) => update(prevState, {
            tasks: {$push: [task]}
        }));
    }

    addCategory(category) {
        this.setState((prevState) => update(prevState, {
            categories: {$push: [category]}
        }));
    }

    deleteCategory(id) {
        const index = this.state.categories.map(({_id}) => _id).indexOf(id);
        this.setState((prevState) => update(prevState, {
            categories: {$splice: [[index, 1]]}
        }));
    }

    updateCategory(id, categoryName) {
        const categories = this.state.categories.map((cat) => {
            if (cat.id === id) {
                cat.name = categoryName;
                return cat;
            }
            if (cat.subCategories.length) {
                this.processNestedCategories(id, categoryName, cat.subCategories)
            }
            return cat;
        });
        this.setState((prevState) => update(prevState, {
            categories: {$set: categories}
        }));
    }

    processNestedCategories(id, categoryName, categories) {
        categories.forEach((subCat) => {
            if (subCat.id === id) {
                subCat.name = categoryName;
            }
            if(subCat.subCategories.length) {
                this.processNestedCategories(id, categoryName, subCat.subCategories);
            }
        }); 
    }

    addNestedCategory(id, category) {
        const categories = this.state.categories.map((cat) => {
            if (cat.id === id) {
                cat.subCategories.push(category);
                return cat;
            }
            if (cat.subCategories.length) {
                this.processAddingNestedCategory(id, category, cat.subCategories)
            }
            return cat;
        });
        this.setState((prevState) => update(prevState, {
            categories: {$set: categories}
        }));
    }

    processAddingNestedCategory(id, category,categories) {
        categories.forEach((subCat) => {
            if (subCat.id === id) {
                subCat.subCategories.push(category);
                return subCat;
            }
            if(subCat.subCategories.length) {
                this.processAddingNestedCategory(id, category, subCat.subCategories);
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={({location}) => {
                    return (
                        <div className="container">
                            <Header tasks={this.state.tasks}/>
                            { !location.pathname.includes('/task/edit') && 
                                <div className="row">
                                    <div className="col-md-4">
                                        <CategoriesTree
                                            categories={this.state.categories} 
                                            addCategory={this.addCategory.bind(this)} 
                                            deleteCategory={this.deleteCategory.bind(this)} 
                                            updateCategory={this.updateCategory.bind(this)}
                                            addNestedCategory={this.addNestedCategory.bind(this)} />
                                    </div>
                                    <div className="col-md-8">
                                        <Route path="/category/:id" component={({ match }) => {
                                            const categoryId = match.params.id;
                                            return <TasksList 
                                                        categories={this.state.categories} 
                                                        tasks={this.state.tasks} 
                                                        categoryId={categoryId}
                                                        addTask={this.addTask.bind(this)}/>
                                        }} />
                                    </div>
                                </div>
                            }
                            <Route path="/task/edit/:id"  component={({ match }) => {
                                const taskId = match.params.id;
                                return <TaskEdit
                                            categories={this.state.categories} 
                                            tasks={this.state.tasks} 
                                            taskId={taskId}
                                            updateTask={this.updateTask.bind(this)}/>
                            }} />
                        </div>
                    )
                }}/>
            </BrowserRouter>
        );
    }
}
