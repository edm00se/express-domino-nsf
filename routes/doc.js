var util = require('../util');

module.exports = function (app) {

    /*
     * route handling format = app.VERB(path, callback)
     * 
     */

    app.get("/docs", function(req, res, next){
        res.jsonp({
            "message": '/docs'
        });
    });
    
    app.get("/docs/:unid([a-fA-F0-9]{32})", function(req, res, next) {
        //proper /doc call by unid
        var un = req.params.unid;
        util.getDoc(un, function(err,data){
            if(!err){
                res.jsonp({'data':data,'error':false});
            }else{
                res.jsonp({'error': true,'message':err});
                console.log(err);
            }
        });
    });
    
};