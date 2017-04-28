import React from 'react';
import { render } from 'react-dom';

export class TaskEdit extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <button class="btn btn-default" type="submit">Save changes</button>
                    <button class="btn btn-default" type="submit">Cancel</button>
                </div>
                <div className="row">
                    <input type="text" class="form-control" placeholder="Task text" 
                       value={this.props.task.text}/>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"/> Done
                        </label>
                    </div>
                </div>
                <div className="row">
                    <textarea class="form-control" rows="5"></textarea>
                </div>
            </div>
        );
    }
}