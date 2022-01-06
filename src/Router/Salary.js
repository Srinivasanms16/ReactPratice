import React from 'react';
import {useLocation} from 'react-router-dom'

//http://localhost:3000/salary/123?name=srini&email=srini@gmail.com&salary=2000

const Salary = (props)=>{
    debugger;
    //when we load the component using router.
    //it had 3 props (match,location,history)
    //match : its for accessing params
    //location : its use for accessing the query string.
    //history : its use navigate.
    //URLSearchParams is Javascript object for iterating the Query string.
    //we can use the for..of to iterate the Query string key-value pair.
    //Its has method such as get, has , enteries, append etc.
    const location = Object.fromEntries(new URLSearchParams(props.location.search).entries());

    const id = props.match.params.id;
    return <div>{`Employee  ${location.name}, id is ${id} and his salary is ${location.salary}`}</div>
}

export default Salary;