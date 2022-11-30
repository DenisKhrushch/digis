import React from 'react';

import { CheckedTickIcon, DeleteIcon, UncheckedTickIcon } from '../icons';
import { Item } from '../types/Item';

interface ListItemProps {
  item: Item;
  index: number;
  handleStatus: (index: number) => void;
  handleDelete: (index: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ item, index, handleStatus, handleDelete }) => (
  <div
    id='list-item'
    className='duration-150" flex items-center justify-between border-b border-l-4 border-slate-200 border-l-indigo-300 bg-gradient-to-r from-indigo-100 to-transparent py-3 px-2 transition ease-linear hover:from-indigo-200'
  >
    <div className='inline-flex items-center space-x-2'>
      {item.checked ? (
        <CheckedTickIcon className='h-6 w-6 text-slate-500' onClick={() => handleStatus(index)} />
      ) : (
        <UncheckedTickIcon
          className='h-6 w-6 text-slate-500 hover:cursor-pointer hover:text-indigo-600'
          onClick={() => handleStatus(index)}
        />
      )}
      <div>{item.value}</div>
    </div>
    <div>
      {item.checked && (
        <DeleteIcon
          className='h-4 w-4 text-slate-500 hover:cursor-pointer hover:text-slate-700'
          onClick={() => handleDelete(index)}
        />
      )}
    </div>
  </div>
);
