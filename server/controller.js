const Restaurants = require('./models');

function createNew(req, res){
    Restaurants.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function getAll(req, res){
    Restaurants.find({})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function getOne(req, res){
    Restaurants.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function addReview(req, res){
    Restaurants.findById(req.params.id)
        .then(data=>{
            data.review.push(req.body)
            return data.save();
        })
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}
function deleteOne(req, res){
    Restaurants.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function updateOne(req, res){
    Restaurants.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: "query"})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

module.exports = {
    createNew: createNew,
    getAll: getAll,
    getOne: getOne,
    addReview: addReview,
    deleteOne: deleteOne,
    updateOne: updateOne
}