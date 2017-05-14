import React from 'react';
import { render } from 'react-dom';
import update from 'immutability-helper';
import { BrowserHistory } from 'react-router-dom';

import { CategoriesToChoose } from '../categories/CategoriesToChoose.jsx';

export class TaskEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.tasks.find((task) => task.id === this.props.taskId)
        };
    }

    checkboxToggle() {
        this.setState((prevState) => update(prevState, {
            task: {
                done: {$set: !prevState.task.done}
            }
        }));
    }

    updatedDescription() {
        this.setState((prevState) => update(prevState, {
            task: {
                description: {$set: this.refs.description.value}
            }
        }));
    }

    updatedTitle() {
        this.setState((prevState) => update(prevState, {
            task: {
                text: {$set: this.refs.title.value}
            }
        }));
    }

    onTaskUpdate() {
        this.props.updateTask(this.state.task);
    }

    categoryChosen(id) {
        this.setState((prevState) => update(prevState, {
            task: {
                categoryId: {$set: id}
            }
        }));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <CategoriesToChoose
                        categories={this.props.categories} 
                        categoryChosen={this.categoryChosen.bind(this)}/>
                </div>
                <div className="col-md-8">
                    <div className="row pull-right padding-bottom">
                        <button 
                            className="btn btn-default" 
                            type="submit"
                            onClick={() => this.onTaskUpdate()}> Save changes
                        </button>
                        <button className="btn btn-default" type="submit">Cancel</button>
                    </div>
                    <div className="row">
                        <input type="text" className="form-control" placeholder="Task text" 
                        value={this.state.task.text}
                        ref="title"
                        onChange={this.updatedTitle.bind(this)}/>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" 
                                checked={this.state.task.done} 
                                onChange={() => this.checkboxToggle()}/> Done
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <textarea className="form-control" rows="5"
                            value={this.state.task.description}
                            ref="description"
                            onChange={this.updatedDescription.bind(this)}></textarea>
                    </div>
                </div>
            </div>
        );
    }
}