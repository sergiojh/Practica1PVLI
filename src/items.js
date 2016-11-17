'use strict';

function Item(name, effect) {
  this.name = name;
  this.effect = effect;
// this.effect.hp=effect;


}

function Weapon(name, damage, extraEffect) {
  extraEffect = extraEffect || new Effect({});

  Item.call(this,name,extraEffect);
  this.effect.hp = -damage;
  for( name in extraEffect){
    this.effect[name] = extraEffect[name];

  }
  /*Item.call(this,name,extraEffect);
  
  this.effect.mp = -damage;
  this.extraEffect = extraEffect || new Effect({});
  */

  //esta linea no hacía anda a ojos de pasar los test
  //Weapon = Item.prototype.constructor;
  // Haz que Weapon sea subtipo de Item haciendo que llame al constructor de
  // de Item.
}
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;
// Termina de implementar la herencia haciendo que la propiedad prototype de
// Item sea el prototipo de Weapon.prototype y recuerda ajustar el constructor.

function Scroll(name, cost, effect) {
  Item.call(this, name, effect);
  this.cost = cost;
}
Scroll.prototype = Object.create(Item.prototype);
Scroll.prototype.constructor = Scroll;

Scroll.prototype.canBeUsed = function (mp) {
  // El pergamino puede usarse si los puntos de maná son superiores o iguales
  // al coste del hechizo.
  return (this.cost <= mp);
};


function Effect(variations) {
  // Copia las propiedades que se encuentran en variations como propiedades de
  // este objeto.
  for(var name in variations){
    this[name] = variations[name];
  }
  
}

module.exports = {
  Item: Item,
  Weapon: Weapon,
  Scroll: Scroll,
  Effect: Effect
};
