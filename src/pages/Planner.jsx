import { useState } from "react";
function Planner () {
    const [subject, setSubject] =useState ("");
    const [tasks, settasks] =useState ([]);

    const addTask = () => {
        settasks([...tasks, subject]);
        setSubject("");
    };


    return (
        <div>
            <h1>Study Planner</h1>
            <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}
export default  Planner;