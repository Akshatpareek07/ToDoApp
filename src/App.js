import React, {useState,useEffect} from 'react';
import './App.css';
import ButtonComp  from './component/ButtonComp';
import ListComp from './component/ListComp';
import CompleteComp from './component/CompleteComp';


function App() {
    const [isCompleteScreen,setIsCompleteScreen]=useState(false);
    const [allTodos,setTodos]=useState([]);
    const [newTitle,setNewTitle]=useState("");
    const [newDescription,setnewDescription]=useState("");
    const [completedTodos,setCompletedTodos]=useState([]);

    const handleAddTodo=()=>{
       let newTodoItem={
        title:newTitle,
        description:newDescription
       }
       let updateTodoArr=[...allTodos];
       updateTodoArr.push(newTodoItem);
       setTodos(updateTodoArr);
       localStorage.setItem ('todolist', JSON.stringify (updateTodoArr));
       
       
    }

    const handleComplete=(index)=>{
           let now=new Date();
           let dd=now.getDate();
           let mm=now.getMonth()+1;
           let yyyy=now.getFullYear();
           let h=now.getHours();
           let m=now.getMinutes();
           let s=now.getSeconds();
           let completedOn=dd+"-"+mm+"-"+yyyy+"at"+h+":"+m+":"+s;
        
           const filteredItem={
            ...allTodos[index],
            completedOn:completedOn
           }

           let updateCompleteArr=[...completedTodos,filteredItem];
           setCompletedTodos(updateCompleteArr);
           handelDeleteTodo(index);
           localStorage.setItem('completedTodos', JSON.stringify (updateCompleteArr));
    }

    const handelDeleteCompleteTodo=(index)=>{
        let removeCompleteTodoArr=[...completedTodos];
        removeCompleteTodoArr.splice(index,1);
        localStorage.setItem ('completedTodos', JSON.stringify (removeCompleteTodoArr));
        setCompletedTodos(removeCompleteTodoArr);
     }

    const handelDeleteTodo=(index)=>{
       let removeTodoArr=[...allTodos];
       removeTodoArr.splice(index,1);
       localStorage.setItem ('todolist', JSON.stringify (removeTodoArr));
       setTodos(removeTodoArr);
    }

    useEffect (() => {
        let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
        let savedCompletedToDos = JSON.parse (localStorage.getItem ('completedTodos'));
        if (savedTodos) {
          setTodos (savedTodos);
        }
        if (savedCompletedToDos) {
          setCompletedTodos (savedCompletedToDos);
        }
      }, []);

    return (
    <div className="App">
        <h1>My Todos</h1>
        <div className='todo-wrapper'>
                <div className='todo-input'>
                    <div className="todo-input-item">
                        <label  for="title">Title</label>
                        <input type="text" placeholder="Title of task" name="task_title" id="title" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}></input>
                    </div>
                    <div className="todo-input-item">
                        <label for="description">Discription</label>
                        <input type="text" placeholder="Description of task" name="task_description" id="description" value={newDescription} onChange={(e)=>setnewDescription(e.target.value)}></input>
                    </div>
                    <div className="todo-input-button">

                    <ButtonComp class="primaryBtn" event={handleAddTodo} toAdd="Add"/>
                    </div>
                </div>
                <div className='btn-area'>
                    <ButtonComp class={`secondaryBtn ${isCompleteScreen===false && 'active'}`} event={()=>setIsCompleteScreen(false)} toAdd="ToDo"/>
                    <ButtonComp class={`secondaryBtn ${isCompleteScreen===true && 'active'}`} event={()=>setIsCompleteScreen(true)} toAdd="Complete"/>
                </div>
                <div className='todo-list'>
                        {isCompleteScreen===false && allTodos.map((item,index)=>{
                            return(
                            <ListComp
                                key={index}
                                itm={item}
                                deleteEvent={()=>handelDeleteTodo(index)} 
                                completeEvent={()=>handleComplete(index)} 
                            />
                            )
                        }
                        )}
                        {isCompleteScreen===true &&completedTodos.map((item,index)=>{
                            return(
                            <CompleteComp
                                    key={index}
                                    itm={item}
                                    deleteEvent={()=>handelDeleteCompleteTodo(index)} 
                            />
                            )
                        }
                        )}
                        
                    
                </div>
        </div>
    </div>
  );
}

export default App;
