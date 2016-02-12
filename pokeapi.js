(function(){
  console.log("hey");
  // $(function() {
  //   $( "#pokeNumber" ).dialog();
  // });
  // $('#pokeMeta').prepend('<link rel="icon" type="image/png" href="bower_components/pokeapi/data/Pokemon_XY_Sprites/'+3+'.png" />');
  var num = prompt("Pick a number");
  $.getJSON("http://pokeapi.co/api/v2/pokemon/"+num, function(pokemon) {
    console.log(pokemon.name);

    $('#pokeName').prepend('<h2>'+pokemon.name+'</h2>')
    innerHTML=pokemon.name;
    $('#pokePic').prepend('<img id="pokePic" src="bower_components/pokeapi/data/Pokemon_XY_Sprites/'+num+'.png" />');
  })

}())
