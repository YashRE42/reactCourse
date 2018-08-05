import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import 'normalize.css/normalize.css'

import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        this is from ExpenseDashboardPage
    </div>
);

const AddExpensePage = () => (
    <div>
        this is from my AddExpensePage
    </div>
);

const EditExpensePage = () => (
    <div>
        this is from my EditExpensePage
    </div>
);

const HelpPage = () => (
    <div>
        this is from my HelpPage
    </div>
);

const NotFoundPage = () => (
    <div>
        404- <Link to="/">go back</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create expense </NavLink>
        <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit expense </NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));