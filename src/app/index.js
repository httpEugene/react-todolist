import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/header/Header';
// import { AddCategory } from './components/categories/AddCategory';
// import { CategoriesTree } from './components/categories/CategoriesTree';
// import { CategoriesTree } from './components/categories/CategoriesTree';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));