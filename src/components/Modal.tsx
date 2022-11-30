import React, { FC } from 'react';

import { BinIcon, InfoIcon } from '../icons';
import { Item } from '../types/Item';

interface ModalProps {
  item: Item;
  setOpen: () => void;
  handleDelete: () => void;
}

export const Modal: FC<ModalProps> = ({ item, setOpen, handleDelete }) => (
  <div
    className='min-w-screen animated fadeIn faster fixed  inset-0  left-0 top-0 z-50 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none focus:outline-none'
    id='modal-id'
  >
    <div className='absolute inset-0 z-0 bg-black opacity-80' />
    <div className='relative  mx-auto my-auto w-full max-w-lg rounded-xl bg-white p-5  shadow-lg '>
      <div className=''>
        <div className='flex-auto justify-center p-5 text-center'>
          <InfoIcon className='-m-1 mx-auto flex h-4 w-4 items-center text-red-500' />
          <BinIcon className='mx-auto flex h-16 w-16 items-center text-red-500' />
          <h2 className='py-4 text-xl font-bold '>Are you sure?</h2>
          <p className='px-8 text-sm text-gray-500'>
            Do you really want to delete {item.value}? This process cannot be undone
          </p>
        </div>
        <div className='mt-2  space-x-4 p-3 text-center md:block'>
          <button
            type='button'
            className='mb-2 rounded-full border bg-white px-5 py-2 text-sm font-medium tracking-wider text-gray-600 shadow-sm hover:bg-gray-100 hover:shadow-lg md:mb-0'
            onClick={setOpen}
          >
            Cancel
          </button>
          <button
            type='button'
            className='mb-2 rounded-full border border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:bg-red-600 hover:shadow-lg md:mb-0'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
