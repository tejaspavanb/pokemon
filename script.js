

function fetchPokemon() {
    const pname=document.getElementById("inputp").value.toLowerCase();
    const img=document.getElementById("pokemon");
    fetch("https://pokeapi.co/api/v2/pokemon/"+pname).then(response => {
    if(!response.ok){
        throw new Error("Pokemon not found");
    }
    return response.json();
}).then(data => {
    img.src=data.sprites.front_default;
    img.style.display="block";
    console.log(data);
}).catch(error => {
    console.log(error);
});
}