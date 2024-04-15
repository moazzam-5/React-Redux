import Display from "./components/display"
import { ItemsContext } from "./store/Items-store"
import { useContext } from "react"


function App() {
  const data = useContext(ItemsContext)
  console.log(data)
  

  return (
    <ItemsContext.Provider>
    <>
      <center><h1>React Advanced Topics</h1></center>
      <div>
        {data.map((item,idx) => (
          <Display key={idx} item={item}></Display>
        ))}
      </div>
    </>
    </ItemsContext.Provider>  
  )
}

export default App
