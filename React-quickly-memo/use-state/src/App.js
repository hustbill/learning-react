import React, { useState } from "react";
import "./App.css";

function App() {
  // Creating State age with default value of 21
  const [age, setAge] = useState(21);

  // Increase the age by one
  const ageUpHandle = () => {
    setAge(age + 1);
  };

  // Decrease the age by one
  const ageDownHandle = () => {
    setAge(age - 1);
  };

  var newElement = React.createElement('div', {style:{color: 'red'}}, null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use State Hook</h1>
        <h2>Age: {age}</h2>
        <newElement />
        <button onClick={ageUpHandle}>Age up</button>
        <button onClick={ageDownHandle}>Age down</button>
        
      </header>
      
    </div>
  );
}

export default App;
