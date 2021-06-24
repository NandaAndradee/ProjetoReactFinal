import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/Simpsons' component={Simpsons} />
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes