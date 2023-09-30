const mongoose = require("mongoose");
const schema = mongoose.schema;

const listingSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) =>
         v ===""
        ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
         : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;