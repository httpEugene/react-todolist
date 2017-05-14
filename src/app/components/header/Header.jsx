import React from 'react';
import { render } from 'react-dom';

import { Filter } from './Filter.jsx';
import { ProgressBar } from './ProgressBar.jsx';

export class Header extends React.Component {
    render() {
        const progressBarRowStyle = {
            paddingTop: "15px"
        };

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h1>To-Do List</h1>
                    </div>
                    <div className="col-md-6">
                        <Filter/>
                    </div>
                </div>
                <div className="row" style={progressBarRowStyle}>
                    <ProgressBar tasks={this.props.tasks}/>
                </div>
            </div>
        );
    }
}