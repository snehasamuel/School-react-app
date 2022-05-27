import React from 'react'
import Header from './Header'

const Viewfaculty = () => {
  var viewfaculty=[{"name":"Janet","mobile":"7845445244","education":"MA.English","address":"jhfjyhv","pincode":"645789","district":"PTA"},
  {"name":"Smitha","mobile":"45795315","education":"MSc.HIstory","address":"ouygc","pincode":"789123","district":"Kollam"},
  {"name":"Sherly","mobile":"55546645","education":"MA.Malayalam","address":"adhfhf","pincode":"456123","district":"TVM"},
  {"name":"KrishnPriya","mobile":"487161694","education":"MA.Malayalam","address":"jhvhjv","pincode":"5469562","district":"EKM"},
  {"name":"Sreekumar","mobile":"646494656","education":"MA.English","address":"acvdh","pincode":"544546","district":"Thrishur"},
  {"name":"Meena","mobile":"46149613","education":"Msc.Chemistry","address":"hdfghf","pincode":"6464213","district":"PTA"}]
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

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
</table>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Viewfaculty 