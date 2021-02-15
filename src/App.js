import './App.css';
import TodoList from "./TodoList";

function App() {
    console.log(`NODE_ENV => ${process.env.NODE_ENV}`);
    console.log(`REACT_APP_DATA_API => ${process.env.REACT_APP_DATA_API}`);
    console.log(`REACT_APP_LOGIN_API => ${process.env.REACT_APP_LOGIN_API}`);

  return (
    <div className="App">
      <div>
          node_env => {process.env.NODE_ENV}<br />
          data_api => {process.env.REACT_APP_DATA_API}<br />
          login_api => %REACT_APP_LOGIN_API%
      </div>
      <TodoList />
    </div>
  );
}

export default App;
