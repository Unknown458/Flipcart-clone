function addtocart(mainid) {
    // Define an array of mobile phones
    var mobilePhones = [
        {
            id: 1,
            name: "Apple iPhone 14 (Midnight, 128 GB)",
            price: 58999,
            image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
            seller: "TREASURE HAUL ONLINE",
            tax: 51,
            diliverycharge: 110,
       deliveryyesorno: true      
     },
        // Add more mobile phones here if needed
        { 
            id:2,
            name: "Samsung Galaxy S22 Ultra",
            price: 99999,
            image: "https://example.com/samsung-s22-ultra.jpg",
            seller: "GALAXY STORE",
            tax: 50,
            diliverycharge: 0,
            deliveryyesorno: false
        },
        {    id:3,
            name: "Google Pixel 7 Pro",
            price: 79999,
            image: "https://example.com/google-pixel-7-pro.jpg",
            seller: "PIXEL TECH",
            tax: 30,
            diliverycharge: 100,
            deliveryyesorno: true 
        }
        // Add as many mobile phones as needed
    ];

    // Retrieve the cart from localStorage or initialize it as an empty array
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the mobile phone with the specified ID
    var phoneToAdd = mobilePhones.find(function(phone) {
        return phone.id === mainid;
    });

    // If a mobile phone with the specified ID is found, add it to the cart
    if (phoneToAdd) {
        console.log("Phone to add:", phoneToAdd);
        cart.push(phoneToAdd);
    }

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the price display
    

    // Redirect to the addtocart.html page
    window.location.href = "addtocart.html";
}