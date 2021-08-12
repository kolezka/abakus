import React from 'react';
import { SimpleTable } from './parts/SimpleTable/SimpleTable';
import { SimpleTableActions } from './parts/SimpleTableActions/SimpleTableActions';
import { SimpleTableScroll } from './parts/SimpleTableScroll/SimpleTableScroll';

export const IndexView: React.FC = () => {
  return (
    <div className='container px-4 mx-auto'>

      <div className='py-8'>
        <h1 className='font-semibold text-3xl leading-none inline-block align-middle mr-2'>abakus</h1>
        <h2 className='text-lg leading-none inline-block align-bottom'>React {'&'} TailwindCSS Table Component</h2>
        <p className="mt-4 ml-4">
          Source code of that page can be found <a target="__blank" className="font-semibold" href="https://github.com/kolezka/abakus/tree/master/example">here</a> 
        </p>
      </div>

      <SimpleTable />
      <SimpleTableScroll />
      <SimpleTableActions />

    </div>
  )
}