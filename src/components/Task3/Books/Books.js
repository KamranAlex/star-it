import React, { useState } from 'react';
import AddBook from './AddBook';
import Booklist from './Booklist';

const Books = () => {
  const [adding, setAdding] = useState(false);
  const handleAddButton = () => {
    setAdding(true);
  };

  return (
    <>
      <div className='container text-right mt-2'>
        <button onClick={handleAddButton} className='btn btn-info'>
          Add New Book
        </button>
      </div>
      {adding ? <AddBook></AddBook> : <Booklist></Booklist>}
    </>
  );
};

export default Books;
