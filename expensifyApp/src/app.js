import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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
        <Link to="/">Dashboard </Link>
        <Link to="/create">Create expense </Link>
        <Link to="/edit">Edit expense </Link>
        <Link to="/help">help</Link>
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