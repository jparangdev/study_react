import React, {useState} from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]); // 할일 목록을 관리할 상태값을 의미한다.
    const onClick = () => { 
        import('./Todo.js').then(({ Todo }) => { // onClick 함수가 호출되면 비동기로 Todo 모듈을 가져온다.
            const position = todos.length + 1;
            const newTodo = <Todo key={position} title={`할일 ${position}`} />;
            setTodos([...todos, newTodo]);
        });
    };
    return (
        <div>
            <button onClick={{onClick}}>할 일 추가</button>
            {todos}
        </div>
    );
}