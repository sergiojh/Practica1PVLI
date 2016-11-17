'use strict';

function TurnList() {}

TurnList.prototype.reset = function (charactersById) {
  this._charactersById = charactersById;

  this._turnIndex = -1;
  this.turnNumber = 0;
  this.activeCharacterId = null;
  this.list = this._sortByInitiative();
};

TurnList.prototype.next = function () {
  // Haz que calcule el siguiente turno y devuelva el resultado
  // según la especificación. Recuerda que debe saltar los personajes
  // muertos.
 //// list //basandome en estas dos listas sacar al primero por iniciativa y que no este muerto
 // charactersById
  var turn = {};
  
  
 var i = 0;
 if(this.list.length > this._turnIndex && this._turnIndex != -1 )i = this._turnIndex;

  var parada = false;
  //console.log(this.list.length);
  while(!parada && (i < this.list.length)){
   if(!this._charactersById[this.list[i]].isDead())parada = true;
    i++;
    //console.log(this.list[i]);

  }
   this._turnIndex = i;
  i--;
 

  turn.activeCharacterId = this.list[i];
  
  turn.party = this._charactersById[this.list[i]].party;
  this.activeCharacterId = turn.activeCharacterId;
   this.turnNumber++;
  turn.number = this.turnNumber;
  
  //console.log(this.turnNumber);
 // console.log(this.activeCharacterId);
   // turn.activeCharacterId=this._charactersById[this.list[i]];
  //turn.activeCharacterId =;
  

  

  /*
   
   console.log("aqui");
   console.log(this._charactersById.b);
   console.log("aqui");
   */
/*
  
  */

 

  
  
  return turn;
};

TurnList.prototype._sortByInitiative = function () {
  // Utiliza la función Array.sort(). ¡No te implementes tu propia
  // función de ordenación!
  
 // this._turnIndex = -1;
//  this.turnNumber= 0;
 // this.activeCharacterId = null;
  //this.list=['c', 'b', 'a']
  var lista = [];
  var lista2 = [];
  for(var letra in this._charactersById){
    lista.push({name:letra, initiative:this._charactersById[letra].initiative}) ;
  }
  lista.sort(function(a,b){
    if(a.initiative > b.initiative)  return -1;
    else if(a.initiative < b.initiative) return 1;
      return 0;
  });
for( letra in lista){
    lista2.push(lista[letra].name);
}
  //this._charactersById = charactersById;

 // list._turnIndex=this._turnIndex ;
  //list.turNumber=this.turnNumber ;
  //this.activeCharacterId = ;
  return lista2;
};



module.exports = TurnList;
