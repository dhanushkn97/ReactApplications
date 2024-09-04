import {useState} from 'react'; //  Hooks are functions that let you “hook into” React state and lifecycle features from function components
import './App.css';

// small components that can be imported in large components
// Person is the functional component

const Person =() =>{
  return(
    <>
        <h1>Name: John</h1>
        <h2>Last Name: Doe</h2>
        <h2>Age : 30</h2>
    </>
  )
} 
// praps/ props  allows you to pass the dynamic data through the  react components.

//Props are arguments passed via attributes
const Student =(props) =>{
  return(
    <>
        <h1>Name: {props.name}</h1>
        <h2>Last Name: {props.LastName}</h2>
        <h2>School : {props.school ?(
          props.school
        ):(
           <p>School not Defined</p>
        )}</h2>
    </>
  )
} 


const App =() =>{
  const name ='Dhanush';
  const isNameShowing = true;
  const [counter,setCounter] = useState(0);// defining the hook
  const handleRemove = () => setCounter(counter - 1);
  const handleAdd =() => setCounter(counter + 1);
  return (
    <div className="App">
      {/* the best part of calling the component is that we donthave to manually write the things 5 times in this case person details insted we can create an component and call the component 5 times */
      <>
          <Person />
          <Person />
          
          <Student name={'Safina'} 
                   LastName={'Samdani'}
                   school={'MIT'}/>
          <Student name ={'Amar'} LastName ={'Kamble'} school ={'Nitte meenakshi'} />
          <Student name='Ajay' LastName= 'Kumar' school ={'AIT'}/>
         
         
      </>
      
}    <>  
        <h1>Hello, {isNameShowing? name : 'Babu'}!</h1>
       <h2> {name ?(
            <>   
            {name}  
          </>//this is a react fragment it is used to wrap the multipe tags like hq h2 or any other tag rendering in the same funtion
          ) :(
            <> 
              <h1>There is no name</h1>
              <h2>we are done </h2>
            </> /*this is the example for  React Fragment to wrap the multiple html tags in an empty tag */
        )} 
</h2>
    
                  <button onClick ={handleRemove}><b>Remove</b></button>
                          <h1>{counter}</h1>
                  <button onClick ={handleAdd}><b>Add</b></button>
        </>
        


    </div>
  );
}

export default App;


