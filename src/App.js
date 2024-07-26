// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/tasks" element={<TaskList />} />
                            <Route path="/" element={<Navigate replace to="/login" />} />
                        </Route>
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
