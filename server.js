var domino = require('domino-nsf');
var db = {server:'',database:'LocalScratchBox.nsf'};
var view = {view:"SomeForms",category:""};    

domino.initSession();

domino.getViewAsync(db,view,function(err,view) {
  console.log("view result",view);
});