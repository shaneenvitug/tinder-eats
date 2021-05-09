import { useState } from "react";

const App = () => {

  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <p>Tinder-eats coming soon!! 🍔</p>
      </header>
      <div>
        <label>Name:</label>
        <input value={name} onChange={ (e) => setName(e.target.value) } type="text" placeholder="What is your name?"/>
        <p>Welcome {name}</p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
