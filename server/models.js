const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost:27017/exam', {useNewUrlParser: true});

const RestaurantSchema = new mongoose.Schema({
    restaurant: {
        type: String,
        unique: [true, "This restaurant already exists"],
        required:[true, "Name is required"],
        minlength: [3, "Name must be 3 characters long or more"]
    },
    cuisine: {
        type: String,
        required:[true, "Cuisine is required"],
        minlength: [3, "Cuisine must be 3 characters long or more"]
    },
    review: [{
        name: {
            type: String,
            required:[true, "Name is required"],
            minlength: [3, "Reviews must be 3 characters long or more"]
        },
        description: {
            type: String,
            required:[true, "Description is required"],
            minlength: [3, "Description must be 3 characters long or more"]
        },
        star: {
            type: Number,
            required:[true, "Stars is required"],
            minlength: [1, "Stars cannot be less than one star rating"],
            maxlength: [5, "Stars cannot be more than 5 star rating"]
        }
    }]
}, {timestamps: true});

const Restaurants = mongoose.model('restaurant', RestaurantSchema);
RestaurantSchema.plugin(unique,{
    message: 'This restaurant already exists'
});

module.exports = Restaurants;