import React from 'react';

//http://localhost:3000?companyname=SriniSoft

//when we load the component using router.
 //it had 3 props (match,location,history)
    //match : its for accessing params
    //location : its use for accessing the query string.
    //history : its use navigate.
const home = (props)=>{
    const location = Object.fromEntries(new URLSearchParams(props.location.search).entries());
    return <div>{`Employee Dashboard for ${location.companyname}`}</div>
}

export default home;