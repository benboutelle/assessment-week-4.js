const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, addFortune, updateFortune, deleteFortune } = require('./controller')


app.get("/api/compliment", getCompliment);


app.get("/api/fortune", getFortunes);

app.post("/api/fortune", addFortune);

app.put("/api/fortune/:index", updateFortune)
app.delete('/api/fortune/:index', deleteFortune)

app.listen(5501, () => console.log("Server running on 5501"));
