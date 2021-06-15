import React from 'react'
import HomePage from './HomePage';
import {Route, Switch} from 'react-router-dom';
import {Login, Signup} from './Components'
function MainComponent() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route  path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </div>
    )
}

export default MainComponent
