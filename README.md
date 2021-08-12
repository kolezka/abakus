# abakus

## Install

```bash
npm install --save abakus
```

## Package webpage <https://abakus.raqz.pl/>

## Usage

```tsx
import React, { Component } from 'react'
import { Table } from 'abakus'


const UsersTable = ({ users }) => {

  const columns: Column<IData>[] = [
    {
      field: "id",
      title: 'No',
      width: 50,
    },
    {
      title: 'Name',
      field: "name"
    },
    {
      title: 'Surname',
      field: "surname",
    },
    {
      field: "",
      title: "Actions",
      width: 150,
      classNames: {
        header: 'text-right pr-4',
        root: 'text-right pr-4'
      },
      // Delete user button
      renderCol: (_, row) => <button onClick={() => remove(row)} className='text-sm border border-black border-opacity-50 bg-black bg-opacity-20 hover:bg-opacity-30 py-1 px-2 rounded-md'>Delete</button>
    }
  ];

  return (
    <Table
      data={users}
      columns={columns} />
  );
}

```

## License

MIT © [kolezka](https://github.com/kolezka)
