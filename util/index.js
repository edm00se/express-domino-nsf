var domino = require('domino-nsf'),
  config = require('../config'),
  db = config.db;

function getDocValsByUnid(un){
  domino.getDocumentAsync(db,un,function(error,doc){
    console.log('-------------');
    console.log(un);
    for(var prop in doc){
      console.log(prop+": "+doc[prop]);
    };
  });
};

function getViewContents(vw,cb){
  var vwOb = {view:vw,category:""};
  domino.getViewAsync(db,vwOb,function(err,view) {
    if(!err){
      cb(null,view);
    }else{
      cb(err);
    }
  });

};

module.exports = {
  getView: getViewContents
};