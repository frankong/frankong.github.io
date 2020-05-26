import React from "react"

export default function Project(props) {
    return (
	<div className="row">
	  <div className="col-8 mx-auto text-center">
	    <h5 className="pt-3">
	      {props.title}
	    </h5>
      	    <p className="text-muted small">
	      {props.subtitle}
      	    </p>
	    <figure className="figure">
      	      {props.image? <img src={props.image} className="figure-img img-fluid rounded" alt=""/>: null}
		<figcaption className="figure-caption text-justify">
		  {props.text}
		</figcaption>
	    </figure>
	    <p>
	      {props.email? <a href={props.email}><i className="mx-1 fas fa-2x fa-envelope text-muted"></i></a>: null}
	      {props.googleScholar? <a href={props.googleScholar}><i className="mx-1 ai ai-2x ai-google-scholar text-muted"></i></a>: null}
	      {props.github? <a href={props.github}><i className="mx-1 fab fa-2x fa-github text-muted"></i></a>: null}
	      {props.cv? <a href={props.cv}><i className="mx-1 ai ai-2x ai-cv text-muted"></i></a>: null}
	      {props.link? <a href={props.link}><i className="mx-1 fas fa-2x fa-link text-muted"></i></a>: null}
	      {props.pdf? <a href={props.pdf}><i className="mx-1 fas fa-2x fa-file-pdf text-muted"></i></a>: null}
	      {props.code? <a href={props.code}><i className="mx-1 fas fa-2x fa-code text-muted"></i></a>: null}
	      {props.slides? <a href={props.slides}><i className="mx-1 fab fa-2x fa-slideshare text-muted"></i></a>: null}
	      {props.video? <a href={props.video}><i className="mx-1 fas fa-2x fa-video text-muted"></i></a>: null}
	    </p>
	  </div>
	</div>
    )
}
