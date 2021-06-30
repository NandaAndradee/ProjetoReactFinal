import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'
import Extra from '../pages/Extra'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/Extra' component={Extra}/>
                <Route path='/Simpsons' component={Simpsons} />
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes