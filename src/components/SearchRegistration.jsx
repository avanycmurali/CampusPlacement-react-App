import React from 'react'
import NavigationBar from './NavigationBar'

const SearchRegistration = () => {
  return (
    <div>
        <NavigationBar/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
            <div className="row g-4">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Registration Number</label>
<input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><button className="btn btn-warning">Search</button></div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default SearchRegistration