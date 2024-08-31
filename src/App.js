import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { TodoItem } from './MyComponents/TodoItem';
import { Footer } from './MyComponents/Footer';
import react,{ useState ,useEffect} from "react";
import { Addtodo } from './MyComponents/Addtodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    setTodo(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    let number;
    if(todos.length ==0){
      number = 0;
    }
    else{
      number = todos[todos.length-1].number+1;
    }
    const myTodo ={
      number : number,
      title : title,
      desc : desc
    }
    setTodo([...todos,myTodo])
    console.log(myTodo);  
  }
  const [todos , setTodo]= useState(initTodo); 
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Header title="To-do-List" searchbar={true}/>
    <Addtodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
