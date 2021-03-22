import React from 'react';
import {
    CategoryPage,
    CartPage,
    ErrorPage,
    Homepage,
    ProductPage
} from '@pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar } from '@components';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/product/:id' component={ProductPage} />
                <Route exatc path='/category/:categoryName' component={CategoryPage} />
                <Route exact path='/cart' component={CartPage} />
                <Route exact path='/error' component={ErrorPage} />
            </Switch>
        </Router>
    );
}

export default Routes;