const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getJoke, getRandom, getYourDeath, getBall } = require('./controller')



app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortunes);

app.get("/api/joke", getJoke);

app.get("/api/random", getRandom);

app.get("/api/death", getYourDeath);

app.get("/api/ball", getBall);

// app.post("/api/fortune", addFortune);

// app.put("/api/fortune/:index", updateFortune)
// app.delete('/api/fortune/:index', deleteFortune)

app.listen(5501, () => console.log("Server running on 5501"));
