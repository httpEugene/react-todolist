import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import update from 'immutability-helper';

import { Header } from './header/Header.jsx';
import { CategoriesTree } from './categories/CategoriesTree.jsx';
import { TasksList } from './tasks/TasksList.jsx';
import { TaskEdit } from './tasks/TaskEdit.jsx';

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.route.categories,
            tasks: this.props.route.tasks
        }
    }

    addTask(task) {
        this.props.route.addTask(tasks);
    }

    render() {
        const childrenWithProps = this.props.children 
            ? React.cloneElement(this.props.children, {
                    categories: this.state.categories,
                    tasks: this.state.tasks,
                    addTask: this.addTask.bind(this)
                })
            : '';
        return (
            <div className="container">
                <Header tasks={this.props.route.tasks}/>
                { !this.props.location.pathname.includes('/task/edit') && 
                    <div className="row">
                        <div className="col-md-4">
                            <CategoriesTree
                                categories={this.props.route.categories} 
                                addCategory={this.props.route.addCategory} 
                                deleteCategory={this.props.route.deleteCategory} 
                                updateCategory={this.props.route.updateCategory}
                                addNestedCategory={this.props.route.addNestedCategory} />
                        </div>
                        <div className="col-md-8">
                            {childrenWithProps}
                        </div>
                    </div>
                }
                { this.props.location.pathname.includes('/task/edit') && 
                    childrenWithProps
                }
            </div>
        );
    }
}
