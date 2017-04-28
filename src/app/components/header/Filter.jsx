import React from 'react';
import { render } from 'react-dom';

export class Filter extends React.Component {
    render() {
        const filterStyles = {
            marginTop: "20px"
        };

        return (
            <div className="row" style={filterStyles}>
                <div className="col-md-3 checkbox">
                    <label className="pull-right">
                        <input type="checkbox"/> Show done
                    </label>
                </div>
                <div className="col-md-9 col-xs-9">
                    <input type="search" className="form-control" placeholder="Search"/>
                </div>
            </div>
        )
    }
}