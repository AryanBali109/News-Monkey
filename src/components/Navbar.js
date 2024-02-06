import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

            // bootstrap navbar
    //   <div className='cont'>
    //     <nav>
    //   <div className='cont1' id="c1">
    //     <Link className='ra1'to="/" target="_blank" rel="noopener noreferrer">News monkey</Link>
    //   </div>
    //   <div className='cont1' id="c2">
    //     <ul style= {{display:"flex",alignItems:"center"}}>
    //         {/* <li><Link className='ra1' to="/">Home</Link></li> */}
    //         {/* <li><Link className='ra1'to="/">Alone</Link></li> */}
    //         <li><Link className='ra1'to="/business">Business</Link></li>
    //         <li><Link className='ra1'to="/entertainment">Entertainment</Link></li>
    //         <li><Link className='ra1'to="/sports">Sports</Link></li>
    //         {/* <li><Link className='ra1'to="/">general</Link></li> */}
    //         <li><Link className='ra1'to="/health">Health</Link></li>
    //         <li><Link className='ra1'to="/science">Science</Link></li>
    //         <li><Link className='ra1'to="/technology">Technology</Link></li>
    //     </ul>
    //   </div>
    //   {/* <div className='cont1' id="c3">
    //     <form>
    //         <input type="search" />
    //     </form>
    //   </div> */}
    //     </nav>
    //   </div>
        
    )
  }
}
