import React from 'react'
import { Column } from './models/column.models'
import { ITableHeaderClassnames, TableHeader } from './TableHeader'
import { ITableBodyClassnames, TableBody } from './TableBody'

interface ITableClassnames {
  root?: string
  header?: ITableHeaderClassnames
  body?: ITableBodyClassnames
}

interface ITableProps {
  data: any[]
  columns: Column<any>[]
  classNames?: ITableClassnames
  renderTableBody?: (
    data: any[],
    columns: Column<any>[],
    classNames?: ITableHeaderClassnames
  ) => React.ReactElement
  renderTableHeader?: (
    columns: Column<any>[],
    classNames?: ITableBodyClassnames
  ) => React.ReactElement
}

export const Table: React.FC<ITableProps> = ({
  data,
  columns,
  classNames,
  renderTableBody,
  renderTableHeader
}) => {
  const tableHeaderElement = renderTableHeader ? (
    renderTableHeader(columns, classNames?.header)
  ) : (
    <TableHeader classNames={classNames?.header} columns={columns} />
  )

  const tableBodyElement = renderTableBody ? (
    renderTableBody(data, columns, classNames?.body)
  ) : (
    <TableBody classNames={classNames?.body} columns={columns} data={data} />
  )

  return (
    <div className={classNames?.root}>
      {tableHeaderElement}
      {tableBodyElement}
    </div>
  )
}
