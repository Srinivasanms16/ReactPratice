import React,{useEffect,memo} from 'react';

const Child = (props)=>{

    useEffect(()=>{
        //this will be called during inilization.
        console.log("Called during Child inilization");

        //this retun callback will act as cleanup function.
        return ()=>{
            console.log("Called during Child inilization - Callback(Child component cleaned !)");
        }
    },[])

    useEffect(()=>{
         //this will be called whenever the render is called.
        console.log("when ever render is called child component!");
        return ()=>{
           console.log("when ever render is called child component! - callback"); 
        }
    })

    

    useEffect(()=>{
         //this condition make will stop running the code during inilization and it will called whenever changes in props.age
        if(props.age > 0)
        {
            console.log("Called age get updated in Child");
        }
    },[props.age]);

    const incrementage = ()=>{
        props.incrementAge(10);
    }

    const incrementage2 = ()=>{
        props.incrementAge(5);
    }

    return(<div>
    <h2 className="m-5">My Age:{props.age}</h2>
    <button className="btn btn-primary m-5" onClick={incrementage}>Increment age by 10</button>
    <button className="btn btn-primary m-5" onClick={()=>props.incrementage(5)}>Increment age by 5</button>
    </div>);
}
//this will make sure that when ever the changes in Props then child render method will be called.
export default memo(Child);