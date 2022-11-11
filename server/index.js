const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const {getFortunes} = require('./controller')

app.get("/api/compliment", getCompliment);


app.get("/api/fortune", getFortunes);





app.listen(5501, () => console.log("Server running on 5501"));
