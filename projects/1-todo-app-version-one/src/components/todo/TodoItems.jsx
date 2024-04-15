import TodoItem from "./TodoItem"


function TodoItems ({todoItems, onDeleteClick}) {
    // const handleClick = (data) => {
    //     console.log("name is ", data)
    // }
    return<>
    {
        todoItems.map((item,idx) => (
            <TodoItem key={idx} item={item} handleClick={onDeleteClick}></TodoItem>
        ))
    }
   
    </>
}
export default TodoItems