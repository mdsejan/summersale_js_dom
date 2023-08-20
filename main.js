let total = 0;

function handleClick(target) {
    const itemName = target.childNodes[1].childNodes[3].childNodes[1].innerText;
    const price = target.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    const selectedItemOl = document.getElementById("selected-items");

    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemOl.appendChild(li);

    const getOutputPrice = document.getElementById("outputPrice").innerText.split(" ")[0];

    const setTotalPrice = parseFloat(price) + parseFloat(getOutputPrice);

    document.getElementById("outputPrice").innerText = setTotalPrice.toFixed(2);

    if (setTotalPrice > 0) {
        const purchaseButton = document.getElementById("purchase");
        purchaseButton.classList.remove("btn-disabled");
        purchaseButton.classList.add("bg-[#E527B2]", "hover:bg-[#E527B2]", "text-white");
    }

    if (setTotalPrice > 200) {
        const cuponButton = document.getElementById("cupon");
        cuponButton.classList.remove("btn-disabled");
        cuponButton.classList.add("bg-[#E527B2]", "hover:bg-[#E527B2]", "text-white");
    }
    console.log(itemName + " == " + price)

}

