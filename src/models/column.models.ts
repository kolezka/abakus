interface ColumnClassnames {
  root?: string
  header?: string
}

export class Column<R extends any> {
  field!: string
  title?: string
  width?: number
  renderCol?: (column: Column<R>, row: R) => JSX.Element
  renderHeaderCol?: (column: Column<R>) => JSX.Element
  classNames?: ColumnClassnames
}
