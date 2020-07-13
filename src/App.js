import React from 'react';
import StatePicker from './components/StatePicker';
import StateTable from './components/Table';
import Nav from './components/Nav'
import TableFetcher from './components/TableFetcher'

export default function App() {

    return (
        <div className="container mx-auto">
            <Nav />
            <div className="grid grid-rows-2 grid-flow-col gap-2">
                <div className="row-span-4">
                    <TableFetcher />
                </div>
                <div className="row-span-4">
                    <StatePicker />
                </div>
            </div>
        </div>
    )
    }