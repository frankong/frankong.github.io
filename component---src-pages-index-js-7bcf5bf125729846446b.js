(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7wys":function(e,a,t){e.exports=t.p+"static/dfw-e08b68a3f20c89174f390013f616f44c.gif"},CfKq:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),i=t.n(n);function r(e){var a=e.children;return i.a.createElement("center",null,i.a.createElement("p",{className:"text-muted small"},a))}},"HF/j":function(e,a,t){e.exports=t.p+"static/me-35f8aca3b9734ca22bc3d3f7e09c3aca.jpg"},HmuU:function(e,a,t){e.exports=t.p+"static/mridata-4c81072bd6dd127ebe94215eb91f1a47.png"},IN8O:function(e,a,t){e.exports=t.p+"static/mslr-df0a1cfa0312e942a80f602a0f864cd5.gif"},McE4:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),i=t.n(n);function r(e){var a=e.children;return i.a.createElement("div",{className:"text-justify text-body"},a)}},OGtf:function(e,a,t){var n=t("XKFU"),i=t("eeVq"),r=t("vhPU"),o=/"/g,s=function(e,a,t,n){var i=String(r(e)),s="<"+a;return""!==t&&(s+=" "+t+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(s),n(n.P+n.F*i((function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3})),"String",t)}},OPKM:function(e,a,t){e.exports=t.p+"static/kspace_precond-98a51d1a64570527c667dd047c6cd72c.gif"},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),r=t("Bl7J"),o=t("/a2i"),s=(t("tUrg"),t("WORS")),l=t("CfKq"),c=t("McE4"),m=t("jJ/D");function d(e){return i.a.createElement(o.a,null,i.a.createElement(s.a,null,e.title),i.a.createElement(l.a,null,e.subtitle),i.a.createElement(m.a,null,e.image),i.a.createElement(c.a,null,i.a.createElement("p",null,e.text)),i.a.createElement("center",null,i.a.createElement("p",null,e.link?i.a.createElement("a",{href:e.link},i.a.createElement("i",{className:"mx-1 fas fa-2x fa-link"})):null,e.pdf?i.a.createElement("a",{href:e.pdf},i.a.createElement("i",{className:"mx-1 fas fa-2x fa-file-pdf"})):null,e.code?i.a.createElement("a",{href:e.code},i.a.createElement("i",{className:"mx-1 fas fa-2x fa-code"})):null,e.slides?i.a.createElement("a",{href:e.slides},i.a.createElement("i",{className:"mx-1 fab fa-2x fa-slideshare"})):null,e.video?i.a.createElement("a",{href:e.video},i.a.createElement("i",{className:"mx-1 fas fa-2x fa-video"})):null)))}function p(e){return i.a.createElement("div",{className:"row pb-4"},i.a.createElement("div",{className:"col-xs-12 col-md-8 mx-auto"},i.a.createElement("hr",null)))}function u(e){var a=e.children;return i.a.createElement("div",{className:"text-justify text-body"},a)}var g=t("npeJ"),f=t.n(g),h=t("OPKM"),A=t.n(h),w=t("tQ2Q"),b=t.n(w),k=t("oiAZ"),v=t.n(k),E=t("IN8O"),y=t.n(E),I=t("xGCT"),x=t.n(I),C=t("7wys"),S=t.n(C),M=t("HmuU"),z=t.n(M),Z=t("dG4k"),O=t.n(Z),B=t("w3R9"),R=t.n(B),J=t("HF/j"),D=t.n(J);a.default=function(){var e=i.a.createElement(o.a,null,i.a.createElement("center",null,i.a.createElement("p",null,i.a.createElement("img",{src:D.a,className:"rounded-circle mr-3",width:"150",alt:""}))),i.a.createElement(u,null,i.a.createElement("p",null,"Hi! I am a research engineer at Stanford, working with ",i.a.createElement("a",{href:"https://profiles.stanford.edu/shreyas-vasanawala"},"Shreyas Vasanawala")," and ",i.a.createElement("a",{href:"https://web.stanford.edu/~pauly/"},"John Pauly"),". I did my undergrad (2013) and PhD (2018) at UC Berkeley, where I had the pleasure to work with ",i.a.createElement("a",{href:"https://people.eecs.berkeley.edu/~mlustig/"},"Miki Lustig")," for many years. In my Berkeley days, I have also collaborated with ",i.a.createElement("a",{href:"https://people.eecs.berkeley.edu/~kannanr/"},"Kannan Ramchandran")," on sparse FFT algorithms. And I did a wonderful summer internship with ",i.a.createElement("a",{href:"https://sites.google.com/view/milanfarhome/"},"Peyman Milanfar")," at Google on kernel methods."),i.a.createElement("p",null,"I am generally interested in data science, signal processing, and computational imaging. A lot of my projects involve recoverying high dimensional data from corrupted and underdetermined measurement systems. Motivated by such problems, I have developed sparse data representations, fast iterative algorithms, and open source high performance software packages. Please see below for an overview of my projects!")));return i.a.createElement(r.a,null,e,i.a.createElement(p,null),i.a.createElement(d,{title:"Extreme MRI: Large-scale Dynamic MRI from Continuous Acquisitions",subtitle:"with Xucheng Zhu, Joseph Cheng, Kevin Johnson, Peder Larson, Shreyas Vasanawala, and Miki Lustig",image:f.a,text:"This project develops a framework to reconstruct large-scale volumetric dynamic MRI from rapid continuous and non-gated acquisitions. The problem considered here requires recovering ~100GBs of data from a few GBs of measurements. We propose two innovations: (1) A compressed representation using multi-scale low rank matrix factorization. (2) Stochastic optimization to reduce computation. We demonstrate the feasibility of the proposed method on DCE and pulmonary imaging.",pdf:"https://arxiv.org/pdf/1909.13482",code:"https://github.com/mikgroup/extreme_mri",slides:"https://www.slideshare.net/FrankOng5/extreme-mri-superhighres-dynamic-volumetric-mri-from-continuous-nongated-acquisition",video:"https://www.youtube.com/watch?v=mK-wqKr--94"}),i.a.createElement(p,null),i.a.createElement(d,{title:"SigPy: A Python Package for High Performance Signal Reconstruction",subtitle:"with Chris Sandino, Sri Koundinyan, Ke Wang, and Miki Lustig",image:O.a,text:"SigPy is a Python package for signal processing, with emphasis on iterative methods. It is built to operate directly on NumPy arrays on CPU and CuPy arrays on GPU. SigPy provides several domain-specific submodules: sigpy.plot for multi-dimensional array plotting, sigpy.mri for MRI iterative reconstruction, and sigpy.learn for machine learning.",link:"https://sigpy.readthedocs.io/",code:"https://github.com/mikgroup/sigpy"}),i.a.createElement(p,null),i.a.createElement(d,{title:"k-space Preconditioning: Accelerating Non-Cartesian MRI Reconstruction without Compromises",subtitle:"with Martin Uecker, and Miki Lustig",image:A.a,text:"We propose a k-space preconditioning formulation for accelerating the convergence of iterative MRI reconstructions from non-uniformly sampled data. Existing methods either use sampling density compensations which sacrifice reconstruction accuracy, or circulant preconditioners which increase per-iteration computation. Our approach overcomes both shortcomings. Concretely, we show that viewing the reconstruction problem in the convex dual formulation allows us to precondition in k-space using density-compensation-like operations.",pdf:"https://arxiv.org/pdf/1902.09657",code:"https://github.com/mikgroup/kspace_precond",slides:"https://www.slideshare.net/FrankOng5/kspace-diagonal-preconditioner-speeding-up-iterative-reconstruction-for-variable-density-sampled-acquisitions-without-compromises",video:"https://www.youtube.com/watch?v=QwmlIXQJObw"}),i.a.createElement(p,null),i.a.createElement(d,{title:"Approximating Proximal Operators with Kernel Methods",subtitle:"with Peyman Milanfar, and Pascal Getreuer",image:b.a,text:"In this work, we broadly connect kernel-based filtering with general variational formulations of Bayesian regularized least squares. The latter set of Bayesian formulations often result in optimization problems that do not have closed-form solutions, and therefore typically require global iterative solutions. Our main contribution here is to establish how one can approximate the solution of the resulting global optimization problems with use of locally adaptive filters with specific kernels.",pdf:"https://arxiv.org/pdf/1803.03711"}),i.a.createElement(p,null),i.a.createElement(d,{title:"General Phase Regularized MRI Reconstruction with Phase Cycling",subtitle:"with Joseph Cheng, and Miki Lustig",image:v.a,text:"We study the problem of enforcing phase constraints in reconstruction under a regularized inverse problem framework. We propose a general phase regularized reconstruction algorithm to enable various joint reconstruction of partial Fourier imaging, water-fat imaging and flow imaging. Since phase regularized reconstruction is inherently non-convex and sensitive to phase wraps in the initial solution, we develop a reconstruction technique, named phase cycling, to render the overall algorithm invariant to phase wraps.",pdf:"https://arxiv.org/pdf/1709.05374",code:"https://github.com/mikgroup/phase_cycling",slides:"https://www.slideshare.net/FrankOng5/general-phase-regularized-mri-reconstruction-using-phase-cycling",video:"https://www.youtube.com/watch?v=WFBqYqSODCE"}),i.a.createElement(p,null),i.a.createElement(d,{title:"Multiscale Low Rank Matrix Decomposition",subtitle:"with Miki Lustig",image:y.a,text:"We present a natural generalization of the low rank + sparse matrix decomposition and consider the decomposition of matrices into components of multiple scales. Concretely, we propose a multi-scale low rank modeling that represents a data matrix as a sum of block-wise low rank matrices with increasing scales of block sizes. We then consider the inverse problem of decomposing the data matrix into its multi-scale low rank components and approach the problem via a convex formulation. We provide theoretical recovery guarantees and practical applications.",pdf:"https://arxiv.org/pdf/1507.08751",code:"https://github.com/frankong/multi_scale_low_rank",slides:"https://www.slideshare.net/FrankOng5/beyond-low-rank-sparse-multiscale-low-rank-matrix-decomposition"}),i.a.createElement(p,null),i.a.createElement(d,{title:"mridata.org: An Open Platform for Sharing MRI Raw Datasets",subtitle:"with Gaby Nahum, Shahab Amin, Shreyas Vasanawala, and Miki Lustig",image:z.a,text:"mridata.org is an open platform for researchers to share MRI raw k-space datasets. This web site provides open datasets to researchers who desire to contribute to a community of reproducible research, where they can test and validate their algorithms against known undersampled acquisitions.",link:"http://mridata.org",code:"https://github.com/mikgroup/mridata"}),i.a.createElement(p,null),i.a.createElement(d,{title:"BART: Toolbox for Computational MRI",subtitle:"with Martin Uecker (main developer), Jon Tamir, Miki Lustig and others",image:R.a,text:"The Berkeley Advanced Reconstruction Toolbox (BART) is a free and open-source image-reconstruction framework for computational MRI developed by the research groups of Martin Uecker and Michael Lustig. I was a core developer for many years til 2017. BART provides common operations on multi-dimensional arrays, Fourier and wavelet transforms, as well as generic implementations of iterative optimization algorithms. The command-line tools provide direct access to basic operations on multi-dimensional arrays as well as efficient implementations of many calibration and reconstruction algorithms for parallel imaging and compressed sensing.",link:"http://mrirecon.github.io/bart/",code:"https://github.com/mrirecon/bart"}),i.a.createElement(p,null),i.a.createElement(d,{title:"2D Sparse Fast Fourier Transform with Sparse Graph Codes",subtitle:"with Samir Pawar, and Kannan Ramchandran",image:x.a,text:"We present a algorithm, named the 2D-FFAST, to compute a sparse 2D-DFT featuring both low sample complexity and low computational complexity. The proposed algorithm is based on mixed concepts from signal processing (sub-sampling and aliasing), coding theory (sparse-graph codes) and number theory (Chinese-remainder-theorem). Concretely, the 2D-FFAST algorithm computes a k-sparse 2D-DFT, with a uniformly random support, of size N = Nx x Ny using O(k) noiseless spatial-domain measurements in O(k log k) computational time.",pdf:"https://arxiv.org/pdf/1509.05849",code:"https://github.com/frankong/FFAST",slides:"https://www.slideshare.net/FrankOng5/fast-sparse-2d-dft-computation-using-sparsegraph-alias-codes-202216017"}),i.a.createElement(p,null),i.a.createElement(d,{title:"Robust 4D Flow Denoising with Divergence-Free Wavelet Transform",subtitle:"with Martin Uecker, Umar Tariq, Albert Hsiao, Marc Alley, Shreyas Vasanawala, and Miki Lustig",image:S.a,text:"We investigate 4D flow denoising using the divergence-free wavelet (DFW) transform. DFW is a vector-wavelet that provides a sparse representation of flow in a generally divergence-free field. It can be used to enforce “soft” divergence-free conditions when discretization and partial voluming result in numerical nondivergence-free components. Efficient denoising is achieved by appropriate shrinkage of divergence-free waveletand non-divergence-free coefficients.",pdf:"https://onlinelibrary.wiley.com/doi/epdf/10.1002/mrm.25176",code:"http://people.eecs.berkeley.edu/~mlustig/software/DivFreeWavelet.zip",slides:"https://www.slideshare.net/FrankOng5/improved-visualization-and-quantification-of-4d-flow-data-using-divergencefree-wavelet-denoising"}))}},dG4k:function(e,a,t){e.exports=t.p+"static/sigpy-5f23db84edf2cdac61846ad930f94952.png"},"jJ/D":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),i=t.n(n);function r(e){var a=e.children;return i.a.createElement("center",null,i.a.createElement("figure",{className:"figure"},i.a.createElement("img",{src:a,className:"figure-img img-fluid rounded",alt:"figure"})))}},npeJ:function(e,a,t){e.exports=t.p+"static/extreme_mri-d9657677b74fd404cd79347ef059d34f.gif"},oiAZ:function(e,a,t){e.exports=t.p+"static/phase_cycling-9f44e52ee0c9941f79b20f6ab582437b.jpg"},tQ2Q:function(e,a,t){e.exports=t.p+"static/kernel_proximal-86ba96ff6fa25b4679d42841d560c210.jpg"},tUrg:function(e,a,t){"use strict";t("OGtf")("link",(function(e){return function(a){return e(this,"a","href",a)}}))},w3R9:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAACWCAYAAAAYGP4iAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAADLAAAAAQAAAMsAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAPugAwAEAAAAAQAAAJYAAAAAiiuDkgAAAAlwSFlzAAAfOAAAHzgBkz8n9QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAHSNJREFUeAHtnWesVcUWxwd7wYYNFfUKXkEEFK/liigoeo0lsbcIIRFbBEsIHxBN1Bhj4gcTQ/xwNYqxlygKWIgYxKgoKnZERAF77729x290fOfte87Za/bZfa+VnJxz79lnyn/mP2vNmjUzvf6zWoyKIqAIlB6BNUpfQ62gIqAIWASU7NoRFIGKIKBkr0hDazUVASW79gFFoCIIKNkr0tBaTUVgrWYQ4Kj//fffza+//mr++uuvZo/m7rtevXqZ9dZbz6yzzjq5K5sWSBHIAoGmZP/tt9/MW2+9ZZ544gnz2WefZVG+yHluuOGGpqury3R0dEROQ3+oCJQJgaZkR6svXbrUzJgxwyxZssQUaUl+q622Mn379lWyl6m3al1aQqAp2UnZmfIQv0hkL1p5W2pF/bEiIEBAHXQCkPQRRaAMCCjZy9CKWgdFQICAkl0Akj6iCJQBASV7GVpR66AICBBQsgtA0kcUgTIgoGQvQytqHRQBAQJKdgFI+ogiUAYEQtfZpZUkPHXdddc1vXv3Nmuskf0YssUWW9hwWWn59TlFoOwIxEb29ddf3xx00EHm5JNPNhtttFHmuDHwDB48OPNyaAEUgbwgEBvZ1157bTNgwABz5JFHmj59+uSlfloORUAR+AeB7O1tbQpFQBFIBQEleyowayaKQPYIKNmzbwMtgSKQCgJK9lRg1kwUgewRULJn3wZaAkUgFQSU7KnArJkoAtkjoGTPvg20BIpAKggo2VOBWTNRBLJHQMmefRtoCRSBVBBQsqcCs2aiCGSPgJI9+zbQEigCqSAQW2x81NJmdWItu/SylKTqHVe9kipfGOZxlD+rsofVrdn3cdS7Wfp8lznZuW3m7bffNr/88ktYWSN/zw44XuzM22CDDew7N8WsueaaBpDTALq28HTGn376ydabI6/jEOq33Xbbmc033zyO5OwNQJ9//rn56KOPzJ9//hlLmsFE2ArNrT28aBde1INNVXwXtV24vejdd98133zzTTDL3P3N3QbbbLONWWut5KmYfA4h8L7//vvm1FNPNW+88UbIk9G+htCbbbaZ4dKI7bff3uy44452d97AgQNN//79zbbbbms23nhjC3bUzuVbMsjz+uuvmyOOOMJ89dVXvj/v8Tzl3mGHHczll19uxo8f3+P7KP9gEL733nvNZZddFksZ65UBYoM/bUP5aQ92Tg4aNMjstNNOdvckA4Hv+Qg///yzmTp1qrn//vvrZZub/0HwyZMnm2nTpplNNtkk8XJlTvakawixvvjiC/viVhsErQ7pd9llF9PZ2WlGjhxphg4dGptWDKsTZeI6rTiITl5YCt9//7358MMPw7LO1fcMKCtWrLCv5557zpKagRnC0x6jRo0y++67r20rBgaV1hAoPdnrwcMddkwdMPXoZA899JAZM2aMOemkk8xuu+1mzft6v4vrf5juq1atiis5mw7ToE8//dSg1ZiuFFEwv7/88kv7evXVV82CBQvMPvvsY4477jhz1FFHWRO/iPXKS5krSXYHvtP6dLA333zTvPzyy+bss8+2J+5wMWRSZj1kf+edd1wxYnmHKMyxqUu/fv1iSTPLRBi8li9fbgdFBmTwom2YciXVLlnWN428K012BzBm8Lfffmvm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"},xGCT:function(e,a,t){e.exports=t.p+"static/2d_ffast-4d8dc6b65ae3aaa35c1442da3a8a1c7f.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-7bcf5bf125729846446b.js.map