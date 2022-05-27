import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewstudent = () => {
  var [viewstudent,setViewstud]=useState([])
  var [load,setLoad]=useState(true)
 axios.get("http://localhost:5000/api/viewstudent").then((response)=>{
console.log(response.data)
setViewstud(response.data)
setLoad(false)
 })
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>


          {load ? 
          <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only"></span>
          </div>
        </div>:
          <table className="table table-success">
          <thead className='table-primary'>
            <tr>
              <th scope="col">Admission Number</th>
              <th scope="col">Roll Number</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Parent's Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
          {viewstudent.map((value,key)=>{
             return <tr>
              <th scope={value.Admissionno}>1</th>
              <td>{value.Rollno}</td>
              <td>{value.Name}</td>
              <td>{value.Class}</td>
              <td>{value.Parent}</td>
              <td>{value.Phone}</td>
              <td>{value.Address}</td>
              
            </tr>
          })}
            
          </tbody>
        </table>}


          </div>

        </div>

      </div>
    </div>
  )
}

export default Viewstudent