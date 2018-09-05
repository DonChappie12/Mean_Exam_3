const api = require('./controller');
const bp = require('body-parser');

function router(app){
    app.use(bp.json());
    app.post('/api/restaurants', api.createNew);
    app.get('/api/restaurants', api.getAll);
    app.get('/api/restaurants/:id', api.getOne);
    app.put('/api/restaurants/review/:id', api.addReview);
    app.delete('/api/restaurants/:id', api.deleteOne);
    app.patch('/api/restaurants/update/:id', api.updateOne);
}

module.exports = router;