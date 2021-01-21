//Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Routes
import {book} from './book';
import {Registration} from '../pages/Registration';
import {Login} from "../pages/Login";

//Components
export const Routes = () => {
    return (
            <Switch>
                <Route exact path={book.root}>
                    < Registration />
                </Route>
                <Route exact path={book.login}>
                    < Login />
                </Route>
            </Switch>
    )
}
