import React from 'react'
import Header from './Header'

const Viewstudent = () => {
  var viewstudent=[{"admission_number":"4545","rollno":"12","name":"Sneha","classname":"10","parent":"Samuel","phn_no":"8794560133","address":"abc"},
  {"admission_number":"4542","rollno":"4","name":"Sajan","classname":"12","parent":"Anil","phn_no":"45526561","address":"bjh"},
  {"admission_number":"54513","rollno":"1","name":"Leana","classname":"8","parent":"Varghese","phn_no":"546113589","address":"gfgdg"},
  {"admission_number":"7946549","rollno":"9","name":"Merin","classname":"9","parent":"John","phn_no":"545464","address":"habddb"},
  {"admission_number":"164546","rollno":"2","name":"Cyandra","classname":"7","parent":"Sanjo","phn_no":"7846154","address":"asdgayu"}]
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

          <table class="table">
  <thead>
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
      <th scope={value.admission_number}>1</th>
      <td>{value.rollno}</td>
      <td>{value.name}</td>
      <td>{value.class}</td>
      <td>{value.parent}</td>
      <td>{value.phn_no}</td>
      <td>{value.address}</td>
    </tr>
  })}
    
  </tbody>
</table>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Viewstudent