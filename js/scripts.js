function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
 }
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small"){
    return 8.99;
  } else if (this.size === "medium") {
    return 10.99;
  } else {
    return 12.99;
  }
}

Pizza.prototype.pizzaPrice = function() {
  var sizePrice = this.sizePrice(this.size);
  var totalPrice = sizePrice + (this.toppings * 1);
  return totalPrice;
}

$(document).ready(function() {
  $("form#pizza-menu").submit(function(event) {
    event.preventDefault();
