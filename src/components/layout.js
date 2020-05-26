import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'academicons/css/academicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import me from "../images/me.jpg"
import cv from "../files/cv.pdf"

export default function Layout({ children }) {
    return (
	<div className="container-fluid">
	  <div className="row mt-3">
	    <div className="col-8 mx-auto">
	      <nav className="navbar navbar-expand-md navbar-light bg-light rounded border">
		<a className="navbar-brand" href='/'>
		  <img src={me} className="rounded-circle mr-3" width="80" alt=""/>
		  Frank Ong
		</a>

		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav ml-auto">
		    <li className="nav-item">
		      <a className="nav-link" href="mailto:franko@stanford.edu"><i className="mx-1 fas fa-2x fa-envelope text-muted"></i></a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="https://github.com/frankong"><i className="mx-1 fab fa-2x fa-github text-muted"></i></a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="https://scholar.google.com/citations?user=zAM1TkoAAAAJ"><i className="mx-1 ai ai-2x ai-google-scholar text-muted"></i></a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href={cv}><i className="mx-1 ai ai-2x ai-cv text-muted"></i></a>
		    </li>
		  </ul>
		</div>
	      </nav>
	    </div>
	  </div>
	  {children}
	</div>
    )
}
