import React from 'react';
import {Switch,Link,Route} from 'react-router-dom';
import Home from './Home';
import Salary from './Salary';
import Info  from './Info';

const MyRouter = (props)=>{

    return(<div>Employee
          <Link to="/">Home</Link>
          <Link to="/info">PersonalInfo</Link>
          <Link to="/salary">Salary</Link>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/info/:id" component={Info}></Route>
            <Route exact path="/salary/:id" component={Salary}></Route>
            <Route component={Invalid}></Route>
        </Switch>
    </div>);
}

const Invalid = (props)=>{
    return (<div>Invalid Page</div>);
}



export default MyRouter;