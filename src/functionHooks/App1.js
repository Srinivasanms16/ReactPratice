import React,{useState,useCallback,useMemo,useEffect} from 'react';
import Child from "./child";


const App1 = (props)=>{

const [growth,setGrowth] = useState(0);

const [showInfo,toggle] = useState(true); 

const[onlyapp,setOnlyAppAge] = useState(0);

const [arr,setArr] = useState([20,40,50,60]);



//retun the memorized call back function.(i.e) all the variables we will using inside call back function as to be added
// as the dependency array otherwise stack memory of this fucntion will not be changed.so you will not get the updated values. 
    const callbackIncrementage = useCallback((number)=>{
        //provide the state/variable value which its dependent on so once its get updated  so the it will generate new function with updated value.
        // or pass all the dependent variable as the paramete.
        console.log("Call back is called !!!!");
        incrementAge(number)},[growth]);


        //It it excute the function and return the function. when we pass the variables in the dependency array. when the 
        //variables in the dependency array gets updated function will be recomputed and returns the updated value.
    const maxValue =    useMemo(()=>{
        return Math.max(...arr)
        },[arr]);


useEffect(()=>{
    //this will be called during inilization.
    console.log("Called during App inilization");
},[])

useEffect(()=>{
    //this will be called whenever the render is called.
    console.log("App Component");
});

useEffect(()=>{
    //this condition make will stop running the code during inilization and it will called whenever changes in growth.
    if(growth > 0)
    {
        console.log("Called age get updated in App");
    }
},[growth]);



const toggelDisplay = ()=>{
    toggle(!showInfo);
}

const incrementAge = (number)=>{
    setGrowth(growth + number);
}

const incrementOnlyAppAge = ()=>{
    setOnlyAppAge(onlyapp + 5);
}

const updateArr = ()=>{
    setArr([90,100,120,200]);
}

return (<div>
{showInfo ? 
<div>
<Child age={growth} incrementAge = {callbackIncrementage}></Child>
<h2 className="m-5">My App Age:{onlyapp}</h2>
<h2 className="m-5">Max value is {maxValue}</h2>
<button className="btn btn-secondary m-5" onClick={incrementOnlyAppAge}> Increment App age </button>
<button className="btn btn-secondary m-5" onClick={updateArr}> update array </button>
</div> :
null}
<button className="btn btn-secondary m-5" onClick={toggelDisplay}> show/hide </button>
</div>);
}

export default App1;