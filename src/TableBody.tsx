import React from 'react'
import clsx from 'clsx'
import { Column } from './models/column.models'

export interface ITableBodyClassnames {
  root?: string
  row?: string
  column?: string
}

interface ITableBodyProps {
  columns: Column<any>[]
  data: any[]
  classNames?: ITableBodyClassnames
}

export const TableBody: React.FC<ITableBodyProps> = ({
  columns,
  data,
  classNames
}) => {
  const renderColumn = (column: Column<any>, row: any) => {
    if (column.renderCol) {
      return column.renderCol(column, row)
    }
    return row[column.field]
  }

  return (
    <div className={classNames?.root}>
      {data.map((row, index) => (
        <div
          key={row.id || row.uuid || index}
          className={clsx('flex items-center', classNames?.row)}
        >
          {columns.map((column) => (
            <div
              key={column.field}
              className={clsx(
                'flex-1',
                classNames?.column,
                column.classNames?.root
              )}
              style={{
                maxWidth: column.width
              }}
            >
              {renderColumn(column, row)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
