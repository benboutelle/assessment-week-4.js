

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

        res.status(200).send(randomFortune);
    },

    getJoke: (req, res) => {
        const joke = ["What is Forrest Gump's password? 1Forrest1.","How do you throw a space party? You planet!","You know what I saw today? Everything I looked at.","If you see a crime at an Apple store, are you an iWitness?"]
        let randomIndex = Math.floor(Math.random() * joke.length);
        let randomJoke = joke[randomIndex];

        res.status(200).send(randomJoke);
        
    },

    getRandom: (req, res) => {
        const random = ["Honda Civic","Toyota Tacoma","Dodge Hellcat","Lamborghini Aventador","Benz Maybach","Rolls-Royce Wraith","Maserati Granturismo","Nissan Laurel c33"]
        let randomIndex = Math.floor(Math.random() * random.length);
        let randomRandom = random[randomIndex];

        res.status(200).send(randomRandom);


        },


        getYourDeath: (req, res) => {
            const yourDeath = ["you will die on your toilet", "you will die falling off a cliff", "you will die before you retire", "you will die in your shower", "you will die slipping on a banana peel", "you will die fallingout of bed"]
            let randomIndex = Math.floor(Math.random() * yourDeath.length);
            let randomYourDeath = yourDeath[randomIndex];
    
            res.status(200).send(randomYourDeath);
    
    
            },

            
        getBall: (req, res) => {
            const eightBall = ["Outlook good","Without a doubt", "It is certain", "Ask again later","Concentrate and ask again","Reply hazy, try again","My sources say no", "Don’t count on it", "Outlook not so good"]
            let randomIndex = Math.floor(Math.random() * eightBall.length);
            let randomEightBall = eightBall[randomIndex];
    
            res.status(200).send(randomEightBall);
        }
    
//     addFortune: (req, res) => {
//         let {fortune} = req.body

//         fortune.push (fortune)

//         res.status(200).send('Fortune added')
//     },

//   updateFortune: (req, res) => {
//        let {index} =  req.params
//         let {fortune} = req.body    

//         fortune.splice  (index, 1, fortune )

//         res.status(200).send('fortune updated')
//     },

//     deleteFortune: (req, res) => {
//         let {index} = req.params

//         fortune.splice(index, 1)
//         res.status(200).send('fortune deleted!')
//     }


 }