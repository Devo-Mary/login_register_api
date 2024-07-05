let row = document.querySelector('.row')
let basketProducts = JSON.parse(localStorage.getItem('BasketArray'))

function updateTotalPrice() {
    let totalPrice = basketProducts.reduce((sum, item) => sum + (item.price * item.count), 0);
    document.getElementById('total-price').textContent = totalPrice;
}
updateTotalPrice()

function showProducts(a){
    row.innerHTML = ''
    basketProducts.forEach((item, index ) => {
        row.innerHTML += `<div class="card-main col-sm-7 my-3 border mx-auto">
                            <div class="row">
                                <div class="col-sm-3 "> 
                                    <img src="${item.image}" alt="" class="img-fluid rounded-start">
                                </div>
                                <div class="col-sm-5 mt-4">
                                    <h6 class="title">${item.title}</h6>
                                    <span class="price">${item.price}</span><span>₼</span>
                                </div>
                                <div class="col-sm-4 d-flex justify-content-center align-items-center">
                                    <button class="ms-2" onclick = "calculate(this, ${index}, 1)">+</button>
                                    <span class="ms-2 counter">1</span>
                                    <button class="ms-2" onclick = "calculate(this, ${index}, -1)">-</button>
                                    <button class="btn btn-danger ms-2" onclick = "deleteFunk(${item.id})">X</button>
                                </div>
                            </div>
                        </div>`
                       
                       count = item.count
    });
}
function calculate(button, index, change) {
    console.log(change);
    let counterElement = button.parentElement.querySelector('.counter')
    let priceElement = button.parentElement.previousElementSibling.querySelector('.price')
    let item = basketProducts[index]
    console.log(item);
    item.count +=change;
    console.log(item.count);
    if (item.count<1) {
        item.count =1
    }
    counterElement.innerHTML = item.count
    priceElement.innerHTML = item.price * item.count
    updateTotalPrice()
}
function deleteFunk(id){
    let deleteArr = basketProducts.filter((item) => item.id != id);
    basketProducts = deleteArr
    showProducts(basketProducts)
    localStorage.setItem('BasketArray', JSON.stringify(basketProducts))
    updateTotalPrice()

}
showProducts(basketProducts)