import "./App.css";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <div className="card py-4">
          <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
          <div className="col-lg-6 mx-auto">
            <DisplayCounter></DisplayCounter>
            <Controls></Controls>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
