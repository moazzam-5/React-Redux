import { useDispatch } from "react-redux"
import { counterActions } from "../store"


const Controls = () => {
  const dispatch = useDispatch()

    const handleIncrement = () => {
      dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
      dispatch(counterActions.decrement())
    }
    return(
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary px-4 gap-3" onClick={handleIncrement}>
              +1
            </button>
            <button
              type="button"
              className="btn btn-outline-danger px-4"
              onClick={handleDecrement}
            >
              -1
            </button>
          </div>
    )
}

export default Controls