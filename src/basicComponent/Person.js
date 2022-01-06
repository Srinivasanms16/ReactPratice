
import abc from "./Person.module.scss";

function person(props){
const btnarr = ["btn","btn-primary","ml-2"];
btnarr.push(abc.button)

return(<div className="border border-primary mb-2 mt-2 p-2">
       <h2 className="text-primary">My name is <span className="text-danger"> {props.name}</span></h2>
       <h2 className="text-info">My age is <span className="text-danger"> {props.age}</span></h2>
       <input type="text" value={props.name} onChange={props.changeName}/>
       <input type="button" className={btnarr.join(" ")} value="delete" onClick={props.deleteperson} />
       </div>)
}

export default person;