import React from 'react';

type Priority = 'p1'|'p2'|'p3';

type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
    priority: Priority;
    };

    function ToDo() {
        const [tasks, setTasks] = React.useState<Task[]>([]);
        const [taskName, setTaskName] = React.useState('');

        return (
            <div>
                <h1>My Tasks</h1>
                <label htmlFor="task-input">New Task</label>
                <input 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                id="task-input" >

                </input>
                <button onClick={() => {
                    const newTask: Task = {
                        id: tasks.length + 1,
                        title: taskName,
                        isCompleted: false,
                        priority: 'p3'
                    };
                    setTasks([...tasks, newTask]);
                    setTaskName('');
                }}>
                    Add Task
                </button>
                <ul>
                    {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                    ))}
                </ul>
            </div>
            );
        }



export default ToDo;