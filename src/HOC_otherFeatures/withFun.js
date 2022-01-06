import { event } from 'jquery';
import React,{useState,useRef,useEffect} from 'react';
//the class in mycss.css will be avaliable to a entire application.we used the class of mycss.css in App2.js
import "./mycss.css";
//the class in mycss2.module.css will be avaliable to this file.
import cs from './mycss2.module.css'

const withFun = (WrappedComponent)=>{


    return (props)=>{
        const [greet,chgreet] = useState("welcome");
        const myref = useRef(null);

        const btnClicked = ()=>{
            console.log(`${greet} ${props.name}`);
            alert(`${greet} ${props.name}`);
        }
        const chngGreet = (event)=>{
            chgreet(event.target.value);
        }

        useEffect(()=>{
            myref.current.focus();
        },[])

       const csarray = ["container",cs.myclass];

        return (<div className={csarray.join(" ")}>
                <div className="rows">
                <div className="cols-12 m-5">
                <input type="text" onChange={chngGreet} value={greet} ref={myref} /><br/>
                <WrappedComponent {...props} myclick={btnClicked}></WrappedComponent>
               </div></div></div>)
    }
}

export default withFun;