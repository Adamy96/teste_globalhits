import React from 'react';
import {
    CategoryPage,
    CartPage,
    Homepage,
    ProductPage
} from '@pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/product/:id' component={ProductPage} />
                <Route exatc path='/category/:categoryName' component={CategoryPage} />
                <Route exact path='/cart' component={CartPage} />
            </Switch>
        </Router>
    );
}

export default Routes;