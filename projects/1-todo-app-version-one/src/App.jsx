// import FoodItems from "./components/FoodItems";

import { useRef, useReducer } from "react";
// import Container from "./components/Container"
import AddTodo from "./components/todo/AddTodo";
import TodoItems from "./components/todo/TodoItems";
import NoItems from "./components/todo/NoItems";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.name,
        date: action.payload.date,
      },
    ];
  }
  else if(action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter((item) => {
        return item.name !== action.payload.todoItem;
      });
  }
  return newTodoItems;
};

function App() {
  // for list rendring this array is used
  // let arr = ["apple", "banana", "orange", "mango", "peach", "new"];

  // Start TODO Code
  // const [todoData, setTodoData] = useState([]);
  const [todoData, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const todoAdd = (data) => {
    const { name } = data;
    const { date } = data;

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        date,
      },
    };
    dispatchTodoItems(newItemAction);

    // setTodoData([...todoData, data]);
  };

  const handleDeleteTodo = (todoItem) => {
    // const newItems = todoData.filter((item) => {
    //   return item.name !== todoItem;
    // });
    // setTodoData(newItems);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItem
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  // END TODO


  // const handleEvent = (data) => {
  //   console.log("parameter is ",data)
  // }

  // let [text, setText] = useState()
  // const handleInput = (event) => {
  //   setText(event.target.value)
  // }

  // using Ref hook
  const email = useRef();
  const password = useRef();
  const saveForm = (event) => {
    event.preventDefault();
    console.log("hello", email.current.value, password.current.value);
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <>
      {/* <h2>Fruites</h2> */}
      {/* conditional statement */}
      {/* {arr.length === 0 && <h3>No available fruites</h3>}
      <FoodItems fruites={arr}></FoodItems> */}

      {/* Start TODO Code */}
      <center>
        <h1>Todo App</h1>
        <AddTodo addTodo={todoAdd}></AddTodo>
        <NoItems items={todoData}></NoItems>
        <TodoItems
          todoItems={todoData}
          onDeleteClick={handleDeleteTodo}
        ></TodoItems>
      </center>
      {/* End TODO Code */}

      {/* passing children (like vue slots) */}
      {/* <Container>
        <h3>this is container component</h3>
        <p>this data is passed to container component</p>
      </Container> */}

      {/* events */}
      {/* <button onClick={() => handleEvent("hello")}>click here</button><br /><br /> */}

      {/* for state */}
      {/* <h4>State learning</h4>
      <input type="text"  placeholder="enter something" onChange={() => handleInput(event)}/>
      <p>{text}</p> */}

      {/* Hook: useRef */}
      <form action="submit" className="my-5 px-5" onSubmit={saveForm}>
        <h3>learn useRef hook</h3>
        {/* in this simply we use useRef hook for two way binding.  by using "ref" we pass ref hook variable that i used above(line 40,41) and onward you get all knowladge there */}
        <input type="text" ref={email} />
        <br />
        <br />
        <input type="text" ref={password} />
        <br />
        <br />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default App;
