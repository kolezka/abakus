interface ColumnClassnames {
  body?: string
  header?: string
}

export class Column<R extends any> {
  field!: string
  title?: string
  width?: number
  renderCol?: (column: Column<R>, row: R, index: number) => JSX.Element
  renderHeaderCol?: (column: Column<R>, index: number) => JSX.Element
  classNames?: ColumnClassnames
}
