var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartitems = document.getElementById("inetcontain");
var priceDisplay = document.getElementById("pricecart"); // Corrected the id

// Function to update the total price display
let total = 0;

if (cart.length === 0) {
    cartitems.innerHTML = "<p>Your cart is empty.</p>";
    price();
} else {
    cart.forEach(function(item, index) {
pricetotal();

        

        var cartItemDiv = document.createElement("div");
        cartItemDiv.className = "intcontain1";

        cartItemDiv.innerHTML = `
            <div class="imgcontaine_cart">
                <div class="img_cart">
                    <img src="${item.image}" alt="" class="img_size_cart" srcset="">
                </div>
                <div class="additem_cart">
                    <button class="min_product">-</button> 
                    <div class="displaynum">1</div>
                    <button class="max_product">+</button>
                </div>
            </div>
            <div class="inet_containe2">
                <div class="itemname_cart">
                    ${item.name}
                </div>
                <div class="color_item">Black</div>
                <div class="fassured">
                    Seller: ${item.seller} <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="">
                </div>
                <div class="price_cart">
                    <span class="oldprice_cart">₹16,200</span><span class="newprice-cart">₹ ${item.price} </span> <span class="offeprice_cart">51% Off</span> <span class="noofoffer">2 offers applied <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="#388e3c" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucidecart lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></span>
                </div>
                <div class="cananddave">
                    <div class="save">
                        SAVE FOR LATER
                    </div>
                    <span class="remove_cart" data-index="${index}">REMOVE</span>
                </div>
            </div>`
          ;

        // Add event listener to REMOVE button
        var removeButton = cartItemDiv.querySelector(".remove_cart");
        removeButton.addEventListener("click", function(event) {
            event.preventDefault();
            var removeIndex = parseInt(this.getAttribute("data-index")); // Use 'this' instead of 'removeButton'
            cart.splice(removeIndex, 0);
            removeItem(removeIndex);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartItemDiv.remove();
            if (cart.length === 0) {
                cartitems.innerHTML = "<p>Your cart is empty.</p>";
            }
            // Update the total price after removing item
            pricetotal(); // Call pricetotal function after removing item
        });
        

        cartitems.appendChild(cartItemDiv);
    });
}

function increase(index) {
    cart[index].quantity++; // Increment quantity
    // Update the display of the updated quantity
    document.getElementById(`quantity-${index}`).textContent = cart[index].quantity;
    pricetotal(); // Recalculate total price
}

function decrease(index) {
    if (cart[index].quantity > 1) { // Ensure quantity doesn't go below 1
        cart[index].quantity--; // Decrement quantity
        // Update the display of the updated quantity
        document.getElementById(`quantity-${index}`).textContent = cart[index].quantity;
        pricetotal(); // Recalculate total price
    }
}


function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    // Update the total price after removing item
    pricetotal();
}

function pricetotal() {
    total = 0; // Reset total before recalculating
 let  tac = 0;
let tacnew =0;
let totaltax=0;
totaldiscount =0;
 dilivery =0;
     cart.forEach(function(item) {
        total += item.price;
         tac += item.tax;
       dilivery +=item.diliverycharge;

    totalamount = total + dilivery;
    totalamount1 = total ;
      
       
       
        tacnew = tac/100;
        totaltax = parseInt(total*tacnew);

    // Update price display HTML
document.getElementById("count").innerHTML = `Flipcart(${cart.length})`;
    
    priceDisplay.innerHTML = `
        <div class="pricerateandname">
            <div class="price_itemdsplay">Price (4 items)</div>
            <span class="rate_price">₹${total}</span>
        </div>
        <div class="pricerateandname">
            <div class="discount_itemdsplay">Discount</div>
            <span class="discount_price">− ₹${totaltax}</span>
        </div>
        <div class="pricerateandname">
            <div class="dilivery_itemdsplay">Delivery Charges</div>
            <span class="dilivery_price"><span>${item.deliveryyesorno ? `<span class="dili1"> ₹${dilivery}</span>` :`<span class="dili">₹ ${dilivery}</span><span class="dili_free">Free</span></span>`}</span>
        </div>
        <div class="totalpticeandname">
            <div class="total_itemdsplay">Total Amount</div>
            <span class="total_price_cart"> ₹${item.deliveryyesorno ? `${totalamount}` : `${totalamount1}`}</span>
        </div>
        <div class="totalpticeandname1">
            <div class="total_itemdsplay1">You will save ₹${totaltax} on this order</div>
        </div>`;
        console.log(item.deliveryyesorno);
    });
}
