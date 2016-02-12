(function(){
  console.log("hey");
  var num = prompt("Pick a number");
  $.getJSON("http://pokeapi.co/api/v2/pokemon/"+num, function(pokemon) {
    console.log(pokemon.name);
    // alert("you picked" + pokemon.name);
    $('#pokePic').prepend('<img id="pokePic" src="bower_components/pokeapi/data/Pokemon_XY_Sprites/5.png" />');
  })

}())
