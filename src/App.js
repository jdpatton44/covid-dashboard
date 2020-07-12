import React from 'react';
import StatePicker from './components/StatePicker';
import Nav from './components/Nav'
export default function App() {

    return (
        <div className="container mx-auto">
            <Nav />
            <StatePicker />
        </div>
    )
    }