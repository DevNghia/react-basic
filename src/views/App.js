import logo from './logo.svg';
import './App.scss';
import'./Mycomponents';
import Mycomponents from './Mycomponents';
import ListTodo from './Todos/ListTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with React.js(nghia &amp; dev)
        </p>
       
        <ListTodo/>
      </header>
    </div>
  );
}

export default App;
