import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { App } from './components/App.jsx';

render((
    <BrowserRouter>
        <Route path="/" component={App}>
            <Route path="category/:id" />
            <Route path="task/:id" />
            <Route path="search?:query" />
        </Route>
    </BrowserRouter>
), document.getElementById('app'));
