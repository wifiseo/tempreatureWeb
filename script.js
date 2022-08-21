

document.getElementById("search").addEventListener("click", function(){
    document.body.style.backgroundImage= "url('https://source.unsplash.com/featured/landscap')";
    let placeName = document.getElementById("searchinput").value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=694ad86d37164675f0f64a08aca0234f`)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("cite-name").innerText = data.name;
        document.getElementById("searchinput").value = ("");
        document.getElementById("tempreture").innerText = data.main.temp;

    })
})

