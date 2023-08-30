



function handleCheckboxChange(index) {
  const product = document.querySelectorAll(".product")[index];
  const checkbox = product.querySelector("input[type='checkbox']");
  const quantityInput = product.querySelector(".quantity");

  if (checkbox.checked) {
    quantityInput.disabled = false;
    quantityInput.value = 1;
    calculateProductTotal(index);
  } else {
    quantityInput.disabled = true;
    quantityInput.value = "";
    product.querySelector(".total-price").textContent = "";
    calculateTotal();
  }
}


function calculateProductTotal(index) {
  const product = document.querySelectorAll(".product")[index];
  const price = parseInt(product.querySelectorAll("td")[2].textContent.replace("VNĐ", ""));
  const quantity = parseInt(product.querySelector(".quantity").value);
  const totalPrice = price * quantity;
  product.querySelector(".total-price").textContent = totalPrice + " VNĐ";

  calculateTotal();
}


function calculateTotal() {
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((product) => {
    const checkbox = product.querySelector("input[type='checkbox']");
    const quantity = parseInt(product.querySelector(".quantity").value);

    if (checkbox.checked) {
      const price = parseInt(product.querySelectorAll("td")[2].textContent.replace("VNĐ", ""));
      total += quantity * price;
    }
  });

  document.getElementById("total-price").textContent = total + " VNĐ";
}

calculateTotal();

function handleSelectChange(event) {
  var selectElement = event.target;
  var value = selectElement.value;
  const product = document.querySelectorAll(".product")
  console.log(value)
  for (var i = 0; i < Array.from(product).length; i++) {

  product[i].style.display = 'table-row';
  }
  for (var i = 0; i < Array.from(product).length; i++) {

    if (!value) {
      const checkbox = product[i].querySelector("input[type='checkbox']");
      checkbox.checked = false;
      handleCheckboxChange(i)
    }
    
    else if (value <= 3000000) {

      const price = parseInt(product[i].querySelectorAll("td")[2].textContent.replace("VNĐ", ""));

      if (price < 3000000) {
        const checkbox = product[i].querySelector("input[type='checkbox']");
        checkbox.checked = true;
        product[i].style.display = 'table-row';
        handleCheckboxChange(i)
      }
      else {
        const checkbox = product[i].querySelector("input[type='checkbox']");
        product[i].style.display = 'none';
        checkbox.checked = false
        handleCheckboxChange(i)
      }
    }
    else if (value > 3000000 && value <= 5000000) {
      const price = parseInt(product[i].querySelectorAll("td")[2].textContent.replace("VNĐ", ""));

      if (price >= 3000000 && price <= 5000000) {
        const checkbox = product[i].querySelector("input[type='checkbox']");
        checkbox.checked = true;
        product[i].style.display = 'table-row';
        handleCheckboxChange(i)
      }
      else {
        const checkbox = product[i].querySelector("input[type='checkbox']");
        product[i].style.display = 'none';
        checkbox.checked = false
        handleCheckboxChange(i)
      }
    }
    else if (value > 5000000 && value <= 20000000) {
      const price = parseInt(product[i].querySelectorAll("td")[2].textContent.replace("VNĐ", ""));

      if (price >= 5000000 && price <= 20000000) {
        const checkbox = product[i].querySelector("input[type='checkbox']");
        checkbox.checked = true;
        product[i].style.display = 'table-row';
        handleCheckboxChange(i)
      }
      else {
        const checkbox = product[i].querySelector("input[type='checkbox']");
        product[i].style.display = 'none';
        checkbox.checked = false
        handleCheckboxChange(i)
      }
    }
  }


}