import React from 'react'
import useFetch from '../hooks/useFetch'
import StateTable from './StateTable'
import Loading from './Loading'

export default function TableFetcher() {

    const url = `https://covidtracking.com/api/v1/states/current.json`
    const { loading, data: ronaData, error } = useFetch(url);
    const columns = [
        {
            Header: "Covid Table",
            Footer: "Covid Table Footer",
            columns: [
                {
                    Header: "State",
                    accessor: "state"
                },
                {
                    Header: "New Cases",
                    accessor: "positiveIncrease"
                },
                {
                    Header: "Total Cases",
                    accessor: "positive"
                }
            ] 
        },
        {
          Header: "Other Info",
          columns: [
            {
              Header: "Data Quality",
              accessor: "dataQualityGrade"
            }
          ]
        }
    ]

    if (loading) {
        return <Loading />
    }
    if (error !== null) {
        return <p>ERROR: {error}</p>
    }
    return (
        <div>
            <StateTable columns={columns} data={ronaData} />
        </div>
    )
}