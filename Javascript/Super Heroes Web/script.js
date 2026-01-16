
const heroesDiv = document.getElementById ("heroes");
const search = document.getElementById("search");

let heroes = [];


fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then(res => res.json())
  .then(data => {
    heroes = data; 
    render(heroes);
  });

function render(list) {
  heroesDiv.innerHTML = "";
  list.forEach(h => {
    heroesDiv.innerHTML += `
      <div class="card">
        <img src="${h.images.lg}" alt="${h.name}">
        <div class="info">
          <h3>${h.name}</h3>
          <p>
            <strong>Power:</strong> ${h.powerstats.power}<br>
            <strong>Intelligence:</strong> ${h.powerstats.intelligence}<br>
            <strong>Speed:</strong> ${h.powerstats.speed}
          </p>
        </div>
      </div>
    `;
  });
}


search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  render(
    heroes.filter(h =>
      h.name.toLowerCase().startsWith(value)
    )
  );
});


