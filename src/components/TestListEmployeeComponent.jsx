import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const TestListEmployeeComponent = () => {
  
   

  return (

    <div className='container'>

    <h2 className='text-center'>List of Employees2</h2>
   
       <table className='table table-striped table-bordered'>
        
       </table>
    </div>
  )

}

export default TestListEmployeeComponent
