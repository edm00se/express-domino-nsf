var domino = require('domino-nsf'),
  config = require('../config'),
  db = config.db;

function getDocumentByUnid(un,cb){
  domino.getDocumentAsync(db,un,function(err,doc){
    if(!err){
      cb(null,doc);
      console.log('Error: '+err);
    }else{
      cb(err);
    }
  });
};

function getViewContents(vw,cb){
  var vwOb = {view:vw,category:""};
  domino.getViewAsync(db,vwOb,function(err,view) {
    if(!err){
      cb(null,view);
      console.log('Error'+err);
    }else{
      cb(err);
    }
  });

};

module.exports = {
  getView: getViewContents,
  getDoc: getDocumentByUnid
};