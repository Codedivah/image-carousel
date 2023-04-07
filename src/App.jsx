import { useState } from "react";
import "./App.css";
import { imgArr } from "./assets/img";

function App() {
  const [index, setIndex] = useState(0);

  const left = () => {
    if(index<=0){
      setIndex(imgArr.length-1);
      console.log(index);
      return
    }
    setIndex(prev => prev - 1);
    console.log('left')
  };

  const right = () => {
    if(index>=imgArr.length-1){
      setIndex(0);
    }
    
    setIndex(next => next + 1);
    console.log('right')
  };

  return (
    <div className="container">
      {index}
      <h1>Image Carousel</h1>
      <div className="carousel">
        <div className="img-box">
          <img src={imgArr[index]} alt="img" />
          <div>
            <button className="btn btn-left " onClick={left}>
              ⬅️
            </button>
            <button className="btn btn-right"  onClick={right}>➡️</button>
          </div>
        </div>
      </div>
    </div>
  );
   
}

export default App;
