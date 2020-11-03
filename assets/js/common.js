


const x = document.getElementsByTagName("video");

for(var i=0;i<x.length;i++){
	x[i].addEventListener('click',function(){
	 	if (this.requestFullscreen) {
	    	this.requestFullscreen();
	  	}
	})
}