

async function fetchPokemon(){
    try{
        const pname=document.getElementById("inputp").value.toLowerCase();
        const img=document.getElementById("pokemon");
        reponse = await fetch("https://pokeapi.co/api/v2/pokemon/"+pname);
        if(!reponse.ok){
            throw new Error("Pokemon not found");
        }
        const data = await reponse.json();
        img.style.display="block";
        img.src=data.sprites.front_default; 

    }
    catch(error){
        console.log(error);
    }
}