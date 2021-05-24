import React from "react";
import { Table } from "abakus";
import { Column } from "abakus/src/models/column.models";
import faker from "faker";

import "tailwindcss/dist/tailwind.css";
import "./index.css";

interface IData {
  id: number
  name: string
  surname: string
}

const DATA = new Array(32).fill({}).map((_, index) => ({
  id: index,
  name: faker.name.firstName(),
  surname: faker.name.lastName()
}));

const App = () => {

  const [data, set] = React.useState(DATA)

  const remove = (row: any) => {
    const index = data.findIndex((_row) => _row.id === row.id);
    if (index > -1) {
      data.splice(index, 1);
      set([...data]);
    }
  }

  const columns: Column<IData>[] = [
    {
      field: "id",
      title: 'No',
      width: 50,
      classNames: {
        header: 'text-gray-100',
        root: 'text-gray-100 text-sm p-1'
      }
    },
    {
      title: 'Name',
      field: "name"
    },
    {
      title: 'Surname',
      field: "surname",
      classNames: {
        header: 'text-yellow-500'
      }
    },
    {
      field: "",
      title: "Actions",
      width: 150,
      classNames: {
        header: 'text-right pr-4',
        root: 'text-right pr-4'
      },
      renderCol: (_, row) => <button onClick={() => remove(row)} className='text-sm border border-black border-opacity-50 bg-black bg-opacity-20 hover:bg-opacity-30 py-1 px-2 rounded-md'>Delete</button>
    }
  ];

  return (
    <div className="bg-black text-white bg-opacity-80 h-screen overflow-auto">
      <div className="container py-8 mx-auto">
        <Table
          classNames={{
            header: {
              root: "sticky top-0 bg-black"
            },
            body: {
              row: 'py-1 border-b border-black border-opacity-50'
            }
          }}
          data={data}
          columns={columns} />
      </div>
    </div>
  );
};

export default App;
