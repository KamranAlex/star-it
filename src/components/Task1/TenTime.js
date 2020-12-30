import React from 'react'
import { Link } from 'react-router-dom'

const TenTime = () => {
  function repeatStringNumTimes(string, times) {
    if (times > 0) return string.repeat(times)
    else return ''
  }

  const result = repeatStringNumTimes(`Star IT Ltd, `, 10)
  return (
    <div className='container mt-5 text-center'>
      <h2 className='text-success mb-4'>Task: 1</h2>

      <h5 className='d-flex align-items-center'>{`${result}`}</h5>
      <Link to='/task_2'>
        <button className='btn btn-info mt-5'>Proceed to Task 2 </button>
      </Link>
    </div>
  )
}

export default TenTime
