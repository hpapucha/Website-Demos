var itemsInCart = 0;
var subTotal = 0;
const tax = 0.1;	// 10%
var totalPrice = 0;


$(document).ready(function() {
  $('img').addClass('img-responsive');
  
	$('.img-container').append('<button class="btn btn-success btn-add-cart"><span class="glyphicon glyphicon-shopping-cart"></span> to cart</button>');

$('.btn-add-cart').click( (e) => { 
		var eventTarget;
		if ($(e.target).is('span')) eventTarget = $(e.target).parent();
			else eventTarget = $(e.target);
		var itemName = eventTarget.parent().parent().find('h2')[0].textContent ;
		var itemPrice = eventTarget.parent().parent().find('p')[1].textContent ;
		addToCart(itemName, itemPrice);
	});

	$('#submit').click( () => {
		formSubmitted();
	});


});

function addToCart(name, price) {
	var priceNumber = parseFloat(price.slice(1));
	if (itemsInCart === 0) $('#cart').text(" ");
	var newDiv = $('<div class="cart-item"></div>');
	newDiv.text(name + ' ... ' + price + ' ');
	newDiv.append('<button class="btn btn-danger btn-xs" onclick="devareItem(this)">X</button>');
	newDiv.append('<hr>');
	newDiv.attr('name', name);
	newDiv.attr('price', priceNumber);
	$('#cart').append(newDiv);
	//animateCss(newDiv, 'bounceInRight');
	itemsInCart++;
	$('#cartItems').text(itemsInCart);
	subTotal += priceNumber;
	updatePrice();
}

function devareItem(e) {
	var price = $(e.parentElement).attr('price');
	subTotal -= price;
	//$(e.parentElement).animateCss('bounceOutRight');
	$(e.parentElement).remove();
	itemsInCart--;
	$('#cartItems').text(itemsInCart);
	updatePrice();
	cartLonelyText();
}

function cartLonelyText() {
	if (itemsInCart === 0) 
		$('#cart').append('So lonely here, add something');
}

function updatePrice() {
	$('#prices').empty();
	if (itemsInCart === 0) return;
	var newDiv = $('<div></div>');
	newDiv.append('<strong>Subtotal: $' + subTotal.toFixed(2) + '<br>');
	newDiv.append('<strong>Tax: ' + tax * 100 + '%<br>');
	newDiv.append('<strong>Total Price: $' + (subTotal + (subTotal * tax)).toFixed(2) + '</strong>');

	newDiv.append('<button class="btn btn-info btn-block" onclick="openModal()">Continue</button>');

	$('#prices').append(newDiv);
	//animateCss(newDiv, 'bounceInRight');
}


function cartToString() {
	var itemsString = "<small><p><strong>Your order:</strong><br>";
	var cartItems = document.querySelectorAll('.cart-item');
	for (var item of cartItems) {
		itemsString = itemsString + item.getAttribute('name') + " .. $" + item.getAttribute('price') + "<br>";
		}
	itemsString += '</p><p>Subtotal: $' + subTotal.toFixed(2) + '<br>';
	itemsString += 'Tax: ' + tax * 100 + '%<br>'
	itemsString += 'Total price with tax: <mark><strong>$' + (subTotal + (subTotal * tax)).toFixed(2) + '</strong></mark></p></small>';
	return itemsString;
}

function openModal() {
	$('#cartContentsModal').html(cartToString());
	$('#myModal').modal('show');
}


function formSubmitted() {
	if (!checkEmptyFields()) {		// if the fields arent empty
		alert("Thanks!", "Thanks for your order! We will contact you for more information", "success");
	} else { return; }
	// clear cart and do other cleaning if order is OK
	$('#myModal').modal('hide');
	totalPrice = 0; subTotal = 0; itemsInCart = 0;
	$('#cart').empty();
	$('#prices').empty();
	$('#cartItems').text(itemsInCart);
	cartLonelyText();
}

function checkEmptyFields() {
	var somethingEmpty = false;
  
	if ( !$.trim( $('#formName').val() ).length) { 
        //animateCSS('#formName', 'animated jello');
		somethingEmpty = true;
	}

	if ( !$.trim( $('#formAddress').val() ).length) { 
        animateCSS('#formAddress', 'animated jello');
		//somethingEmpty = true;
	}

	return somethingEmpty;
}

// tried using this amination pluging that i found but it's not functional
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
