const apiURL = "https://hp-api.onrender.com/api/characters";
const container = document.getElementById("container");

fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        container.innerHTML = "";
        data.forEach((element) => {
            container.innerHTML += `
            <div id="infoPersonaje">
                <strong>Nombre: ${element.name}</strong>
                <p>Casa: ${element.house}</p>
                <p>Patronus: ${element.patronus}</p>
                <p>Actor: ${element.actor}</p>
                <img src="${element.image}"></img>
            </div>`
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });