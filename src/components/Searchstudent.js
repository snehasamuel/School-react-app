import React, { useState } from 'react'
import Header from './Header'

const Searchstudent = () => {
  var [admsn,setAdmsn]=useState("")

  const searchStudent=(()=>{
const data={"admission":admsn}
console.log(data)
  })
  return (
    <div>
      <Header/>
      <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Admission Number</label>
                    <input onChange={(d)=>{setAdmsn(d.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchStudent} class="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchstudent