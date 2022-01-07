import './App.css';

import {useState} from 'react';






function App() {

 const [toDos,setToDos]=useState([])

 const [toDo,setToDo]=useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo}  onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])}></i>
      </div>
    
            <div className="todos">
            {
        toDos.map((obj)=>{
          return(
            <div className="todo">
              <div className="left">
                <input type="checkbox" onClick={(e)=>{
                  console.log(e.target.checked)
                  console.log(obj)
                  setToDos(toDos.filter((obj2)=>{
                  if( obj2.id===obj.id){
                    obj2.status=e.target.checked
                  }
                  return obj2;
                  }))

                }}
                 value={obj.status} name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" ></i>
              </div>
            </div>
               );
              })
      
             }
          </div>
          {
            toDos.map((obj)=>{
              if(obj.status){
              return(


                <h2>{obj.text}</h2>
                
              );
              }
              return null
            })
            
          }
          
       
    </div>
  );
}


export default App;


