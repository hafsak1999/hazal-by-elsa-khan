let cart = [];

const bagButton = document.getElementById("bagButton");
const bagCount = document.getElementById("bagCount");

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");


// SHOW MESSAGE

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);

}


// ADD PRODUCT TO CART

document.querySelectorAll(".add-button").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        showToast(name + " added to your bag.");

    });

});


// UPDATE CART

function updateCart() {

    bagCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="padding:30px 0;color:#7d6e65;">
                Your bag is currently empty.
            </p>
        `;

    }


    cart.forEach((item, index) => {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `

            <div>

                <h4>${item.name}</h4>

                <p>
                    PKR ${item.price.toLocaleString()}
                </p>

            </div>

            <button
                class="remove-item"
                onclick="removeItem(${index})">

                Remove

            </button>

        `;

        cartItems.appendChild(itemElement);

    });


    cartTotal.textContent = total.toLocaleString();

}


// REMOVE PRODUCT

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

    showToast("Item removed from your bag.");

}


// OPEN CART

bagButton.addEventListener("click", () => {

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

});


// CLOSE CART

closeCart.addEventListener("click", closeCartDrawer);

cartOverlay.addEventListener("click", closeCartDrawer);


function closeCartDrawer() {

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

}


// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    showToast("Thank you! Your message has been received.");

    contactForm.reset();

});


// NEWSLETTER

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    showToast("Welcome to the Hazal family ✦");

    newsletterForm.reset();

});


// CHECKOUT

const checkoutButton =
    document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {

        showToast("Your bag is empty.");

        return;

    }

    showToast(
        "Checkout is ready for your order."
    );

});