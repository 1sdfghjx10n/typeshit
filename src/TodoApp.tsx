import { useState } from 'react';


interface TodoItems {
    id: string;
    text: string;
    completed: boolean;
}

const TodoApp = () => {
    const [todos, setTodos] = useState<TodoItems[]>([]);
    const [newTodo, setnewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo !== '') {
            const newID =  crypto.randomUUID();
            const newTodoItem: TodoItems = {
                id: newID,
                text: newTodo,
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setnewTodo('');
        }
    };

    const removeTodo = (id: string) => {
        const upTodo = todos.filter((todo) => todo.id !== id);
        setTodos(upTodo);
    };

    const toggleComplete = (id: string) => {
        const upTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        setTodos(upTodos);
    };

    return (
        <div>
            <h1>Jia's To do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setnewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add new task</button>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                            type = "checkbox"
                            checked = {todo.completed}
                            onChange = {() => toggleComplete(todo.id)}
                            />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                                {todo.text}
                            </span>
                            <button onClick={() => removeTodo(todo.id)}>Remove</button>
                            </li>
                    ))}
                </ul>
        </div>
    );
};

export default TodoApp;