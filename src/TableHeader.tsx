import React from 'react'
import clsx from 'clsx'
import { Column } from './models/column.models'

export interface ITableHeaderClassnames {
  root?: string
  column?: string
}

interface ITableHeaderProps {
  columns: Column<any>[]
  classNames?: ITableHeaderClassnames
}

export const TableHeader: React.FC<ITableHeaderProps> = ({
  columns,
  classNames
}) => {
  const renderColumn = (column: Column<any>, index: number) => {
    if (column.renderHeaderCol) {
      return column.renderHeaderCol(column, index)
    }
    return column.title || column.field
  }

  return (
    <div className={clsx('flex', classNames?.root)}>
      {columns.map((column, index) => (
        <div
          className={clsx(
            'flex-1',
            classNames?.column,
            column?.classNames?.header
          )}
          key={column.field}
          style={{
            maxWidth: column.width
          }}
        >
          {renderColumn(column, index)}
        </div>
      ))}
    </div>
  )
}
