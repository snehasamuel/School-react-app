import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewfaculty = () => {
  var [viewfaculty,setView]=useState([])
  var [load,setLoad]=useState(true)
  axios.get("http://localhost:5000/api/viewfaculty").then((response)=>{
console.log(response.data)
setView(response.data)
setLoad(false)
  })
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

      {load ? 
      <div class="d-flex justify-content-center">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only"></span>
      </div>
    </div>:
       <table class="table">
       <thead>
         <tr>
           <th scope="col">Name</th>
           <th scope="col">Mobile</th>
           <th scope="col">Education</th>
           <th scope="col">Address</th>
           <th scope="col">Pincode</th>
           <th scope="col">District</th>
           
         </tr>
       </thead>
       <tbody>
       {viewfaculty.map((value,key)=>{
          return <tr>
           <th scope="row">{value.Name}</th>
           <td>{value.Mobile}</td>
           <td>{value.Education}</td>
           <td>{value.Address}</td>
           <td>{value.Pincode}</td>
           <td>{value.District}</td>
         
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

export default Viewfaculty 