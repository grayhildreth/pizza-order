function Pizza(size) {
  this.size = size;
  this.topping = [];
};

Pizza.prototype.price = function() {
  var totalPrice = 8.99 + (this.topping.length * 1);

  if (this.size == "small") {
    return totalPrice;
} else if (this.size == "medium") {
    return (totalPrice + 2);
} else if (this.size == "large") {
    return (totalPrice + 4);
  }

  return totalPrice;
};

$(document).ready(function() {

  $("form#pizza-menu").submit(function(event) {
    var size = $("select#size").val();
    var newPizza = new Pizza(size);
    var toppings = $("input.topping:checkbox:checked").each(function() {
      newPizza.topping.push(toppings);
    });

    var pizzaPrice = newPizza.price();

    $("#output").show();
    $("#total").text(pizzaPrice);

    event.preventDefault();
  });
});
