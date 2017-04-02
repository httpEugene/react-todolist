import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/header/Header';
import { CategoriesTree } from './components/categories/CategoriesTree';
import { TasksList } from './components/tasks/TasksList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col-md-4">
                        <CategoriesTree/>
                    </div>
                    <div className="col-md-8">
                        <TasksList/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));