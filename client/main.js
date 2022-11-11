
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:5501/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortunes = () => {
    axios.get("http://localhost:5501/api/fortunes")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortunes)