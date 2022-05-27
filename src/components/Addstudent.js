import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Addstudent = () => {
  var [admsn,setAdmsn]=useState("")
  var [rollno,setRoll]=useState("")
   var [name,setName]=useState("")
   var [classes,setClasses]=useState("")
   var [parent,setParent]=useState("")
   var [phone,setPhone]=useState("")
   var [address,setAddress]=useState("")

const registerStudent=(()=>{
  const data={"Admissionno":admsn,"Rollno":rollno,"Name":name,"Class":classes,"Parent":parent,"Phone":phone,"Address":address}
 axios.post("http://localhost:5000/api/addstudent",data).then((response)=>{
console.log(response.data)
if(response.data.status=="success")
{
    alert("successfully inserted")
}
else
{
    alert("insertion failed")
}

 })
})

  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Admission Number</label>
        <input onChange={(n)=>{setAdmsn(n.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Roll Number</label>
        <input  onChange={(n)=>{setRoll(n.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Name</label>
        <input onChange={(n)=>{setName(n.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Class
        </label>
        <input onChange={(n)=>{setClasses(n.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Parent's Name</label>
        <input  onChange={(n)=>{setParent(n.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Phone Number</label>
        <input  onChange={(n)=>{setPhone(n.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <label for="" className="form-label">Address</label>
        <textarea  onChange={(n)=>{setAddress(n.target.value)}} className="form-control" name="" id="" cols="20" rows="5"></textarea>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button onClick={registerStudent} className="btn btn-success">REGISTER</button>
    </div>
</div>

        </div>
    </div> 
</div>
    </div>
  )
}

export default Addstudent