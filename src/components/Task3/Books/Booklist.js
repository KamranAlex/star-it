import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AddBook from './AddBook';
import './Books.css';

const Booklist = () => {
  //Update Status
  // const handleStatusUpdate = (e, id) => {
  //   fetch('https://arcane-meadow-55145.herokuapp.com/updateStatus?id=' + id, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  //   e.preventDefault();
  // };

  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/getBooks')
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 col-sm-10  main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Books List</h4>
        </div>

        <div className='list-table px-2 py-4'>
          <table className='table table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Author</th>
                <th scope='col'>Update</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((book) => {
                return (
                  <tr>
                    <th scope='row'>{book.bookName}</th>
                    <td>{book.author}</td>
                    <td>
                      <button className='btn btn-warning'>Update</button>{' '}
                    </td>
                    <td>
                      <button className='btn btn-danger'>Delete</button>{' '}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
