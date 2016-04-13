var util = require('../util'),
    path = require('path');

module.exports = function (app) {

    /*
     * route handling
     * 
     * format = app.VERB(path, callback)
     * 
     * only GETs being used here
     * no POST, PUT, or DELETEs defined
     * so, in CRUD terms, only READ operations
     * 
     */

    // set up the GET routes themselves
    app.get("/", function (req, res, next) {
        //requestor doesn't know this is a single-purpose API server
        res.sendFile(path.join(__dirname, '../public', 'readme.html'));
    });

    app.get("/views", function(req, res, next){
        //api call, getting warmer
        res.jsonp({
            "message": '/views'
        });
    });
    
    ///api/:routeParm1/:routeParm2 with regex validation inline, alphanumeric, 5 positions
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