import { MdDelete } from "react-icons/md";
function TodoItem ({item, handleClick}) {

    return<>
        <div className="row mt-2">
            <div  className="col-6">{item.name}</div>
            <div className="col-4">{item.date}</div>
            <button className="col-2 btn btn-danger " onClick={() => handleClick(item.name)}><MdDelete/></button>
        </div>
    </>
}
export default TodoItem