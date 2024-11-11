function isExistedInCart(item, arrCart) {
    let myIndex = -1;
    arrCart.forEach((itemCard, index) => {
        if(item.name == itemCard.name) myIndex = index;    
    });
    return myIndex;
}

let updatedCart = [];

    const selectedItem = (evt) => {
        const linkClicked = evt.target;
        alert("Sản phẩm đã được thêm vào giỏ hàng");

        if(typeof Storage !== undefined){
            let newItem = {
                name: linkClicked.previousElementSibling.children[0].textContent,
                price: linkClicked.previousElementSibling.children[1].textContent,
                image: linkClicked.previousElementSibling.previousElementSibling.src, // Lưu đường dẫn ảnh
                quantity: 1
            };

        if(JSON.parse(localStorage.getItem('cartItems')) === null){
            updatedCart.push(newItem);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            window.location.reload();
        } else {
            const updatedCart = JSON.parse(localStorage.getItem('cartItems'));

            if ( (index = isExistedInCart(newItem, updatedCart)) >=0){
                updatedCart[index].quantity++;
            } else {
                updatedCart.push(newItem);
            }

            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            location.reload();
        }
    } else {
        alert('Local storage is not working on your browser.');
    }
}

function addEventToAllCartButtons() {
    const add2CartLinks = document.getElementsByClassName('add');
    const arrCartLinks = Array.from(add2CartLinks);

    const registerEventListener = (elmt) => elmt.addEventListener('click',selectedItem,false);
    arrCartLinks.forEach(registerEventListener);

    const shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.addEventListener("click", function(){
        location.href = "showcart.html";
    });

    if(localStorage.cartItems != undefined) {
        const numberOrderedItems = document.querySelector('.shopping-cart .no-ordered-items');
        let numberOfItems = 0;
        let custommerCart = JSON.parse(localStorage.getItem('cartItems'));
        custommerCart.forEach(item => {
            numberOfItems += item.quantity;
        });
        numberOrderedItems.innerHTML = numberOfItems;
    }
}

function showCart() {
    if(localStorage.cartItems == undefined){
        alert('Your cart is empty. Please go back homepage to shopping.');
        location.href = "product-list.html";
    } else {
        let custommerCart = JSON.parse(localStorage.getItem('cartItems'));
        const tblHead = document.getElementsByTagName('thead')[0];
        const tblBody = document.getElementsByTagName('tbody')[0];
        const tblHFoot =document.getElementsByTagName('tfoot')[0];
        let headColumns = bodyRows = footColumns = '';
        headColumns += '<tr><th>No</th><th>Image</th><th>Product</th>' +
                        '<th>Quantity</th><th>Price</th></tr>';
        tblHead.innerHTML = headColumns;

        vat = total = amountPaid = no = 0;
        if(custommerCart[0] === null) {
            bodyRows += '<tr><td colspan="5">No items found</td></tr>'
        } else {
            custommerCart.forEach(item => {
                total += Number(item.quantity) * Number(item.price.replace(/[^0-9]/g,""));
                bodyRows += '<tr><td>' + ++no + '<td><img src="' + item.image + '" alt="' + item.name + '" width="150px"></td>' + 
                            '</td><td>' + item.name +
                            '</td><td>' + item.quantity + '</td><td>' +
                            formatCurrency(item.price.replace(/[^0-9]/g,"")) +
                            ' <a href="#" onclick="deleteCart(this)"><i class="fa-solid fa-trash-can"></i></a>';
            });
        }
        tblBody.innerHTML = bodyRows;

        footColumns += '<tr><td colspan="4">Subtotal:</td><td>' + formatCurrency(total) + '</td></tr>';
        footColumns += '<tr><td colspan="4">VAT (10%):</td><td>' + formatCurrency(Math.floor(total*0.1)) + '</td></tr>';
        footColumns += '<tr><td colspan="4">Grand total:</td><td>' + formatCurrency(Math.floor(1.1*total)) + '</td></tr>';
        tblHFoot.innerHTML = footColumns;
    }
}

function deleteCart(elmt){
    let updatedDeleteCart = [];
    let custommerCart = JSON.parse(localStorage.getItem('cartItems'));
    custommerCart.forEach(item => {
        if(item.name !== elmt.parentElement.parentElement.children[2].textContent){
            updatedDeleteCart.push(item);
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedDeleteCart));
    location.reload();
}


const formatPercentage = (value, locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(value);
}

const formatCurrency = (amount, locale = "vi-VN") => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}