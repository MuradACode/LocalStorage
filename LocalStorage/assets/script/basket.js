let body = document.getElementsByTagName("tbody")[0];

window, addEventListener("load", () => {
  let basket = JSON.parse(localStorage.getItem("basket"));
  if (basket === null) {
    let innerPlugHtml = `
        <div>
        <br><br>
        <p class="font-italic text-center h6">Your cart is empty</p>
        <br><br>
        </div>`;
    body.innerHTML += innerPlugHtml;
  } else {
    for (const item of basket) {
      let innerhtml = `<tr>
        <td class="p-4">
          <div class="media align-items-center" data-id="${item.id}">
            <img src="${item.imgUrl}"
              class="d-block ui-w-40 ui-bordered mr-4" alt="">
            <div class="media-body">
              <a href="#" class="d-block text-dark">${item.header}</a>
            </div>
          </div>
        </td>
        <td class="text-right font-weight-semibold align-middle p-4">$${item.price}</td>
        <td class="text-center font-weight-semibold align-middle p-4">${item.count}</td>
        <td class="text-right font-weight-semibold align-middle p-4">$${item.price * item.count}</td>
      </tr>`;
      body.innerHTML += innerhtml;
    }
  }
});