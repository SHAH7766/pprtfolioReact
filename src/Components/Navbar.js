import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = ()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/con' className="nav-link active" aria-current="page" >Contact</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
       
      </form>
    </div>
  </div>
</nav>

        
        </>
    )
}