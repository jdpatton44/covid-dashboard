import React from 'react'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'
import Table from './Table';


export default function StateList({url}) {    

    const { loading, data: ronaData, error } = useFetch(url);

    const columns = [
        {
            Header: "Last 10 Days",
            Footer: "Covid Table Footer",
            columns: [
                {
                    Header: "Date",
                    accessor: "date"
                },
                {
                    Header: "New Cases",
                    accessor: "positiveIncrease"
                },
                {
                    Header: "Total Cases",
                    accessor: "positive"
                },
                {
                    Header: "New Deaths",
                    accessor: "deathIncrease"
                },
                {
                    Header: "Total Deaths",
                    accessor: "deathConfirmed"
                },
            ] 
        },
    ]
    
    if (loading) {
        return <Loading />
    }
    if (error !== null) {
        return <p>ERROR: {error}</p>
    }

    

    return (
        <Table columns={columns} data={ronaData.slice(0,10)} />
        )

}