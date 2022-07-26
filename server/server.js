const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//routes
const { readdirSync } = require("fs");
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
const mongoose = require("mongoose");
const Db = process.env.ATLAS_URI;
mongoose
    .connect(Db, {
        useNewUrlParser: true,
    })
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("error connecting to mongodb", err));

app.get("/", (req, res) => {
    res.send("Welcome home.");
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});