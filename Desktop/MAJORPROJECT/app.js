const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = reqiure("../models/Listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("MONGO_URL");
}

app.get("/", (req, res) => {
    res.send("Hi, I am root ");
});

app.get("/testListening", async (req,res) => {
    let sampleListing = new Listing({
        title: "My new villa",
        description: "By the beach",
        price:1200,
        location: "kosikalan, mathura",
        country : "India",
    });
await sampleListing.save();
console.log("sample was saved");
res.send("successful testing");
});
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});