import React from "react"

import Layout from "../components/layout"
import Project from "../components/project"
import Separator from "../components/separator"

import extremeMri from "../images/extreme_mri.gif"
import kspacePrecond from "../images/kspace_precond.gif"
import kernelProximal from "../images/kernel_proximal.png"
import phaseCycling from "../images/phase_cycling.jpg"
import mslr from "../images/mslr.gif"
import ffast from "../images/2d_ffast.png"
import dfw from "../images/dfw.gif"
import mridata from "../images/mridata.png"
import sigpy from "../images/sigpy.png"
import bart from "../images/bart.png"

export default function Home() {
    let aboutMe = (
	<div className="row">
	  <div className="col-8 mx-auto text-center">
	    <figure className="figure pt-3">
	      <figcaption className="figure-caption text-justify">
		<p>
		  Hi! I am a post-doc at Stanford, advised by <a href="https://profiles.stanford.edu/shreyas-vasanawala" className="text-muted">Shreyas Vasanawala</a> and <a href="https://web.stanford.edu/~pauly/" className="text-muted">John Pauly</a>. My research interests include data science, signal processing, and computational imaging.
		</p>
		<p>
		  I did my undergrad and PhD at UC Berkeley, where I had the pleasure to work with <a href="https://people.eecs.berkeley.edu/~mlustig/" className="text-muted">Miki Lustig</a> for many years. I have worked on sparse representations, fast MRI reconstruction algorithms, and open-source software packages.
		</p>
		<p>
		  In my Berkeley days, I have also collaborated with <a href="https://people.eecs.berkeley.edu/~kannanr/" className="text-muted">Kannan Ramchandran</a> on sparse FFT algorithms. And I did a wonderful summer internship with <a href="https://sites.google.com/view/milanfarhome/" className="text-muted">Peyman Milanfar</a> on kernel methods for image processing. Please see below for an overview of my projects!
		</p>
	      </figcaption>
	    </figure>

	  </div>
	</div>
    )
    return (
	<Layout>
	  {aboutMe}
	  <Separator/>
	  <Project
	    title="Large-scale 3D Dynamic MRI from Continuous Acquisitions"
	    subtitle="with Xucheng Zhu, Joseph Cheng, Kevin Johnson, Peder Larson, Shreyas Vasanawala, and Miki Lustig"
	    image={extremeMri}
	    text="3D dynamic MRI on the order of 100GBs can be reconstructed from continuous acquisitions using a compressed low rank representation and a stochastic algorithm."
	    pdf="https://arxiv.org/pdf/1909.13482"
	    code="https://github.com/mikgroup/extreme_mri"
	    slides="https://www.slideshare.net/FrankOng5/extreme-mri-superhighres-dynamic-volumetric-mri-from-continuous-nongated-acquisition"
	    video="https://www.youtube.com/watch?v=mK-wqKr--94"
	    />
	  <Separator/>
	  <Project
	    title="SigPy: A Python Package for High Performance Signal Reconstruction"
	    subtitle="with Chris Sandino, Sri Koundinyan, Ke Wang, and Miki Lustig"
	    image={sigpy}
	    text="SigPy is a Python package for signal processing, with emphasis on iterative methods. It is built to operate directly on NumPy arrays on CPU and CuPy arrays on GPU. SigPy provides several domain-specific submodules: sigpy.plot for multi-dimensional array plotting, sigpy.mri for MRI iterative reconstruction, and sigpy.learn for machine learning."
	    link="https://sigpy.readthedocs.io/"
	    code="https://github.com/mikgroup/sigpy"
	    />
	  <Separator/>
	  <Project
	    title="Accelerating Non-Cartesian MRI Reconstruction with k-space Preconditioning"
	    subtitle="with Martin Uecker, and Miki Lustig"
	    image={kspacePrecond}
	    text="Non-Cartesian MRI reconstructions can be efficiently accelerated by preconditioning the convex dual problem."
	    pdf="https://arxiv.org/pdf/1902.09657"
	    code="https://github.com/mikgroup/kspace_precond"
	    slides="https://www.slideshare.net/FrankOng5/kspace-diagonal-preconditioner-speeding-up-iterative-reconstruction-for-variable-density-sampled-acquisitions-without-compromises"
	    video="https://www.youtube.com/watch?v=QwmlIXQJObw"
	    />
	  <Separator/>
	  <Project
	    title="Approximating Proximal Operators with Kernel Methods"
	    subtitle="with Peyman Milanfar, and Pascal Getreuer"
	    image={kernelProximal}
	    text="Proximal operators can be approximated with kernel methods with appropriate regularization functions."
	    pdf="https://arxiv.org/pdf/1803.03711"
	    />
	  <Separator/>
	  <Project
	    title="General Phase Regularized MRI Reconstruction with Phase Cycling"
	    subtitle="with Joseph Cheng, and Miki Lustig"
	    image={phaseCycling}
	    text="Robustness against phase wraps in iterative reconstruction can be achieved by spatially shifting the wraps over iterations."
	    pdf="https://arxiv.org/pdf/1709.05374"
	    code="https://github.com/mikgroup/phase_cycling"
	    slides="https://www.slideshare.net/FrankOng5/general-phase-regularized-mri-reconstruction-using-phase-cycling"
	    video="https://www.youtube.com/watch?v=WFBqYqSODCE"
	    />
	  <Separator/>
	  <Project
	    title="Multiscale Low Rank Matrix Decomposition"
	    subtitle="with Miki Lustig"
	    image={mslr}
	    text="Decomposing a matrix into block-wise low rank matrices of different scales can be done with a convex program and works well for many imaging tasks."
	    pdf="https://arxiv.org/pdf/2407.08751.pdf"
	    code="https://github.com/frankong/multi_scale_low_rank"
	    slides="https://www.slideshare.net/FrankOng5/beyond-low-rank-sparse-multiscale-low-rank-matrix-decomposition"
	    />
	  <Separator/>
	  <Project
	    title="mridata.org"
	    subtitle="with Gaby Nahum, Shahab Amin, Shreyas Vasanawala, and Miki Lustig"
	    image={mridata}
	    text="mridata.org is an open platform for researchers to share MRI raw k-space datasets. This web site provides open datasets to researchers who desire to contribute to a community of reproducible research, where they can test and validate their algorithms against known undersampled acquisitions."
	    link="http://mridata.org"
	    code="https://github.com/mikgroup/mridata"
	    />
	  <Separator/>
	  <Project
	    title="BART"
	    subtitle="with Martin Uecker (main developer), Jon Tamir, Miki Lustig and others"
	    image={bart}
	    text="The Berkeley Advanced Reconstruction Toolbox (BART) is a free and open-source image-reconstruction framework for computational MRI developed by the research groups of Martin Uecker and Michael Lustig. I was a core developer for many years til 2017."
	    link="http://mrirecon.github.io/bart/"
	    code="https://github.com/mrirecon/bart"
	    />
	  <Separator/>
	  <Project
	    title="2D Sparse Fast Fourier Transform with Sparse Graph Codes"
	    subtitle="with Samir Pawar, and Kannan Ramchandran"
	    image={ffast}
	    text="2D DFTs of k-sparse spectrums can be computed in O(k log k) time by subsampling the signal with co-prime factors, e.g. 5, 7, and 8."
	    pdf="https://arxiv.org/pdf/2409.05849"
	    code="https://github.com/frankong/FFAST"
	    slides="https://www.slideshare.net/FrankOng5/fast-sparse-2d-dft-computation-using-sparsegraph-alias-codes-202216017"
	    />
	  <Separator/>
	  <Project
	    title="Robust 4D Flow Denoising with Divergence-Free Wavelet Transform"
	    subtitle="with Martin Uecker, Umar Tariq, Albert Hsiao, Marc Alley, Shreyas Vasanawala, and Miki Lustig"
	    image={dfw}
	    text="4D flow data can be robustly denoised by thresholding divergence-free wavelet coefficients."
	    pdf="https://onlinelibrary.wiley.com/doi/epdf/10.1002/mrm.25176"
	    code="http://people.eecs.berkeley.edu/~mlustig/software/DivFreeWavelet.zip"
	    slides="https://www.slideshare.net/FrankOng5/improved-visualization-and-quantification-of-4d-flow-data-using-divergencefree-wavelet-denoising"
	    />
	</Layout>
    )
}
