let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (ev) => {
        let obj = generateCardItem(ev);
        addToBasket(obj);
    });
});

function generateCardItem(ev) {
    let card = ev.target.parentNode.parentNode;

    let id = card.getAttribute("data-id");
    let imgUrl = card.children[0].getAttribute("src");
    let header = card.children[1].children[0].innerText;
    let price = card.children[1].children[2].innerText;
    let count = 1;
    let obj = {
        id,
        imgUrl,
        header,
        price,
        count,
    };
    return obj;
}

function addToBasket(obj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
        basket = [];
    }
    let found = basket.find(e => e.id == obj.id);
    console.log(found);
    if (found == undefined) {
        basket.push(obj);
    }
    else {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i] == found){
                basket[i].count++;
            }
        }
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(obj);
}