import React from 'react'
import { useTable, useSortBy } from "react-table";

const Table = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data
    }, 
    useSortBy
    );
  
    return (
      <table className="table-auto" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className="px-4 py-2" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr className={i % 2 ? "bg-gray-200" : ""} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td className="border px-4 py-2" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  export default Table;