import React from 'react';
import { render } from 'react-dom';

export class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.completedTasks = 0;
        this.props.tasks.forEach((task) => {
            if(task.done) {
                this.completedTasks++;
            }
        });
        this.completedTasksPercent = this.completedTasks * 100 / this.props.tasks.length;
    }

    render() {
        const progressBarStyle = {
            width: `${this.completedTasksPercent}%`
        };

        return (
            <div className="progress">
                <div className="progress-bar" 
                    style={progressBarStyle}
                    role="progressbar" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            </div>
        );
    }
}