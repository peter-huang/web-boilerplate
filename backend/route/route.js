module.exports = function(app){
    

    app.route("/")
    .get(function(req, res){
        res.render("index");
    })
    .post(function(req, res){

    })
    .put(function(req, res){

    })
    .patch(function(req, res){

    })
    .delete(function(req, res){

    });
}