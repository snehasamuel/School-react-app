import React, { useState } from 'react'
import Header from './Header'

const Addfaculty = () => {
  var [name,setName]=useState("")
  var [mobile,setMobile]=useState("")
  var [education,setEducation]=useState("")
  var [address,setAddress]=useState("")
  var [pincode,setPincode]=useState("")
  var [district,setDistrict]=useState("")

  const registerFaculty=(()=>{
   const data={"name":name,"mobile":mobile,"education":education,"address":address,"pincode":pincode,"district":district}
   console.log(data)
  })
  return (
    <div>
      <Header/>
      <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(q)=>{setName(q.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile Number</label>
                    <input onChange={(q)=>{setMobile(q.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Education</label>
                    <input onChange={(q)=>{setEducation(q.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(q)=>{setAddress(q.target.value)}} name="" id="" cols="20" rows="5" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Pincode</label>
                    <input onChange={(q)=>{setPincode(q.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">District</label>
                    <input onChange={(q)=>{setDistrict(q.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={registerFaculty} className="btn btn-success">REGISTER</button>
                </div>
            </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Addfaculty