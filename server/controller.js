module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortunes: (req, res) => {
        const fortune = ["Do not underestimate yourself. Human beings have unlimited potentials.", "Chance favors those in motion.", "Curiosity kills boredom. Nothing can kill curiosity.", "Believe it can be done.", "A truly rich life contains love and art in abundance." ]

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune)
    },



}