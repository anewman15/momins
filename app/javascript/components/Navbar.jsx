import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <BrowserRouter>
          <Link to="/" className="navbar-brand text-light">Momin's</Link>
        </BrowserRouter>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="">Albums</a>
            </li>
          </ul>
          <div className="d-flex">
            <div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#upload-photo-modal">Add a Photo</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
