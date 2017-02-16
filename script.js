// an array with all of our cart items
var cart = [];

var tempTotal=0;

var updateCart = function () {
  if (cart[0]) {
  tempTotal += cart[0].price;
  $('.total').text(tempTotal);
  }
}


var addItem = function (item) {
  // TODO: finish
//('.shopping-cart').append("<li>" + item.data().name + " - $" + item.data().price);
  cart.unshift(item);
// Handlebars portion:
var source = $('#store-template').html();

var template = Handlebars.compile(source);

var addedToCart = template({item1: item.name, price1: item.price});

$('.cart-list').append(addedToCart);
}

var clearCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  $('.total').text(0);
}

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggle(".show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.card').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  tempTotal=0;
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

