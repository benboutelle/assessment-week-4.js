
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const jokeBtn = document.getElementById("jokeBtn")
const randomBtn = document.getElementById("randomcar")
const deathBtn = document.getElementById("yourDeath")
const ballBtn = document.getElementById("8ball")


const getCompliment = () => {
    axios.get("http://localhost:5501/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const getFortunes = () => {
    axios.get("http://localhost:5501/api/fortune")
        .then(res => {
            alert(res.data);
    });
};
fortuneBtn.addEventListener('click', getFortunes)




const getJoke = () => {
    axios.get("http://localhost:5501/api/joke")
        .then(res => {
            alert(res.data);
    });
};
jokeBtn.addEventListener('click', getJoke)



const getRandom = () => {
    axios.get("http://localhost:5501/api/random")
        .then(res => {
            alert(res.data);
    });
};
randomBtn.addEventListener('click', getRandom)


const getDeath = () => {
    axios.get("http://localhost:5501/api/death")
        .then(res => {
            alert(res.data);
    });
};
deathBtn.addEventListener('click', getDeath)


const getBall = () => {
    axios.get("http://localhost:5501/api/ball")
        .then(res => {
            alert(res.data);
    });
};
ballBtn.addEventListener('click', getBall)


// //IM GETTING A 404 ERROR STATUS IM GUESSING MY ENDPOINTS DONT MATCH 

// const newFortuneBtn = document.getElementById("newFortuneButton")

// const addFortune = () => {
//     let fortuneInput = document.getElementById("newFortuneInput")

//     let body = {
//         fortune: fortuneInput.value
//     }
// axios.post("http://localhost:5501/api/fortune", body )
// .then(res => {
//     alert(res.data)
//     fortuneInput.value = ''
// });

// };
// newFortuneBtn.addEventListener('click', addFortune)

// //IM GETTING A 404 HERE ASWELL


// const updateFortuneBtn = document.getElementById('updateFortuneButton')

// const updateFortune = () => {
//     let fortuneIndex = document.getElementById('updateFortuneIndex')
//     let updatedFortuneInput = document.getElementById('updateFortuneInput')

//     let body = {
//         fortune: updatedFortuneInput.value
//     }

//     axios.put(`http://localhost:5501/api/fortune/${fortuneIndex.value}`, body)
//     .then(res => {
//         alert(res.data)
//         fortuneIndex.value = ''
//         updatedFortuneInput.value = ''

//     })
// }
// updateFortuneBtn.addEventListener('click', updateFortune)

// //404 AGAINNNNN SUPER FRUSTRATING HAHAH


// const deleteFortuneBtn = document.getElementById('deleteFortuneButton')

// const deleteFortune = ()=> {
//     let deleteFortuneInput = document.getElementById('deleteFortuneInput')

//     axios.delete(`http://localhost:5501/api/fortune/${deleteFortuneInput.value}`)
//     .then(res => {
//         alert(res.data)
//         deleteFortuneInput.value = ''
//     })
// }

// deleteFortuneBtn.addEventListener('click', deleteFortune)