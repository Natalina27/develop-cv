//Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Routes
import {book} from './book';
import {Registration} from '../pages/Registration';

//Components
export const Routes = () => {
    return (
            <Switch>
                <Route exact path={book.registration}>
                    < Registration />
                </Route>
            </Switch>
    )
}
