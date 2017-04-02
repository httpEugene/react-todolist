import React from 'react';
import { render } from 'react-dom';

export class Filter extends React.Component {
    render() {
        const filterStyles = {
            marginTop: "20px"
        };

        return (
            <div className="pull-right col-xs-9" style={filterStyles}>
                <input type="search" className="form-control" placeholder="Search"/>
            </div>
        )
    }
}