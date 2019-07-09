import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Personal from './components/personal';
import Qualification from './components/qualification';
import Steppers from './components/stepper';
import Home from './components/home';



const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/personal' component={Personal}/>
        <Route path='/qualification' component={Qualification}/>
       
        
        
    </div>
    </BrowserRouter>
);
export default AppRouter;