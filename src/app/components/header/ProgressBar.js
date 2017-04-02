import React from 'react';
import { render } from 'react-dom';

export class ProgressBar extends React.Component {
    render() {
        const progressBarStyle = {
            width: "60%"
        };

        return (
            <div className="progress">
                <div className="progress-bar" 
                    style={progressBarStyle}
                    role="progressbar" 
                    aria-valuenow="60" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                </div>
            </div>
        );
    }
}