import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <div className='App.'>

      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Navigate replace to='/register'></Navigate>} />
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
