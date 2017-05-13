import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './header/Header.jsx';
import { CategoriesTree } from './categories/CategoriesTree.jsx';
import { TasksList } from './tasks/TasksList.jsx';
import { TaskEdit } from './tasks/TaskEdit.jsx';

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

    setTasksVisibility(visibilityState) {
        this.setState({
            tasksVisible: visibilityState
        })
    }

    updateTask(task) {
        console.log(task);
        // this.setState((state) => ({
        //     tasks: state.tasks.map((_task) => {
        //         if (_task.id === task.id) {
        //             return task;
        //         }
        //         return _task;
        //     })
        // }));
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
                                categories={this.state.categories} />
                        </div>
                        <div className="col-md-8">
                            <Route path="/category/:id" component={({ match }) => {
                                const categoryId = match.params.id;
                                return <TasksList 
                                        categories={this.state.categories} 
                                        tasks={this.state.tasks} 
                                        categoryId={categoryId}/>
                            }} />
                            <Route path="/task/edit/:id"  component={({ match }) => {
                                const taskId = match.params.id;
                                return <TaskEdit
                                        categories={this.state.categories} 
                                        tasks={this.state.tasks} 
                                        taskId={taskId}
                                        updateTask={this.updateTask.bind(this)}/>
                            }} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
