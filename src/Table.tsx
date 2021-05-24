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
}

export const Table: React.FC<ITableProps> = ({ data, columns, classNames }) => {
  return (
    <div className={classNames?.root}>
      <TableHeader classNames={classNames?.header} columns={columns} />
      <TableBody classNames={classNames?.body} columns={columns} data={data} />
    </div>
  )
}
