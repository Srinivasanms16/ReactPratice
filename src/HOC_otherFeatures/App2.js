import React from 'react'
import PropTypes from 'prop-types'
import withFun from './withFun';

const App2 = props=>{
    //css file is imported in withFun.js
return(<div className="myclass">
    <label>hi {props.name},{props.age} of age</label><br/>
    <button className="btn btn-primary" onClick={props.myclick}>Click me</button>
    </div>)
}

App2.propTypes = {
    name:PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}

export default withFun(App2);