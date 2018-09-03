import React from'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Login';
import Adduser from './Adduser';
import Registration from './Registration';
import Profile from './Profile';
import Eg from './Eg';
import Welcome from './Welcome';

const Main =()=>
(
    <Switch>
         <Route exact path="/" component={Welcome}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Adduser" component={Adduser}/>

        <Route path="/Registration" component={Registration}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/Eg" component={Eg}/>
        
        </Switch>

)
export default Main;