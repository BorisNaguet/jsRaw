onmessage = function(e) {
	console.log("onmess");
	var wUri = e.data;
	console.log("uri = " + wUri);
	
	FS.createLazyFile('/', "image.raw",
			wUri,
			true, false);
	
	Module.callMain(["-v", "-i", "/image.raw"]);
}

var Module = {
	preRun: [],
	
	postRun: [],
	
	print: (function() {
		postMessage(["beforePrint"]);
	    return function(text) {
	    	postMessage(["print", text]);
	    };
	  })(),
	  
	  printErr: function(text) {
		  postMessage(["printErr", text]);
	  },
	  
	  canvas: (function() {
		  postMessage(["canvas"]);
	  })(),
	  
	  setStatus: function(text) {
		  postMessage(["setStatus", text]);
	  },
	  
	  totalDependencies: 0,
	  
	  monitorRunDependencies: function(left) {
	    this.totalDependencies = Math.max(this.totalDependencies, left);
	    Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
	  },
	  
	  noInitialRun: true
};

Module.setStatus('Downloading...');

Module.TOTAL_MEMORY = 128*1024*1024;
