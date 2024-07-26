// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import { addTask, deleteTask, getTasksByStatus, updateTask } from '../services/api';
import {Button, Form, ListGroup} from "react-bootstrap";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('incompleted');
    const [title, setTitle ] = useState('');
    const [description, setDescription] =useState('');
    const [startdate, setStartDate] = useState('');
    const [enddate, setEndDate] = useState('');
    const [completedat, setCompletedAt] = useState(null);
    const [task, setTask] = useState({});
    

    const selectTask = (task) => {
        setTask(task);
        setTitle(task.title);
        setDescription(task.description);
        setStartDate(task.start_date);
        setEndDate(task.end_date);
        if (task.completed_at) {
            setCompletedAt(task.completed_at);
        }
    }

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await getTasksByStatus(status);
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };
        fetchTasks();
    }, [status]);

  
    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            let task_info = {
                'title': title,
                'description': description,
                'start_date': startdate,
                'end_date': enddate,
                'completed_at':completedat
            };
            if (!task) {
                await addTask(task_info);
            
            } else {
                task_info.user_id = 1;
                await updateTask(task.task_id, task_info);
            }
            const response = await getTasksByStatus(status);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        };

    };
    
    const handleDeleteTask = async (t) => {
        try {
            await deleteTask(t.task_id)
            const response = await getTasksByStatus(status);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        };
    };
    const resetForm = () => {
        setTask(null);
        setTitle(null);
        setDescription(null);
        setStartDate(null);
        setEndDate(null);
    }


    return (
        <div>
    <div >{title}
        {description}
        {startdate}
        {enddate}
    </div>
            <h1>Tasks</h1>
            <Form onSubmit={handleAddTask}>
                <Form.Group className="mb-3" controlId="formGroupTitle" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" require onChange={(e) => setTitle(e.target.value)} value={title}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" require onChange={(e) => setDescription(e.target.value)} value={description}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupStartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Start Date" require onChange={(e) => setStartDate(e.target.value)} value={startdate}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="End Date" require onChange={(e) => setEndDate(e.target.value)} value={enddate}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCompletedAt">
                    <Form.Label>Completed at</Form.Label>
                    <Form.Control type="date" placeholder="Completed at" require onChange={(e) => setCompletedAt(e.target.value)} value={completedat}/>
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
                <Button variant='warning' onClick={resetForm} type='button'>Reset</Button>
            </Form>

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="incompleted">Incompleted</option>
                <option value="completed">Completed</option>
            </select>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item onClick={() => selectTask(task)} key={task.task_id}>
                        {task.title} 

                        <Button variant='danger'onClick={() => handleDeleteTask(task)} type='button'>Delete</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TaskList;
