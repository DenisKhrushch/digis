import React, { useCallback, useEffect, useState } from 'react';

import { sendTotal } from './api/sendTotal';
import { ListItem } from './components/ListItem';
import { Modal } from './components/Modal';
import { randomIntFromInterval } from './helpers/randomInt';
import { Item } from './types/Item';

const App: React.FC = () => {
  const [list, setList] = useState<Item[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<Item>({ checked: false, value: 0 });

  const setValues = useCallback((): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const arr = [...Array(10)].map((_) => ({
      checked: false,
      value: randomIntFromInterval(1, 100),
    }));
    const sum = arr.reduce((acc, obj) => acc + obj.value, 0);

    setList(arr);
    setTotal(sum);
  }, [setTotal]);

  useEffect(() => {
    setValues();
  }, [setValues]);

  const handleResetList = (): void => {
    setValues();
  };

  const showModal = (item: Item): void => {
    setCurrent(item);
    setOpen(!open);
  };

  const handleDelete = (index: number): void => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    const sum = updatedList.reduce((acc, obj) => acc + obj.value, 0);
    setTotal(sum);
    setOpen(!open);
  };

  const handleStatus = (index: number): void => {
    const updatedList = [...list];
    updatedList[index].checked = !updatedList[index].checked;
    setList(updatedList);
  };

  return (
    <>
      <div className='mx-auto my-10 max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <h1 className='text-3xl font-medium'>List of numbers</h1>
          </div>
          <div className='inline-flex items-center space-x-2'>
            <button
              type='button'
              onClick={handleResetList}
              className='inline-flex items-center space-x-1 rounded-md border border-slate-200 bg-indigo-600 p-2 text-sm font-medium text-indigo-200 hover:bg-indigo-500 hover:text-white md:block'
            >
              Reset
            </button>
            <button
              type='button'
              className='inline-flex items-center space-x-1 rounded-md border border-slate-200 p-2 text-sm hover:bg-slate-200 md:block'
              onClick={() => sendTotal(total)}
            >
              Send
            </button>
          </div>
        </div>

        <p className='text-slate-500'>Hello, here are your random numbers</p>

        <div id='list' className='my-5'>
          {list.map((item, index) => (
            <ListItem
              key={`${index + 1}item`}
              item={item}
              index={index}
              handleStatus={handleStatus}
              handleDelete={() => showModal(item)}
            />
          ))}
        </div>
        <div className='inline-flex items-center space-x-2'>Total: {total}</div>
      </div>
      {open && (
        <Modal
          item={current}
          setOpen={() => setOpen(!open)}
          handleDelete={() => handleDelete(list.indexOf(current))}
        />
      )}
    </>
  );
};

export default App;
