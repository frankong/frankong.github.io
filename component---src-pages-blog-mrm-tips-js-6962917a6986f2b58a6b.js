(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Y9O":function(e,t,a){e.exports=a.p+"static/mrm_log-c2014d441298c1188c348597ce6b86b6.png"},CfKq:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),n=a.n(l);function i(e){var t=e.children;return n.a.createElement("center",null,n.a.createElement("p",{className:"text-muted small"},t))}},DM3F:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),i=a("Bl7J"),o=a("WORS"),r=a("CfKq"),s=a("McE4"),u=a("jJ/D"),c=a("/a2i"),m=a("f36M"),f=a.n(m),p=a("FwHa"),h=a.n(p),d=a("JZyF"),y=a.n(d),b=a("6Y9O"),g=a.n(b),E=a("EbeM"),w=a.n(E);t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(o.a,null,"Tips on Submitting an MRM Paper Written in Latex"),n.a.createElement(r.a,null,"September 16, 2019"),n.a.createElement(s.a,null,n.a.createElement("p",null,"A few days ago, I submitted a paper to the journal Magnetic Resonance in Medicine (MRM), and it took me over 2 hours just to “correctly” upload my Latex files."),n.a.createElement("p",null,"This is my third time submitting a paper to MRM, but I still forget what is the right way to format my Latex files. So I’ve decided to write this post to keep track of the tricks I know. I’ve learned some of them from my colleagues over the years. Hopefully this will be helpful for someone else."),n.a.createElement("h5",null,"1. Do not use Overleaf’s Wiley template"),n.a.createElement("p",null,"If you write your paper on Overleaf, you may be tempted to use the Wiley’s MRM template. After all, it is from the publisher. But this is a bad idea because the template actually does not conform with the journal’s author style guide. For example, it does not even have a title page. If you use this template, you’ll have to manually add all the requirements before submitting to MRM."),n.a.createElement("p",null,"Instead, you should always follow the ",n.a.createElement("a",{href:"https://wol-prod-cdn.literatumonline.com/pb-assets/assets/15222594/MRMStyleGuide-1519916220650.pdf"},"official MRM style guide pdf"),", or use other unofficial templates that conform to the guide. Here’s a ",n.a.createElement("a",{href:"https://drive.google.com/open?id=1VLnL3AA7LigIpTTa2XwGbGpZocNl3OSF"},"bare-bone template")," I created for myself."),n.a.createElement("h5",null,"2. Merge all .tex files into one giant file"),n.a.createElement("p",null,"In general, it is a good practice to separate Latex files into smaller parts, so that they are more organized and easily navigated. I usually have one .tex file for each section, and include the files with the ",n.a.createElement("code",null,"\\input")," command. But this is a bad idea for MRM submission. Because you can only upload three files at a time:"),n.a.createElement(u.a,null,f.a),n.a.createElement("p",null,"And each upload can take a really really long time even when the files are small. So having as few latex files as possible will minimize your upload time. With Overleaf, I find that one Latex file is now acceptable to navigate around."),n.a.createElement("h5",null,"3. Do not use Safari"),n.a.createElement("p",null,"If you use Safari, then after uploading you will get the following error:"),n.a.createElement(u.a,null,h.a),n.a.createElement("p",null,"Your files may still be uploaded. Sometimes if you log out and re-log-on, the files will show up. But sometimes they don’t. So it’s better not to use Safari for MRM submission."),n.a.createElement("h5",null,"4. Upload your main latex file last"),n.a.createElement("p",null,"You may be tempted to upload your main latex file (or your only .tex file if you follow my advice above) first, because it is the main latex file. But for MRM submission, this can be a bad idea."),n.a.createElement("p",null,"That’s because once you designated a file as the “Main Document”, each time you upload anything, the server backend will try to recompile the latex files. This will make your uploading much slower than already is. Even if you upload something irrelevant, like a supporting video, it will still try to recompile your latex files like this:"),n.a.createElement(u.a,null,y.a),n.a.createElement("p",null,"Instead, you should try to upload all other files, like images, supporting documents, and .bib file, before uploading your main latex file."),n.a.createElement("h5",null,"5. The Latex Log file is accumulative"),n.a.createElement("p",null,"When your latex compilation fails, you will get the chance to debug with the generated “Tex Processor Log”."),n.a.createElement(u.a,null,g.a),n.a.createElement("p",null,"One thing that can be really confusing is that the log file contains all logs from your previous compilations. So if you try to find errors by scrolling the log file from top to bottom, you may be confused by the errors you’ve already fixed."),n.a.createElement("h5",null,"6. Put figure numbers in image captions"),n.a.createElement("p",null,"When you upload figures, you will need to retype the image captions from the Latex files in the “Caption / Legend:” box. One thing that will be very helpful for reviewing afterwards is to retype the figure numbers as well. Like this:"),n.a.createElement(u.a,null,w.a),n.a.createElement("p",null,"This makes it easy to check whether you have put in the right caption for the figure by looking at the thumbnails. Moreover, it will also make reviewers life much easier."),n.a.createElement("h5",null,"7. Convert PDF to EPS using ",n.a.createElement("code",null,"pdftops")),n.a.createElement("p",null,"This is pretty specific to my use case, but may be useful if you have your figures in pdf formats."),n.a.createElement("p",null,"I make all my figures in Adobe Illustrator, and output them as editable pdfs. Because the MRM submission only accepts .eps or .tiff for images, I need to convert .pdf files to .eps. (Because plots in .tiff are rasterized, I generally prefer .eps.) There is a 20MB limit on each uploaded eps file. The best way I’ve found to convert pdf files to eps in small sizes is using the command line utility ",n.a.createElement("code",null,"pdftops"),"."),n.a.createElement("h5",null,"8. Use natbib over biblatex for bibliograph"),n.a.createElement("p",null,"In general, I found the submission system works better with natbib than with biblatex. This is purely anecdotal, but I just couldn’t get it working with biblatex."),n.a.createElement("h5",null,"9. If all else fails, you can upload a pdf"),n.a.createElement("p",null,"But if your paper gets accepted, you will still need to upload the Latex files."))))}},EbeM:function(e,t,a){e.exports=a.p+"static/mrm_figure_caption-ea5fcdf7a62486560f67f183b162298a.png"},FwHa:function(e,t,a){e.exports=a.p+"static/mrm_safari_error-85d434c13b18cbce803df1563c750ffb.png"},JZyF:function(e,t,a){e.exports=a.p+"static/mrm_upload_bar-8b4729e8e683db591f004cdb435ec6b8.png"},McE4:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),n=a.n(l);function i(e){var t=e.children;return n.a.createElement("div",{className:"text-justify text-body"},t)}},f36M:function(e,t,a){e.exports=a.p+"static/mrm_three_files-07e81341b4ae134e6035cabb802fc944.png"},"jJ/D":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),n=a.n(l);function i(e){var t=e.children;return n.a.createElement("center",null,n.a.createElement("figure",{className:"figure"},n.a.createElement("img",{src:t,className:"figure-img img-fluid rounded",alt:"figure"})))}}}]);
//# sourceMappingURL=component---src-pages-blog-mrm-tips-js-6962917a6986f2b58a6b.js.map