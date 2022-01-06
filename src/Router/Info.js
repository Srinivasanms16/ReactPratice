import React from 'react';

//http://localhost:3000/info/123?name=srini&email=srini@gmail.com
const Info = (props)=>{
   //when we load the component using router.
    //it had 3 props (match,location,history)
    //match : its for accessing params
    //location : its use for accessing the query string.
    //history : its use navigate.
    //URLSearchParams is Javascript object for iterating the Query string.
    //we can use the for..of to iterate the Query string key-value pair.
    //Its has method such as get, has , enteries, append etc.
    const id = props.match.params.id;
    const location = Object.fromEntries(new URLSearchParams(props.location.search).entries());
    return <div>{`For Employee whose is ${id} name is ${location.name} and his email id is ${location.email} `}</div>
}

export default Info;