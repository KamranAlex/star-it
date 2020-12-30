import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Books.css';

const AddBook = () => {
  const [bookInfo, setBookInfo] = useState({});
  const handleBlur = (e) => {
    const newInfo = { ...bookInfo };
    newInfo[e.target.name] = e.target.value;
    setBookInfo(newInfo);
  };
  const handleAddBook = (e) => {
    fetch('http://localhost:5000/addBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload(false);
      });
    e.preventDefault();
  };

  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 col-sm-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Add a Book</h4>
        </div>
        <div className='book-form col-md-7 pt-3'>
          <form action='' onSubmit={handleAddBook}>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input
                onBlur={handleBlur}
                type='text'
                name='bookName'
                className='form-control'
                placeholder='Book Name'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Author'>Author</label>
              <input
                onBlur={handleBlur}
                type='text'
                name='author'
                className='form-control'
                placeholder='Author Name'
                required
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-success'>
                <strong>Add Book</strong>{' '}
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
