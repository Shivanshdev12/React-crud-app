import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import Getemployee from './Getemployee';
import Delete from './Delete';

const Router=()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/employee/:id" component={Getemployee}/>
            <Route path="/delete/:id" component={Delete} />
        </Switch>
    </BrowserRouter>
)

export default Router;