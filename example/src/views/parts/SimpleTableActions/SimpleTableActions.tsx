import React from 'react'
import { Column, Table } from 'abakus'
import faker from 'faker'

interface IFakeData {
  name: string
  surname: string
}

export const SimpleTableActions = () => {
  const data: IFakeData[] = []

  for (let i = 0; i < 3; i++) {
    data.push({
      name: faker.name.firstName(),
      surname: faker.name.lastName()
    })
  }

  const columns: Column<IFakeData>[] = [
    {
      field: '',
      title: 'No',
      width: 70,
      classNames: {
        body: 'test'
      },
      renderCol: (_, __, index) => <span>{index}</span>
    },
    {
      field: 'name',
      title: 'Name'
    },
    {
      field: 'surname',
      title: 'Surname'
    },
    {
      field: '',
      title: 'Actions',
      width: 100,
      renderCol: () => <button onClick={() => alert('Hello World')} className='rounded-xs px-4 text-xs text-white bg-black border border-black border-opacity-10 bg-opacity-30'>Click me</button>
    }
  ]

  return (
    <section className='mb-8'>
      <h2 className='text-lg font-semibold mb-2'>Simple Table with actions</h2>
      <div className='shadow rounded p-8'>
        <Table
          classNames={{
            header: {
              root: 'top-0 sticky bg-white font-semibold'
            }
          }}
          data={data}
          columns={columns}
        />
      </div>
    </section>
  )
}
