import {Component} from 'react'
import Person from "./Person";
import cssclass from "./App.module.scss"


class App extends Component
{
  state = {
  person :[{id:'abc1',
             name:'srini',
             age:31},
            {id:'abc2',
            name:'aish',
            age:31},
            {id:'abc3',
            name:'nithin',
            age:31}],
  showPerson:false
  }
  static getDerivedStateFromProps(props,state){
    console.log("its devired state from props.Will called during inilization and during updation.");
    return state;
  }

  componentDidMount(){
    console.log("when the component is successfully inilized !")
  }

  shouldComponentUpdate(){
    return true;
  }

  componentDidUpdate(){
    console.log("when the component is successfully updated !")
  }
  
  displayPerson = ()=>{

    if(!this.state.showPerson)
    {
       return null;
    }
    return this.state.person.map(p=>{
      //way 1:
      // const obj = {
      //   key:p.id, name:p.name, age:p.age,
      //                deleteperson:()=>this.deletePerson(p.id),
      //                changeName:(event)=>this.changeName(event,p.id)}
      // return <Person {...obj} ></Person>;
      //way 2:
      return <Person key={p.id} name={p.name} age={p.age}
                     deleteperson={()=>this.deletePerson(p.id)}
                     changeName={(event)=>this.changeName(event,p.id)}></Person>
 
      });
  
  }
  
  toggleShowperson = ()=>{
    
     const val = this.state.showPerson;
     this.setState({showPerson:!val},()=>{
       console.log(this.state.showPerson);
     });
  }

  deletePerson = (id)=>{

    const persons = this.state.person;
    const fperson = persons.filter(p=>{
      return p.id !== id;
    });
    this.setState({person:fperson});

  }

  changeName = (event,id)=>{

    const persons = this.state.person;

    const result = persons.find(p=>p.id === id);
    result.name = event.target.value;

    const resultIndex = persons.findIndex(p=>p.id === id);

    persons.splice(resultIndex,1,result);

   // this.setState({person:persons},()=>{console.log("SetState Completed !")})
    
    this.setState((prevState,props)=>{
      return {person:persons}
    },()=>{console.log("SetState Completed !")})

  }

  reset = ()=>{
    this.setState({person:[{id:'abc1',
    name:'srini',
    age:31},
   {id:'abc2',
   name:'aish',
   age:31},
   {id:'abc3',
   name:'nithin',
   age:31}]});
  }

  render(){
    const sbcss = ["btn" ,"btn-danger" ,"mt-2"];
    sbcss.push(cssclass.button);
    const rbcss = ["btn" ,"btn-danger" ,"mt-2","float-right"];
    rbcss.push(cssclass.button);

    return(<div className="container">  
      <div className="row">
        <div className="col-6 offset-3">
          <button className={sbcss.join(" ")} onClick={this.toggleShowperson} >Show Person</button>
          <button className={rbcss.join(" ")} onClick={this.reset}>Reset</button> 
        {this.displayPerson()}
        </div>
      </div>
    </div>)
  }
}
export default App;
