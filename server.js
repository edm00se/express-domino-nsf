var domino = require('domino-nsf'),
	db = {server:'',database:'LocalScratchBox.nsf'},
	view = {view:"SomeForms",category:""};    

domino.initSession();

domino.getViewAsync(db,view,function(err,view) {
  console.log("view result",view);
});