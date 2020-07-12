import React from 'react'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'


export default function StateList({url}) {    

    const { loading, data: ronaData, error } = useFetch(url);

    
    if (loading) {
        return <Loading />
    }
    if (error !== null) {
        return <p>ERROR: {error}</p>
    }
    console.log(ronaData)
    return (
        <div className="container">
            <h1 className="text-3xl">Last 10 Days in {ronaData[0].state}</h1>
            {ronaData.slice(0,10).map(d => {return (
                <div key={d.date}>
                    <h4 className="text-xl">{d.date.toString().substring(4,6)}-{d.date.toString().substring(6,9)}-{d.date.toString().substring(0,4)}</h4>
                        <ul>
                            <li>- New Cases: {d.positiveIncrease}</li>
                            <li>- New Deaths: {d.deathIncrease}</li>
                            <li>- Newly Hospitalized: {d.hospitalizedIncrease}</li>
                        </ul>
                </div>
                )}
            )}
        </div> 
    )

}