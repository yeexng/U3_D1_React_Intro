import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent link="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <p>React Homework</p>

        <ButtonComponent btntext="This is a button" />
        <ButtonComponent btntext="This is another button" />
      </header>
    </div>
  );
}

export default App;
