import React from 'react'
import sList from '../utils/stateList'
import StateList from './StateList'

export default function StatePicker() {
    const [pickerState, setPickerState] = React.useState('va')
    
    
    if (!sList) { return <p>Loading...</p>}
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <select onChange={(e) => setPickerState(e.target.value.toLowerCase())} >
                    <option>Select a New State</option>
                {sList.map(s => (
                    <option key={s.abbreviation} value={s.abbreviation}>{s.name}</option>
                ))}
            </select>
            <div className="pt-6">
                <StateList url={`https://covidtracking.com/api/v1/states/${pickerState}/daily.json`} />
            </div>
        </div>
    )

}