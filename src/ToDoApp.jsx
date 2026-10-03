import { useState, useEffect } from "react";

function ToDoList() {


    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("app_tasks");
        if (savedTasks) {
            return JSON.parse(savedTasks);
        }
        return [
            { id: 1, name: 'Do Some Coding 💻', completed: false },
            { id: 2, name: 'Wake Up Early 🌞', completed: false },
            { id: 3, name: 'Go to School 📚', completed: false },
            { id: 4, name: 'Playing Football ⚽', completed: false }
        ];
    });

    // Dark / Light Mode

    const [theme, setTheme] = useState(() => {
        const defaultTheme = localStorage.getItem("app_theme");
        if (defaultTheme) {
            return JSON.parse(defaultTheme);
        };
        return 'Light';
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
    };

    useEffect(() => {
        localStorage.setItem("app_theme", JSON.stringify(theme));

        //     if (theme === 'Dark') {
        //     document.getElementById('card').style.backgroundColor = '#121212';
        //     document.getElementById('card').style.color = '#ffffff';
        // } else {
        //     document.getElementById('card').style.backgroundColor = '#ffffff';
        //     document.getElementById('card').style.color = '#000000';
        // }

    }, [theme])

    const [newTaskName, setNewTaskName] = useState('');


    useEffect(() => {
        localStorage.setItem("app_tasks", JSON.stringify(tasks));
    }, [tasks]);


    const handleAddTask = () => {
        if (newTaskName.trim() === '') return;

        const newTaskObject = {
            id: Date.now(),
            name: newTaskName,
            completed: false
        };

        setTasks([...tasks, newTaskObject]);
        setNewTaskName('');
    };


    const handleDeleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };


    const handleToggleTask = (id) => {
        const updatedTasks = tasks.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTasks(updatedTasks);
    };

    const isDark = theme === "Dark";

    return (
        <div id="card" style={{
            margin: '80px auto',
            border: '2px solid lightblue',
            width: '420px',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
            borderColor: isDark ? '#007bff' : 'lightblue',
            color: isDark ? '#fff' : '#1e1e1e',
            transition: 'all 0.5s ease'
        }}>
            <div style={{display: 'flex' , margin: '20px 0', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{ margin: 0, display: 'inline', width: '50%' }}>📋 Pro To-Do List</h2>

                <button onClick={toggleTheme} style={{
                    cursor: 'pointer',
                    padding: '6px 12px',
                    backgroundColor: isDark ? '#ffc107' : '#333333',
                    color: isDark ? '#000' : '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    
                    
                }}>
                    {isDark ? 'Light ☀️' : 'Dark 🌙'}
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                {tasks.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', }}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleToggleTask(item.id)}
                            />
                            <span style={{
                                textDecoration: item.completed ? 'line-through' : 'none',
                                color: item.completed ? 'gray' : (isDark ? '#fff' : '#1e1e1e')
                            }}>
                                {item.name}
                            </span>
                        </label>

                        <button onClick={() => handleDeleteTask(item.id)} style={{ cursor: 'pointer', padding: '3px 8px', borderRadius: '5px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
                            Delete ❌
                        </button>
                    </div>
                ))}
            </div>

            <hr style={{ width: '100%', margin: '20px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontWeight: 'bold' }}>Create New Task:</label>
                <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Type a New Task..."
                    style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button onClick={handleAddTask} style={{ cursor: 'pointer', padding: '8px', backgroundColor: 'lightblue', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                    Add Task ➕ 
                </button>
            </div>
        </div>
    );
}

export default ToDoList;
