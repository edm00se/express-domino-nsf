var util = require('../util');

module.exports = function (app) {

    /*
     * route handling format = app.VERB(path, callback)
     * 
     */

    app.get("/views", function(req, res, next){
        res.jsonp({
            "message": '/views'
        });
    });
    
    app.get("/views/:view", function(req, res, next) {
        //proper /views call by view name
        var viewName = req.params.view;
        util.getView(viewName, function(err,data){
            if(!err){
                res.jsonp({'data':data,'error':false});
            }else{
                res.jsonp({'error': true,'message':err});
            }
        });
    });
    
};