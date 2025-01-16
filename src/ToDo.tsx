type Priority = 'p1'|'p2'|'p3';

type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
    priority: Priority;
    };

    function ToDo() {
        const tasks: Task[] = [
            {
              id: 1,
              title: 'Learn React',
              isCompleted: true,
              priority: 'p1',
            },
          ];

        return (
            <div>
                <h1>My Tasks</h1>
                <label htmlFor="task-input">New Task</label>
                <input id="task-input" >

                </input>
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