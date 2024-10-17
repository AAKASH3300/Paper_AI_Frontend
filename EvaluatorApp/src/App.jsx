
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DataTable from './components/DataTable';
import SignIn from './components/SignIn';
import './App.css';
import Dashboard from './components/Dashboard';
import Members from './components/Member';

const App = () => {
    return (
        <div className="app">
                <>
                    <Members/>
                </>
      
        </div>
    );
};

export default App;
