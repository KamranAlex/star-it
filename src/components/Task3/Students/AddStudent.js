import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddStudent = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    phone: '',
  });
  const [error, setError] = useState({
    nameERR: '',
    phoneERR: '',
  });

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'name') {
      if (e.target.value) {
        isFieldValid = true;
      } else {
        isFieldValid = false;
        setError({ nameERR: 'Name Required !!!' });
      }
    }
    if (e.target.name === 'phone') {
      if (/^(?:\+88|88)?(01[3-9]\d{8})$/.test(e.target.value)) {
        isFieldValid = true;
      } else {
        isFieldValid = false;
        setError({ phoneERR: 'Invalid Phone Number !!! Put a valid Number' });
      }
    }
    if (isFieldValid) {
      setError({});
      const newStudentInfo = { ...studentInfo };
      newStudentInfo[e.target.name] = e.target.value;
      setStudentInfo(newStudentInfo);
    }
  };

  const handleAddStudent = (e) => {
    if (studentInfo.name && studentInfo.phone) {
      fetch('http://localhost:5000/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.reload(false);
        });
      e.preventDefault();
    }
  };

  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 col-sm-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Add a Student</h4>
        </div>
        <div className='student-form col-md-7 pt-3'>
          <form action='' onSubmit={handleAddStudent}>
            <div className='form-group'>
              <label htmlFor='Name'>Name</label>
              <input
                onBlur={handleBlur}
                type='text'
                name='name'
                className='form-control'
                placeholder='Student Name'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Phone'>Phone</label>
              <input
                onBlur={handleBlur}
                type='tel'
                name='phone'
                className='form-control'
                placeholder='+88 01xxx xxxxxx'
                required
              />
              {error.phoneERR !== '' && (
                <small className='text-danger'>{error.phoneERR}</small>
              )}
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-success'>
                <strong>Add Student</strong>{' '}
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
