import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const List = () => {
  const data = [
    { name: 'Product A', price: 300 },
    { name: 'Product B', price: 200 },
    { name: 'Product C', price: 700 },
    { name: 'Product D', price: 500 },
    { name: 'Product E', price: 650 },
    { name: 'Product F', price: 800 },
  ];
  const [viewAll, setViewAll] = useState(false);
  return (
    <div className='container text-center'>
      <div className='d-flex justify-content-between'>
        <Link to='/'>
          <button className='btn btn-warning mt-5'>Back to Task 1 </button>
        </Link>
        <Link to='/books'>
          <button className='btn btn-info mt-5'>Proceed to Task 3 </button>
        </Link>
      </div>
      <h2 className='text-success'>Task: 2</h2>
      {viewAll ? (
        <div className='container'>
          <div className='box'>
            {data.map((product) => (
              <li
                className='task2-list'
                key={product.name}
              >{`Name:${product.name}, Price: ${product.price}`}</li>
            ))}
            <button
              className='btn btn-danger'
              onClick={() => setViewAll(false)}
            >
              Collapse
            </button>
          </div>
        </div>
      ) : (
        <div className='container'>
          {data.slice(0, 3).map((product) => (
            <li
              className='task2-list'
              key={product.name}
            >{`Name:${product.name}, Price: ${product.price}`}</li>
          ))}
          <button className='btn btn-success' onClick={() => setViewAll(true)}>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default List;
